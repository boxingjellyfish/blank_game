var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var world = {
    width: canvas.width,
    height: canvas.height,
    physicObjects: []
};

for (var i = 0; i < 100; i++) {
    world.physicObjects.push({
        id: i,
        position: {
            x: Math.random() * world.width,
            y: Math.random() * world.height
        },
        velocity: {
            x: Math.random() * Math.random(),
            y: Math.random() * Math.random()
        },
        width: Math.round(Math.random() * 10) + 10,
        height: Math.round(Math.random() * 10) + 10,
        color: {
            h: Math.round(Math.random() * 360),
            s: 80,
            l: 50,
            a: 0.8
        },
        visible: true,
        deleted: false
    });
}

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
}

function draw(interp) {
    ctx.clearRect(0, 0, world.width, world.height);
    ctx.save();

    for (var i = 0; i < world.physicObjects.length; i++) {
        var box = world.physicObjects[i];
        if (box.visible) {
            ctx.fillStyle = "hsla(" + box.color.h + ", " + box.color.s + "%, " + box.color.l + "%, " + box.color.a + ")";
            ctx.fillRect(box.position.x, box.position.y, box.width, box.height);
        }
    }

    ctx.fillStyle = "darkgrey";
    ctx.font = "12px monospace";
    ctx.fillText(Math.round(loop.getFPS()) + " FPS", 1, 10);
    ctx.fillText(world.physicObjects.length + " objects", 1, 22);

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