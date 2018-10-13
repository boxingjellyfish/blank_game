var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

class GameWorld {
    constructor() {
        this.width = canvas.width;
        this.height = canvas.height;
        this.physicObjects = [];
        this.particleSystem = new ParticleSystem();
        this.input = {
            mousePosition: Vector.Zero,
            mouseDown: false
        };
        this.soundManager = new SoundManager();
    }
}

function update(delta) {
    var rate = world.input.mouseDown ? 0 : Number.MAX_SAFE_INTEGER;
    if (Random.int(0, rate) == 0) {
        var box = new Box();
        if (world.input.mouseDown) {
            box.position = world.input.mousePosition.copy();
        }
        canPlace = true;
        for (var i = 0; canPlace && i < box.points.length; i++) {
            canPlace = !(box.points[i].x > world.width || box.points[i].x < 0 || box.points[i].y > world.height || box.points[i].y < 0);
        }
        for (var i = 0; canPlace && i < world.physicObjects.length; i++) {
            var other_box = world.physicObjects[i];
            if (other_box.visible && !other_box.deleted && box.intersects(other_box))
                canPlace = false;
        }
        if (canPlace) {
            world.physicObjects.push(box);
            createBoxTrailParticles(box);
        }
    }
    for (var i = world.physicObjects.length - 1; i >= 0; i--) {
        var box = world.physicObjects[i];
        for (var j = 0; j < box.points.length; j++) {
            var collision = false;
            if (!collision && ((box.points[j].x > world.width && box.velocity.x > 0) || (box.points[j].x < 0 && box.velocity.x < 0))) {
                collision = true;
                box.velocity.x *= -1;
                createBoxWallCollisionParticles(box, new Vector(box.points[j].x, box.position.y), new Vector(box.velocity.copy().normalize().x, 0));
            }
            if (!collision && ((box.points[j].y > world.height && box.velocity.y > 0) || (box.points[j].y < 0 && box.velocity.y < 0))) {
                collision = true;
                box.velocity.y *= -1;
                createBoxWallCollisionParticles(box, new Vector(box.position.x, box.points[j].y), new Vector(0, box.velocity.copy().normalize().y));
            }
            if (collision) {
                if (box.velocity.magnitude < 1.5)
                    box.velocity.multiply(new Vector(1.1, 1.1));
                if (Math.abs(box.angularVelocity) < 0.02)
                    box.angularVelocity *= 1.1;
                world.soundManager.wallCollission();
            }
        }
        for (var j = 0; j < world.physicObjects.length; j++) {
            var other_box = world.physicObjects[j];
            if (box.id != other_box.id && box.visible && !box.deleted && other_box.visible && !other_box.deleted) {
                if (box.intersects(other_box)) {
                    if (box.area >= other_box.area) {
                        var collisionPoint = box.intersectsEdges(other_box);
                        createBoxWithBoxCollisionParticles(other_box, collisionPoint);
                        other_box.visible = false;
                        other_box.deleted = true;
                        other_box.trailEmitter.lifespan = 0;
                        box.width += 2;
                        box.height += 2;
                        box.velocity.multiply(new Vector(0.9, 0.9));
                        box.angularVelocity *= 0.9;
                        box.color.saturation(box.color.s - 3);
                        if (!world.input.mouseDown)
                            world.soundManager.boxCollission();
                        if (box.width >= 200 || box.height >= 200) {
                            createBoxDestructionParticles(box);
                            box.visible = false;
                            box.deleted = true;
                            box.trailEmitter.lifespan = 0;
                        }
                    }
                }
            }
        }

        if (!box.deleted) {
            box.position.x += box.velocity.x * delta;
            box.position.y += box.velocity.y * delta;
            box.angle += box.angularVelocity * delta;
        }
        else {
            world.physicObjects.splice(i, 1);
        }
    }
    world.particleSystem.update(delta);
}

