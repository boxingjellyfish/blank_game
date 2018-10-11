var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

class GameWorld {
    constructor() {
        this.width = canvas.width;
        this.height = canvas.height;
        this.physicObjects = [];
        this.particleSystem = new ParticleSystem();
        this.input = {
            mousePosition: new Vector(0, 0),
            mouseDown: false
        };
    }
}

function update(delta) {
    var rate = world.input.mouseDown ? 0 : 5;
    if (Random.int(0, rate) == 0) {
        var box = new Box();
        if (world.input.mouseDown) {
            box.position = world.input.mousePosition.copy();
        }
        var canPlace = true;
        for (var i = 0; i < world.physicObjects.length; i++) {
            var other_box = world.physicObjects[i];
            if (other_box.visible && !other_box.deleted) {
                if (box.minX < other_box.maxX &&
                    box.maxX > other_box.minX &&
                    box.minY < other_box.maxY &&
                    box.maxY > other_box.minY) {
                    canPlace = false;
                }
            }
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
                box.velocity.x *= -1;
                box.velocity.mult(new Vector(1.1, 1.1));
                box.angularVelocity *= 1.1;
                createBoxWallCollisionParticles(box, new Vector(box.points[j].x, box.position.y), new Vector(box.velocity.copy().norm().x, 0));
                collision = true;
            }
            if (!collision && ((box.points[j].y > world.height && box.velocity.y > 0) || (box.points[j].y < 0 && box.velocity.y < 0))) {
                box.velocity.y *= -1;
                box.velocity.mult(new Vector(1.1, 1.1));
                box.angularVelocity *= 1.1;
                createBoxWallCollisionParticles(box, new Vector(box.position.x, box.points[j].y), new Vector(0, box.velocity.copy().norm().y));
                collision = true;
            }
        }
        for (var j = 0; j < world.physicObjects.length; j++) {
            var other_box = world.physicObjects[j];
            if (box.id != other_box.id && box.visible && !box.deleted && other_box.visible && !other_box.deleted) {
                if (box.intersects(other_box)) {
                    if (box.area >= other_box.area) {
                        var collisionPoint = box.intersectsSlow(other_box);
                        createBoxWithBoxCollisionParticles(other_box, collisionPoint);
                        other_box.visible = false;
                        other_box.deleted = true;                        
                        other_box.trailEmitter.lifespan = 0;
                        box.width += 2;
                        box.height += 2;
                        box.velocity.mult(new Vector(0.9, 0.9));
                        box.angularVelocity *= 0.9;
                        box.color.saturation(box.color.s + 3);
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
        }
    }

    world.particleSystem.drawForeground(ctx, interp);

    ctx.fillStyle = "darkgrey";
    ctx.font = "12px monospace";
    ctx.fillText("FPS: " + Math.round(loop.getFPS()), 1, 10);
    ctx.fillText("Boxes: " + world.physicObjects.length, 1, 22);
    ctx.fillText("Emitters: " + world.particleSystem.emitters.length, 1, 34);
    ctx.fillText("Particles: " + world.particleSystem.countParticles(), 1, 46);

    ctx.restore();
}

function createBoxWallCollisionParticles(box, position, velocity) {
    var emitter = new Emitter();
    emitter.position = position;
    emitter.velocity = velocity;
    emitter.spread = Math.PI / 2;
    emitter.size = 10;
    emitter.color = box.color.copy().lightness(80);
    emitter.lifespan = 100;
    emitter.particleSize = 2;
    emitter.emissionRate = 0.1;
    emitter.maxParticles = 100;
    emitter.particleLifespan = 300;
    world.particleSystem.emitters.push(emitter);
}

function createBoxWithBoxCollisionParticles(box, collisionPoint) {
    var emitter = new Emitter();
    emitter.position = collisionPoint != null ? collisionPoint : box.position;
    emitter.velocity = box.velocity;
    emitter.spread = Math.PI;
    emitter.size = 2;
    emitter.color = box.color.copy().lightness(80);
    emitter.lifespan = 100;
    emitter.particleSize = 2;
    emitter.emissionRate = 0.7;
    emitter.maxParticles = 50;
    emitter.particleLifespan = 500;
    world.particleSystem.emitters.push(emitter);
}

function createBoxDestructionParticles(box) {
    var emitter = new Emitter();
    emitter.position = box.position;
    emitter.velocity = new Vector(2, 2);
    emitter.spread = Math.PI;
    emitter.size = 2;
    emitter.color = box.color.copy().lightness(80);
    emitter.lifespan = 500;
    emitter.particleSize = 8;
    emitter.emissionRate = 0.1;
    emitter.maxParticles = 100;
    emitter.particleLifespan = 500;
    world.particleSystem.emitters.push(emitter);
}

function createBoxTrailParticles(box) {
    var emitter = new Emitter();
    emitter.position = box.position;
    emitter.velocity = box.velocity; //new Vector(0.1, 0.1);
    emitter.spread = Math.PI / 8;
    emitter.size = box.width;
    emitter.color = box.color.copy().lightness(20);
    emitter.lifespan = null;
    emitter.particleSize = 3;
    emitter.emissionRate = 0.04;
    emitter.maxParticles = 100;
    emitter.particleLifespan = 600;
    emitter.foreground = false;
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

var loop = new MainLoop().setUpdate(update).setDraw(draw).start();