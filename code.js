var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

class GameWorld {
    constructor() {
        this.width = canvas.width;
        this.height = canvas.height;
        this.physicObjects = [];
        this.particleSystem = new ParticleSystem();
    }
}

function update(delta) {
    if (Random.int(0, 5) == 0) {
        var box = new Box();
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
        }
    }
    for (var i = world.physicObjects.length - 1; i >= 0; i--) {
        var box = world.physicObjects[i];
        if ((box.maxX > world.width && box.velocity.x > 0) || (box.minX < 0 && box.velocity.x < 0)) {
            box.velocity.x *= -1;
            box.velocity.mult(new Vector(1.1, 1.1));
            if (box.maxX > world.width)
                createBoxWallCollisionParticles(box, new Vector(box.maxX, box.position.y), new Vector(-1, 0));
            else
                createBoxWallCollisionParticles(box, new Vector(box.minX, box.position.y), new Vector(1, 0));

        }
        if ((box.maxY > world.height && box.velocity.y > 0) || (box.minY < 0 && box.velocity.y < 0)) {
            box.velocity.y *= -1;
            box.velocity.mult(new Vector(1.1, 1.1));
            if (box.maxY > world.height)
                createBoxWallCollisionParticles(box, new Vector(box.position.x, box.maxY), new Vector(0, -1));
            else
                createBoxWallCollisionParticles(box, new Vector(box.position.x, box.minY), new Vector(0, 1));
        }
        for (var j = 0; j < world.physicObjects.length; j++) {
            var other_box = world.physicObjects[j];
            if (box.id != other_box.id && box.visible && !box.deleted && other_box.visible && !other_box.deleted) {
                if (box.minX < other_box.maxX &&
                    box.maxX > other_box.minX &&
                    box.minY < other_box.maxY &&
                    box.maxY > other_box.minY) {
                    if (box.area >= other_box.area) {
                        createBoxWithBoxCollisionParticles(other_box);
                        other_box.visible = false;
                        other_box.deleted = true;
                        box.width += 2;
                        box.height += 2;
                        box.velocity.mult(new Vector(0.9, 0.9));
                        box.color.saturation(box.color.s + 3);
                        if (box.width >= 200 || box.height >= 200) {
                            createBoxDestructionParticles(box);
                            box.visible = false;
                            box.deleted = true;
                        }
                    }
                }
            }
        }

        if (!box.deleted) {
            box.position.x += box.velocity.x * delta;
            box.position.y += box.velocity.y * delta;
            box.angle += Math.PI / 300;
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

    for (var i = 0; i < world.physicObjects.length; i++) {
        var box = world.physicObjects[i];
        if (box.visible && !box.deleted) {
            var gradient = ctx.createLinearGradient(box.minX, box.minY, box.maxX, box.maxY);
            gradient.addColorStop(0, box.color.copy().lightness(80).toFillStyle());
            gradient.addColorStop(1, box.color.copy().lightness(30).toFillStyle());
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

    world.particleSystem.draw(ctx, interp);

    ctx.fillStyle = "darkgrey";
    ctx.font = "12px monospace";
    ctx.fillText("FPS: " + Math.round(loop.getFPS()), 1, 10);
    ctx.fillText("Boxes: " + world.physicObjects.length, 1, 22);
    ctx.fillText("Emmiters: " + world.particleSystem.emmiters.length, 1, 34);
    ctx.fillText("Particles: " + world.particleSystem.countParticles(), 1, 46);

    ctx.restore();
}

function createBoxWallCollisionParticles(box, position, velocity) {
    var emmiter = new Emitter();
    emmiter.position = position;
    emmiter.velocity = velocity;
    emmiter.spread = Math.PI / 2;
    emmiter.size = 10;
    emmiter.color = box.color.copy().lightness(80);
    emmiter.lifespan = 100;
    emmiter.particleSize = 2;
    emmiter.emissionRate = 0.1;
    emmiter.maxParticles = 100;
    emmiter.particleLifespan = 300;
    world.particleSystem.emmiters.push(emmiter);
}

function createBoxWithBoxCollisionParticles(box) {
    var emmiter = new Emitter();
    emmiter.position = box.position;
    emmiter.velocity = box.velocity;
    emmiter.spread = Math.PI;
    emmiter.size = 2;
    emmiter.color = box.color.copy().lightness(80);
    emmiter.lifespan = 100;
    emmiter.particleSize = 2;
    emmiter.emissionRate = 0.7;
    emmiter.maxParticles = 50;
    emmiter.particleLifespan = 500;
    world.particleSystem.emmiters.push(emmiter);
}

function createBoxDestructionParticles(box) {
    var emmiter = new Emitter();
    emmiter.position = box.position;
    emmiter.velocity = new Vector(2, 2);
    emmiter.spread = Math.PI;
    emmiter.size = 2;
    emmiter.color = box.color.copy().lightness(80);
    emmiter.lifespan = 500;
    emmiter.particleSize = 8;
    emmiter.emissionRate = 0.1;
    emmiter.maxParticles = 100;
    emmiter.particleLifespan = 500;
    world.particleSystem.emmiters.push(emmiter);
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

var world = new GameWorld();

var loop = new MainLoop().setUpdate(update).setDraw(draw).start();