function draw(interp) {
    ctx.clearRect(0, 0, world.width, world.height);
    ctx.save();

    world.particleSystem.drawBackground(ctx, interp);

    for (var i = 0; i < world.physicObjects.length; i++) {
        var box = world.physicObjects[i];
        if (box.visible && !box.deleted) {
            var minMax = box.minMax;
            var gradient = ctx.createLinearGradient(minMax[0].x, minMax[0].y, minMax[1].x, minMax[1].y);
            gradient.addColorStop(0, box.color.copy().lightness(90).toFillStyle());
            gradient.addColorStop(1, box.color.copy().lightness(20).toFillStyle());
            ctx.fillStyle = gradient;

            ctx.beginPath();
            ctx.moveTo(box.points[0].x, box.points[0].y);
            for (var j = 1; j < box.points.length; j++)
                ctx.lineTo(box.points[j].x, box.points[j].y);
            ctx.closePath();
            ctx.fill();

            ctx.lineWidth = 2;
            ctx.strokeStyle = box.color.toFillStyle();
            ctx.beginPath();
            ctx.moveTo(box.points[0].x, box.points[0].y);
            for (var j = 1; j < box.points.length; j++)
                ctx.lineTo(box.points[j].x, box.points[j].y);
            ctx.closePath();
            ctx.stroke();

            /*
            ctx.lineWidth = 1;
            ctx.strokeStyle = box.color.toFillStyle();
            ctx.beginPath();
            ctx.moveTo(box.boundingBox[0].x, box.boundingBox[0].y);
            for (var j = 1; j < box.boundingBox.length; j++)
                ctx.lineTo(box.boundingBox[j].x, box.boundingBox[j].y);
            ctx.closePath();
            ctx.stroke();
            */
        }
    }

    world.particleSystem.drawForeground(ctx, interp);

    ctx.fillStyle = "darkgrey";
    ctx.font = "12px monospace";
    ctx.fillText("Boxes: " + world.physicObjects.length, 1, 10);
    ctx.fillText("Emitters: " + world.particleSystem.emitters.length, 1, 22);
    ctx.fillText("Particles: " + world.particleSystem.countParticles(), 1, 34);

    ctx.fillStyle = new Color(0, 0, 50, 0.5).toFillStyle();
    for (var i = 0; i < loop.getFPSHistogram().length; i = i + 2) {
        ctx.fillRect(world.width - 105 + i, 65 - loop.getFPSHistogram()[i], 1, 1 + loop.getFPSHistogram()[i]);
    }
    ctx.fillStyle = "darkgrey";
    ctx.font = "14px monospace";
    ctx.fillText(Math.round(loop.getFPS()) + " FPS", world.width - 55, 40);

    ctx.restore();
}

function createBoxWallCollisionParticles(box, position, velocity) {
    var emitter = Emitter.fromObject(Data.boxWithWallCollisionParticles);
    emitter.position = position;
    emitter.velocity = velocity;
    emitter.color = box.color.copy();
    emitter.colorEnd = box.color.copy().alpha(0);
    world.particleSystem.emitters.push(emitter);
}

function createBoxWithBoxCollisionParticles(box, collisionPoint) {
    var emitter = Emitter.fromObject(Data.boxWithBoxCollisionParticles);
    emitter.position = collisionPoint != null ? collisionPoint : box.position;
    emitter.velocity = box.velocity;
    emitter.color = box.color.copy();
    emitter.colorEnd = box.color.copy().alpha(0);
    world.particleSystem.emitters.push(emitter);
}

function createBoxDestructionParticles(box) {
    var emitter = Emitter.fromObject(Data.boxDestructionParticles);
    emitter.position = box.position;
    emitter.color = box.color.copy();
    emitter.colorEnd = box.color.copy().alpha(0);
    world.particleSystem.emitters.push(emitter);
}

function createBoxTrailParticles(box) {
    var emitter = Emitter.fromObject(Data.boxTrailParticles);
    emitter.position = box.position;
    emitter.velocity = box.velocity;
    emitter.size = box.width;
    emitter.color = box.color.copy();
    emitter.colorEnd = box.color.copy().alpha(0);
    world.particleSystem.emitters.push(emitter);
    box.trailEmitter = emitter;
}

function toggle() {
    if (loop.isRunning()) {
        loop.stop();
    }
    else {
        loop.start();
    }
}

document.addEventListener("visibilitychange", function () {
    toggle();
});

canvas.addEventListener("mousemove", function (evt) {
    var rect = canvas.getBoundingClientRect();
    world.input.mousePosition.x = evt.clientX - rect.left;
    world.input.mousePosition.y = evt.clientY - rect.top;
});
canvas.addEventListener("mousedown", function (evt) {
    world.input.mouseDown = true;
});
canvas.addEventListener("mouseup", function (evt) {
    world.input.mouseDown = false;
});

var world = new GameWorld();

var backgroundParticles = Emitter.fromObject(Data.backgroundParticles);
world.particleSystem.emitters.push(backgroundParticles);

var emitter = new Emitter();
emitter.position = new Vector(100, 100);
emitter.velocity = new Vector(1, 1);
emitter.velocityRandomness = 1.5;
emitter.spread = Math.PI / 12;
emitter.size = 1;
emitter.color = new Color(0, 100, 100, 1);
emitter.colorEnd = new Color(0, 100, 0, 0);
emitter.lifespan = null;
emitter.particleSize = 2;
emitter.emissionRate = 0.2;
emitter.maxParticles = 1000;
emitter.particleLifespan = 1000;
emitter.particleLifespanRandomness = 1.5;
emitter.foreground = false;

var field = new Field();
field.position = new Vector(300, 300);
field.mass = 1000;
field.destructive = true;
field.radius = 100;
emitter.fields.push(field);

// world.particleSystem.emitters.push(emitter);

var loop = new Loop().setUpdate(update).setDraw(draw).start();

var emitterJson;

function saveTest() {
    emitterJson = JSON.stringify(world.particleSystem.emitters[0]);
    world.particleSystem.emitters = [];
}

function loadTest() {
    var emitter = Emitter.fromJson(emitterJson);
    world.particleSystem.emitters = [emitter];
}

function loadFromData() {
    var emitter = Emitter.fromObject(Data.emitter);
    world.particleSystem.emitters = [emitter];
}