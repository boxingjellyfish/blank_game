var canvas = document.getElementById("canvas");
var width = canvas.width;
var height = canvas.height;
var ctx = canvas.getContext("2d");

var physicObjects = [];
for (var i = 0; i < 100; i++) {
    physicObjects.push({
        id: i,
        position: {
            x: Math.random() * width,
            y: Math.random() * height
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
        }
    });
}

function update(delta) {
    for (var i = 0; i < physicObjects.length; i++) {
        var box = physicObjects[i];
        if ((box.position.x + box.width > width && box.velocity.x > 0) || (box.position.x < 0 && box.velocity.x < 0)) {
            box.velocity.x *= -1;
        }
        if ((box.position.y + box.height > height && box.velocity.y > 0) || (box.position.y < 0 && box.velocity.y < 0)) {
            box.velocity.y *= -1;
        }
        for (var j = 0; j < physicObjects.length; j++) {
            var other_box = physicObjects[j];
            if(box.id != other_box.id) {
                if (box.position.x < other_box.position.x + other_box.width &&
                    box.position.x + box.width > other_box.position.x &&
                    box.position.y < other_box.position.y + other_box.height &&
                    box.height + box.position.y > other_box.position.y) {
                        box.velocity.x *= -1;
                        box.velocity.y *= -1;
                 }
            }
        }
    }
    for (var i = 0; i < physicObjects.length; i++) {        
        var box = physicObjects[i];
        box.position.x += box.velocity.x * delta;
        box.position.y += box.velocity.y * delta;
    }
}

function draw(interp) {
    ctx.clearRect(0, 0, width, height);
    ctx.save();

    for (var i = 0; i < physicObjects.length; i++) {
        var box = physicObjects[i];
        ctx.fillStyle = "hsla(" + box.color.h + ", " + box.color.s + "%, " + box.color.l + "%, " + box.color.a + ")";
        ctx.fillRect(box.position.x, box.position.y, box.width, box.height);
    }

    ctx.fillStyle = "darkgrey";
    ctx.font = "12px monospace";
    ctx.fillText(Math.round(MainLoop.getFPS()) + " FPS", 1, 10);

    ctx.restore();
}

function toggle() {
    if (MainLoop.isRunning()) {
        MainLoop.stop();
    }
    else {
        MainLoop.start();
    }
}

MainLoop.setUpdate(update).setDraw(draw).start();