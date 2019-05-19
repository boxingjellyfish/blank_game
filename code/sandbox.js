var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    scene.camera.width = canvas.width;
    scene.camera.height = canvas.height;
}

window.addEventListener("visibilitychange", function () {
    if (loop.isRunning()) {
        loop.stop();
        scene.soundManager.sequencer.stop();
    }
    else {
        loop.start();
        scene.soundManager.sequencer.start();
    }
});

window.addEventListener("keypress", doKeyDown, false);

function doKeyDown(e) {
    if (e.keyCode == 47) {
        for (var i = 0; i < scene.entities.length; i++) {
            Vector.Rotate(Entity.getComponent(scene.entities[i], "Motion").acceleration, Random.Float(0, Math.PI * 2));
        }
    }
}

class Scene {
    constructor() {
        this.width = 5000;
        this.height = 2400;
        this.entities = [];
        this.entityToFollow = null;
        this.movementSystem = new MovementSystem(this.width, this.height);
        this.camera = new Camera(canvas.width, canvas.height);
        this.shapeRendererSystem = new ShapeRendererSystem();
        this.traceRendererSystem = new TraceRendererSystem();
        this.selectionSystem = new SelectionSystem();
        this.expirationSystem = new ExpirationSystem();
        this.particleEmissionSystem = new ParticleEmissionSystem();
        this.forceFieldSystem = new ForceFieldSystem();
        this.colorMutationSystem = new ColorMutationSystem();
        this.soundManager = new SoundManager();
        this.input = new Input();
        this.keyHandler = new KeyHandler();
        this.runUpdate = true;
    }

    update(delta) {
        // Save & Load
        this.keyHandler.keyStarted("KeyC");
        if (this.keyHandler.keyEnded("KeyC")) {
            var json = JSON.stringify(this.entities);
            window.localStorage.setItem("entities", json);
        }
        this.keyHandler.keyStarted("KeyV");
        if (this.keyHandler.keyEnded("KeyV")) {
            var json = window.localStorage.getItem("entities");
            if (json)
                this.entities = JSON.parse(json);
        }

        this.selectionSystem.update(delta, this.entities, this.camera);

        if (this.runUpdate) {
            this.expirationSystem.update(delta, this.entities);
            this.movementSystem.update(delta, this.entities);
            this.forceFieldSystem.update(delta, this.entities);
            this.colorMutationSystem.update(delta, this.entities);
            this.traceRendererSystem.update(delta, this.entities);
            this.particleEmissionSystem.update(delta, this.entities);
        }

        this.camera.update(delta);

        this.keyHandler.keyStarted("Space")
        if (this.keyHandler.keyEnded("Space")) {
            this.runUpdate = !this.runUpdate;
        }
    }

    draw(interp) {
        // Clear canvas and save 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();

        // Zoom camera according to scale
        ctx.scale(this.camera.zoom, this.camera.zoom);

        // Center world in canvas
        ctx.translate(canvas.width / (2 * this.camera.zoom), canvas.height / (2 * this.camera.zoom));

        // Scroll camera center
        ctx.translate(-1 * this.camera.position.x, -1 * this.camera.position.y);

        // Reference points
        var axisStyle = Color.Style(new Color(0, 100, 50, 0.5));        
        var guideStyle = Color.Style(new Color(0, 0, 100, 0.2));
        for (var i = this.width / -2; i < this.width / 2; i += 100) {
            ctx.beginPath();
            ctx.strokeStyle = i == 0 ? axisStyle : guideStyle;
            ctx.lineWidth = 1;
            ctx.moveTo(i, this.height / -2);
            ctx.lineTo(i, this.height / 2);
            ctx.stroke();
        }
        for (var i = this.height / -2; i < this.height / 2; i += 100) {
            ctx.beginPath();
            ctx.strokeStyle = i == 0 ? axisStyle : guideStyle;
            ctx.lineWidth = 1;
            ctx.moveTo(this.width / -2, i);
            ctx.lineTo(this.width / 2, i);
            ctx.stroke();
        }

        // World edges
        ctx.beginPath();
        ctx.strokeStyle = Color.Style(Color.White);
        ctx.lineWidth = 4;
        ctx.rect(0 - Math.round(this.width / 2), 0 - Math.round(this.height / 2), this.width, this.height);
        ctx.stroke();

        this.shapeRendererSystem.draw(interp, ctx, this.entities);
        this.traceRendererSystem.draw(interp, ctx, this.entities);
        this.selectionSystem.draw(interp, ctx, this.entities);

        // Restore to draw relative to window edges
        ctx.restore();

        // FPS
        ctx.fillStyle = Color.Style(Color.White50);
        ctx.font = "12px monospace";
        ctx.textBaseline = "top";
        ctx.textAlign = "right";
        ctx.fillText(Math.round(loop.getFPS()) + " FPS", canvas.width - 15, 15);

        debug(ctx, 15, 15);

        drawCursor(ctx);
    }
}

