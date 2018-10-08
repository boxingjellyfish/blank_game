var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var world = {
    width: canvas.width,
    height: canvas.height,
    physicObjects: [],
    particleSystem: new ParticleSystem()
};

for (var i = 0; i < 100; i++) {
    world.physicObjects.push({
        id: i,
        position: new Vector(Math.random() * world.width, Math.random() * world.height),
        velocity: new Vector(Math.random() * Math.random(), Math.random() * Math.random()),
        width: Math.round(Math.random() * 10) + 10,
        height: Math.round(Math.random() * 10) + 10,
        color: new Color(Math.round(Math.random() * 360), 80, 50, 0.8),
        visible: true,
        deleted: false
    });
}

var sampleEmmiter = new Emitter();
sampleEmmiter.position = new Vector(world.width / 2, world.height / 2);
sampleEmmiter.velocity = new Vector(0, -1);
sampleEmmiter.spread = Math.PI / 2;
sampleEmmiter.size = 10;
sampleEmmiter.color = new Color(1, 100);
sampleEmmiter.lifespan = 5000;
sampleEmmiter.particleSize = 2;
sampleEmmiter.emissionRate = 0.1;
sampleEmmiter.maxParticles = 100;
sampleEmmiter.particleLifespan = 5000;
world.particleSystem.emmiters.push(sampleEmmiter);

function update(delta) {
    for (var i = 0; i < world.physicObjects.length; i++) {
        var box = world.physicObjects[i];
        if ((box.position.x + box.width > world.width && box.velocity.x > 0) || (box.position.x < 0 && box.velocity.x < 0)) {
            box.velocity.x *= -1;
            var collisionEmmiter = new Emitter();
            collisionEmmiter.position = box.position.copy();
            collisionEmmiter.velocity = box.velocity.copy();
            collisionEmmiter.spread = Math.PI / 2;
            collisionEmmiter.size = box.height;
            collisionEmmiter.color = box.color;
            collisionEmmiter.lifespan = 500;
            collisionEmmiter.particleSize = 2;
            collisionEmmiter.emissionRate = 0.1;
            collisionEmmiter.maxParticles = 100;
            collisionEmmiter.particleLifespan = 500;
            world.particleSystem.emmiters.push(collisionEmmiter);
        }
        if ((box.position.y + box.height > world.height && box.velocity.y > 0) || (box.position.y < 0 && box.velocity.y < 0)) {
            box.velocity.y *= -1;
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
                        box.width += 5;
                        box.height += 5;
                    }
                }
            }
        }
    }
    for (var i = world.physicObjects.length - 1; i >= 0; i--) {
        var box = world.physicObjects[i];
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
    ctx.fillText(Math.round(loop.getFPS()) + " FPS", 1, 10);
    ctx.fillText(world.physicObjects.length + " objects", 1, 22);
    ctx.fillText(world.particleSystem.countParticles() + " particles", 1, 32);

    ctx.restore();
}

function toggle() {
    if (loop.isRunning()) {
        loop.stop();
    }
    else {
        loop.start();
    }
}

var loop = new MainLoop().setUpdate(update).setDraw(draw).start();