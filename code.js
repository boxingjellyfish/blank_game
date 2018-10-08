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

class PhysicBox {
    constructor() {
        this.id = UUID.new();
        this.position = new Vector(Random.float(0, world.width), Random.float(0, world.height));
        this.velocity = new Vector(Random.float(-0.5, 0.5), Random.float(-0.5, 0.5));
        this.width = Random.int(10, 20);
        this.height = Random.int(10, 20);
        this.color = new Color(Random.int(0, 360), 80, 50, 0.8);
        this.visible = true;
        this.deleted = false;
    }
}

function update(delta) {
    if(Random.int(0, 3) == 0) {
        world.physicObjects.push(new PhysicBox());
    }
    for (var i = world.physicObjects.length - 1; i >= 0; i--) {
        var box = world.physicObjects[i];
        if ((box.position.x + box.width > world.width && box.velocity.x > 0) || (box.position.x < 0 && box.velocity.x < 0)) {
            box.velocity.x *= -1;
            createBoxWallCollisionParticles(box);
        }
        if ((box.position.y + box.height > world.height && box.velocity.y > 0) || (box.position.y < 0 && box.velocity.y < 0)) {
            box.velocity.y *= -1;
            createBoxWallCollisionParticles(box);
        }
        for (var j = 0; j < world.physicObjects.length; j++) {
            var other_box = world.physicObjects[j];
            if (box.id != other_box.id && box.visible && other_box.visible) {
                if (box.position.x < other_box.position.x + other_box.width &&
                    box.position.x + box.width > other_box.position.x &&
                    box.position.y < other_box.position.y + other_box.height &&
                    box.height + box.position.y > other_box.position.y) {
                    if (box.width * box.height >= other_box.width * other_box.height) {
                        other_box.visible = false;
                        other_box.deleted = true;
                        box.width += 2;
                        box.height += 2;
                        box.velocity.mult(new Vector(0.95, 0.95));
                        if(box.width >= world.width || box.height >= world.height) {
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
            ctx.fillStyle = box.color.toFillStyle();
            ctx.fillRect(box.position.x, box.position.y, box.width, box.height);
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

function createBoxWallCollisionParticles(box) {
    var emmiter = new Emitter();
    emmiter.position = box.position.copy();
    emmiter.velocity = box.velocity.copy();
    emmiter.spread = Math.PI / 2;
    emmiter.size = box.height;
    emmiter.color = box.color.copy();
    emmiter.color.l *= 1.6;
    emmiter.lifespan = 500;
    emmiter.particleSize = 2;
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

var world = new GameWorld();
var loop = new MainLoop().setUpdate(update).setDraw(draw).start();