function update(delta) {
    scene.update(delta);
}

function draw(interp) {
    scene.draw(interp);
}

var scene = new Scene();
var loop = new Loop().setUpdate(update).setDraw(draw).start();
resizeCanvas();

scene.soundManager.sequencer.start();

// Random entities
for (var i = 0; i < 50; i++) {
    var entity = new Entity();
    var scale = new Vector(Random.Int(5, 10), Random.Int(2, 10));
    var position = new Vector(Random.Float(-100, 100), Random.Float(-100, 100));
    Entity.addComponent(entity, new TransformComponent(position, scale));
    var velocity = new Vector(Random.Float(-0.1, 0.1), Random.Float(-0.1, 0.1));
    var maxVelocity = Random.Float(0.05, 1.5);
    var acceleration = new Vector(Random.Float(-0.0001, 0.0001), Random.Float(-0.0001, 0.0001));
    Entity.addComponent(entity, new MotionComponent(velocity, maxVelocity, acceleration));
    var color = new Color(Random.Int(0, 360), 75, 60, 1);
    Entity.addComponent(entity, new ShapeComponent(color));
    Entity.addComponent(entity, new TraceComponent(2, color));
    Entity.addComponent(entity, new SelectableComponent());
    scene.entities.push(entity);
}

// Emitter 
var emitterEntity = new Entity();
var emitterPosition = new Vector(Random.Float(-100, 100), Random.Float(-100, 100));
Entity.addComponent(emitterEntity, new TransformComponent(emitterPosition));
var emitterComponent = new ParticleEmitterComponent();
emitterComponent.particleVelocity = new Vector(0.05, 0.05);
emitterComponent.velocityRandomness = 1.5;
emitterComponent.spread = Math.PI * 2;
emitterComponent.size = 1;
emitterComponent.color = new Color(100, 100, 90, 1);
emitterComponent.colorEnd = new Color(100, 100, 0, 0);
emitterComponent.particleSize = 2;
emitterComponent.particleSizeRandomness = 2;
emitterComponent.emissionRate = 0.05;
emitterComponent.particleLifespan = 3000;
emitterComponent.particleLifespanRandomness = 1.5;
emitterComponent.foreground = false;
Entity.addComponent(emitterEntity, emitterComponent);
var emitterVelocity = new Vector(Random.Float(-0.1, 0.1), Random.Float(-0.1, 0.1));
Entity.addComponent(emitterEntity, new MotionComponent(emitterVelocity, 1, Vector.Zero));
Entity.addComponent(emitterEntity, new SelectableComponent());
scene.entities.push(emitterEntity);

var fieldEntity = new Entity();
Entity.addComponent(fieldEntity, new TransformComponent(new Vector(emitterPosition.x, emitterPosition.y - 100)));
var fieldComponent = new ForceFieldComponent();
fieldComponent.mass = 3;
fieldComponent.destructive = true;
fieldComponent.radius = 50;
fieldComponent.enabled = true;
Entity.addComponent(fieldEntity, fieldComponent);
Entity.addComponent(fieldEntity, new MotionComponent(Vector.Copy(emitterVelocity), 1, Vector.Zero));
Entity.addComponent(fieldEntity, new SelectableComponent());
scene.entities.push(fieldEntity);

emitterComponent.fieldIds.push(fieldEntity.id);

function debug(ctx, x, y, baseline = "top", align = "left") {
    var text = scene.camera.toString();
    text += "\n" + "Entities count:   " + scene.entities.length;
    ctx.fillStyle = Color.Style(Color.White50);
    ctx.font = "12px monospace";
    ctx.textBaseline = baseline;
    ctx.textAlign = align;
    var lines = text.split("\n");
    for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], x, y);
        y += 15;
    }
}

function drawCursor(ctx) {
    var cursor = Input.Instance.mousePosition;
    var w = 12;
    ctx.fillStyle = Color.Style(new Color(0, 0, 100, 0.8));
    ctx.beginPath();
    ctx.moveTo(cursor.x, cursor.y);
    ctx.lineTo(cursor.x + w, cursor.y + w);
    ctx.lineTo(cursor.x, cursor.y + w * 1.4142);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = Color.Style(Color.Black);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cursor.x, cursor.y);
    ctx.lineTo(cursor.x + w, cursor.y + w);
    ctx.lineTo(cursor.x, cursor.y + w * 1.4142);
    ctx.closePath();
    ctx.stroke();
}