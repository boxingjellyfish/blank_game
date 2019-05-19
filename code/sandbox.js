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
        soundManager.sequencer.stop();
    }
    else {
        loop.start();
        soundManager.sequencer.start();
    }
});

window.addEventListener("keypress", doKeyDown, false);

function doKeyDown(e) {
    if (e.keyCode == 47) {
        for (var i = 0; i < scene.entities.length; i++) {
            Vector.rotate(Entity.getComponent(scene.entities[i], "Motion").acceleration, Random.float(0, Math.PI * 2));
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
        this.particleSystem = new ParticleSystem();
        this.particleSystemECS = new ParticleSystemECS();
        this.colorMutationSystem = new ColorMutationSystem();
        this.soundManager = new SoundManager();
        this.input = new Input();
        this.keyHandler = new KeyHandler();
        this.runUpdate = true;
    }

    update(delta) {

        // Save & Load
        this.keyHandler.keyStarted("KeyC")
        this.keyHandler.keyStarted("KeyV")
        if (this.keyHandler.keyEnded("KeyC")) {
            var json = JSON.stringify(this.entities);
            window.localStorage.setItem("entities", json);
        }
        if (this.keyHandler.keyEnded("KeyV")) {
            var json = window.localStorage.getItem("entities");
            if (json)
                this.entities = JSON.parse(json);
        }

        this.selectionSystem.update(delta, this.entities, this.camera);

        if (this.runUpdate) {
            this.expirationSystem.update(delta, this.entities);
            this.movementSystem.update(delta, this.entities);
            this.colorMutationSystem.update(delta, this.entities);
            this.traceRendererSystem.update(delta, this.entities);
            this.particleSystemECS.update(delta, this.entities);
            this.particleSystem.update(delta);
        }

        this.camera.update(delta);

        if (Input.instance.isKeyDown("Space"))
            this.runUpdate = !this.runUpdate;
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
        for (var i = this.width / -2; i < this.width / 2; i += 100) {
            ctx.beginPath();
            ctx.strokeStyle = i == 0 ? Color.fixedStyle(0, 100, 50, 0.5) : Color.fixedStyle(0, 0, 100, 0.2);
            ctx.lineWidth = 1;
            ctx.moveTo(i, this.height / -2);
            ctx.lineTo(i, this.height / 2);
            ctx.stroke();
        }
        for (var i = this.height / -2; i < this.height / 2; i += 100) {
            ctx.beginPath();
            ctx.strokeStyle = i == 0 ? Color.fixedStyle(0, 100, 50, 0.5) : Color.fixedStyle(0, 0, 100, 0.2);
            ctx.lineWidth = 1;
            ctx.moveTo(this.width / -2, i);
            ctx.lineTo(this.width / 2, i);
            ctx.stroke();
        }

        // World edges
        ctx.beginPath();
        ctx.strokeStyle = Color.fixedStyle(0, 0, 100, 1);
        ctx.lineWidth = 4;
        ctx.rect(0 - Math.round(this.width / 2), 0 - Math.round(this.height / 2), this.width, this.height);
        ctx.stroke();

        this.particleSystem.draw(ctx, interp, false);

        this.shapeRendererSystem.draw(interp, ctx, this.entities);
        this.traceRendererSystem.draw(interp, ctx, this.entities);
        this.selectionSystem.draw(interp, ctx, this.entities);

        // Restore to draw relative to window edges
        ctx.restore();

        // FPS
        ctx.fillStyle = Color.fixedStyle(0, 0, 100, 0.5);
        ctx.font = "12px monospace";
        ctx.textBaseline = "top";
        ctx.textAlign = "right";
        ctx.fillText(Math.round(loop.getFPS()) + " FPS", canvas.width - 20, 20);

        debug(ctx, scene.camera.toString(), 15, 15);

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
    var position = new Vector(Random.float(-100, 100), Random.float(-100, 100));
    Entity.addComponent(entity, new TransformComponent(position));
    var velocity = new Vector(Random.float(-0.1, 0.1), Random.float(-0.1, 0.1));
    var maxVelocity = Random.float(0.05, 1.5);
    var acceleration = new Vector(Random.float(-0.0001, 0.0001), Random.float(-0.0001, 0.0001));
    Entity.addComponent(entity, new MotionComponent(velocity, maxVelocity, acceleration));
    var color = new Color(Random.value([0, 60, 100, 250]), 100, 60, 1);
    Entity.addComponent(entity, new ShapeComponent(6, 6, color));
    Entity.addComponent(entity, new TraceComponent(2, color));
    Entity.addComponent(entity, new SelectableComponent());
    scene.entities.push(entity);
}

// Emitter ECS

var emitterEntity = new Entity();
Entity.addComponent(emitterEntity, new TransformComponent(new Vector(400, 0)));
var emitterComponent = new ParticleEmitterComponent();
emitterComponent.particleVelocity = new Vector(0.05, 0.05);
emitterComponent.velocityRandomness = 1.5;
emitterComponent.spread = Math.PI * 2;
emitterComponent.size = 1;
emitterComponent.color = new Color(0, 100, 90, 1);
emitterComponent.colorEnd = new Color(0, 100, 0, 0);
emitterComponent.particleSize = 2;
emitterComponent.emissionRate = 0.08;
emitterComponent.maxParticles = 500;
emitterComponent.particleLifespan = 5000;
emitterComponent.particleLifespanRandomness = 1.5;
emitterComponent.foreground = false;
Entity.addComponent(emitterEntity, emitterComponent);
scene.entities.push(emitterEntity);

// Emitter OLD
var emitter = new Emitter();
emitter.position = Vector.Zero;
emitter.velocity = new Vector(1, 1);
emitter.velocityRandomness = 1.5;
emitter.spread = Math.PI * 2;
emitter.size = 1;
emitter.color = new Color(0, 100, 90, 1);
emitter.colorEnd = new Color(0, 100, 0, 0);
emitter.lifespan = null;
emitter.particleSize = 2;
emitter.emissionRate = 0.1;
emitter.maxParticles = 500;
emitter.particleLifespan = 5000;
emitter.particleLifespanRandomness = 1.5;
emitter.foreground = false;
scene.particleSystem.emitters.push(emitter);

function debug(ctx, text, x, y, baseline = "top", align = "left") {
    ctx.fillStyle = Color.fixedStyle(0, 0, 100, 0.5);
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
    ctx.fillStyle = Color.fixedStyle(0, 0, 100, 0.8);
    ctx.beginPath();
    ctx.moveTo(cursor.x, cursor.y);
    ctx.lineTo(cursor.x + w, cursor.y + w);
    ctx.lineTo(cursor.x, cursor.y + w * 1.4142);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = Color.fixedStyle(0, 0, 0, 1);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cursor.x, cursor.y);
    ctx.lineTo(cursor.x + w, cursor.y + w);
    ctx.lineTo(cursor.x, cursor.y + w * 1.4142);
    ctx.closePath();
    ctx.stroke();
}