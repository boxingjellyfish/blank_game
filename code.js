var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var world = {
    width: canvas.width,
    height: canvas.height,
    physicObjects: [],
    particleEmmiters: []
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

var emmiter = new Emitter();
emmiter.position = new Vector(world.width / 2, world.height / 2);
emmiter.velocity = new Vector(1, 1);
emmiter.spread = Math.PI / 2;
emmiter.size = 10;
emmiter.color = new Color(1, 100);
emmiter.particleSize = 2;
emmiter.emissionRate = 0.1;
emmiter.maxParticles = 1000;
emmiter.lifespan = 5000;
world.particleEmmiters.push(emmiter);

function update(delta) {
    for (var i = 0; i < world.physicObjects.length; i++) {
        var box = world.physicObjects[i];
        if ((box.position.x + box.width > world.width && box.velocity.x > 0) || (box.position.x < 0 && box.velocity.x < 0)) {
            box.velocity.x *= -1;
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
                    //box.velocity.x *= -1;
                    //box.velocity.y *= -1;
                    //box.visible = false;
                    //other_box.visible = false;
                    if (box.width * box.height >= other_box.width * other_box.height) {
                        other_box.visible = false;
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
    for(var i = 0; i < world.particleEmmiters.length; i++) {
        world.particleEmmiters[i].update(delta);
    }
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

    for(var i = 0; i < world.particleEmmiters.length; i++) {
        world.particleEmmiters[i].draw(ctx, interp);
    }

    ctx.fillStyle = "darkgrey";
    ctx.font = "12px monospace";
    ctx.fillText(Math.round(loop.getFPS()) + " FPS", 1, 10);
    ctx.fillText(world.physicObjects.length + " objects", 1, 22);
    ctx.fillText(world.particleEmmiters[0].particles.length + " particles", 1, 32);

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