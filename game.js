var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

class GameWorld {
    constructor() {
        this.width = canvas.width;
        this.height = canvas.height;
        this.particleSystem = new ParticleSystem();
        this.input = {
            mousePosition: Vector.Zero,
            mouseDown: false
        };
        this.soundManager = new SoundManager();
        this.pad = new Pad();
        this.ball = new Ball();
        this.bricks = [];
    }
}

class Pad extends Box {
    constructor() {
        super();
    }

    update(delta) {

    }

    draw(ctx, interp) {
        var points = this.points;

        var gradient = ctx.createLinearGradient(points[0].x, points[0].y, points[2].x, points[2].y);
        gradient.addColorStop(0, this.color.copy.lightness(60).style);
        gradient.addColorStop(1, this.color.copy.lightness(40).style);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (var i = 1; i < points.length; i++)
            ctx.lineTo(points[i].x, points[i].y);
        ctx.closePath();
        ctx.fill();

        ctx.lineWidth = 2;
        ctx.strokeStyle = this.color.style;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (var j = 1; j < points.length; j++)
            ctx.lineTo(points[j].x, points[j].y);
        ctx.closePath();
        ctx.stroke();
    }
}

class Ball extends Entity {
    constructor() {
        super();
        this.radius = 10;
        this.color = new Color(0, 100, 0, 1);
        this.captured = true;
    }

    get minMax() {
        return [
            new Vector(this.position.x - this.radius, this.position.y - this.radius),
            new Vector(this.position.x + this.radius, this.position.y + this.radius),
        ];
    }

    get boundingBox() {
        return [
            new Vector(minMax[0].x, minMax[0].y),
            new Vector(minMax[1].x, minMax[0].y),
            new Vector(minMax[1].x, minMax[1].y),
            new Vector(minMax[0].x, minMax[1].y)
        ];
    }

    update(delta) {

    }

    draw(ctx, interp) {
        var gradient = ctx.createRadialGradient(this.position.x, this.position.y, this.radius, this.position.x - this.radius / 3, this.position.y - this.radius / 3, 2);
        gradient.addColorStop(0, this.color.copy.lightness(30).style);
        gradient.addColorStop(1, this.color.copy.lightness(70).style);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function update(delta) {

    for (var i = world.bricks.length - 1; i >= 0; i--) {
        var brick = world.bricks[i];

        for (var j = 0; j < brick.points.length; j++) {
            var wallCollission = false;
            if (!wallCollission && ((brick.points[j].x > world.width && brick.velocity.x > 0) || (brick.points[j].x < 0 && brick.velocity.x < 0))) {
                wallCollission = true;
                brick.velocity.x *= -1;
            }
            if (!wallCollission && ((brick.points[j].y > world.height && brick.velocity.y > 0) || (brick.points[j].y < 0 && brick.velocity.y < 0))) {
                wallCollission = true;
                brick.velocity.y *= -1;
            }
            if (wallCollission) {
                // TODO: do something?
            }
        }

        if (Collissions.boundigBoxes(brick.minMax[0], brick.minMax[1], world.ball.minMax[0], world.ball.minMax[1])) {
            var ballCollissionSegment = null;
            for (var j = 0; j < brick.lines.length; j++) {
                if (Collissions.lineCircle(brick.lines[j].v0, brick.lines[j].v1, world.ball.position, world.ball.radius)) {
                    ballCollissionSegment = brick.lines[j];
                }
            }
            if (ballCollissionSegment != null) {
                if (brick.velocity.x == 0 && brick.velocity.y == 0) {
                    brick.velocity = world.ball.velocity.copy.multiply(new Vector(Random.float(0.1, 0.4), Random.float(0.1, 0.4)));
                    brick.angularVelocity = Random.float(-Math.PI / 2000, Math.PI / 2000);

                    world.bricks.splice(i, 1);
                    world.bricks.push(brick);
                }
                else {
                    brickDestruction(brick);
                    brick.visible = false;
                    brick.deleted = true;
                }
                world.ball.velocity.reflect(ballCollissionSegment.v1, ballCollissionSegment.v0);
                world.soundManager.padCollission();
            }
        }

        if (!brick.deleted) {
            brick.position.x += brick.velocity.x * delta;
            brick.position.y += brick.velocity.y * delta;
            brick.angle += brick.angularVelocity * delta;
            brick.angularVelocity *= 0.995;
        }
        else {
            world.bricks.splice(i, 1);
        }
    }

    if (world.input.mouseDown) {
        world.ball.captured = false;
    }

    if (!world.ball.captured && world.ball.position.x + world.ball.radius > world.width && world.ball.velocity.x > 0) {
        world.ball.velocity.x *= -1;
        ballWallCollission(new Vector(world.width, world.ball.position.y), new Vector(world.ball.velocity.copy.normalize.x, 0));
        world.soundManager.wallCollission();
    }
    if (!world.ball.captured && world.ball.position.x - world.ball.radius < 0 && world.ball.velocity.x < 0) {
        world.ball.velocity.x *= -1;
        ballWallCollission(new Vector(0, world.ball.position.y), new Vector(world.ball.velocity.copy.normalize.x, 0));
        world.soundManager.wallCollission();
    }
    if (!world.ball.captured && world.ball.position.y - world.ball.radius < 0 && world.ball.velocity.y < 0) {
        world.ball.velocity.y *= -1;
        ballWallCollission(new Vector(world.ball.position.x, 0), new Vector(0, world.ball.velocity.copy.normalize.y));
        world.soundManager.wallCollission();
    }

    if (!world.ball.captured && Collissions.lineCircle(world.pad.boundingBox[0], world.pad.boundingBox[1], world.ball.position, world.ball.radius) && world.ball.velocity.y > 0) {
        world.ball.velocity.y *= -1;
        var collissionX = world.ball.position.copy.substract(world.pad.position).x;
        world.ball.velocity.x = collissionX * 0.01; // Magic Factor (TM)
        ballPadCollission(new Vector(world.ball.position.x, world.ball.position.y + world.ball.radius), new Vector(0, world.ball.velocity.copy.normalize.y));
        world.soundManager.padCollission();
    }

    if (!world.ball.captured && world.ball.position.y + world.ball.radius > world.height && world.ball.velocity.y > 0) {
        world.ball.captured = true;
        world.ball.velocity = new Vector(Random.float(-0.5, 0.5), -0.5);
        world.soundManager.floorCollission();
    }

    world.pad.position.x = world.input.mousePosition.x;
    if (world.pad.position.x > world.width - world.pad.width / 2)
        world.pad.position.x = world.width - world.pad.width / 2;
    if (world.pad.position.x < world.pad.width / 2)
        world.pad.position.x = world.pad.width / 2;

    if (world.ball.captured) {
        world.ball.position.x = world.pad.position.x;
        world.ball.position.y = world.pad.position.y - world.pad.height / 2 - world.ball.radius - 1;
    }
    else {
        world.ball.position.x += world.ball.velocity.x * delta;
        world.ball.position.y += world.ball.velocity.y * delta;
        world.ball.angle += world.ball.angularVelocity * delta;
    }

    if (world.bricks.length == 0) {
        initStage();
    }

    world.particleSystem.update(delta);
}

function draw(interp) {
    ctx.clearRect(0, 0, world.width, world.height);
    ctx.save();

    world.particleSystem.draw(ctx, interp, false);

    for (var i = 0; i < world.bricks.length; i++) {
        var brick = world.bricks[i];
        if (brick.visible && !brick.deleted) {
            var points = brick.points;
            gradient = ctx.createLinearGradient(points[0].x, points[0].y, points[2].x, points[2].y);
            gradient.addColorStop(0, brick.color.copy.lightness(90).style);
            gradient.addColorStop(1, brick.color.copy.lightness(20).style);
            ctx.fillStyle = gradient;

            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (var j = 1; j < points.length; j++)
                ctx.lineTo(points[j].x, points[j].y);
            ctx.closePath();
            ctx.fill();

            ctx.lineWidth = 2;
            ctx.strokeStyle = brick.color.style;
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (var j = 1; j < points.length; j++)
                ctx.lineTo(points[j].x, points[j].y);
            ctx.closePath();
            ctx.stroke();
        }
    }

    world.pad.draw(ctx, interp);

    world.ball.draw(ctx, interp);

    world.particleSystem.draw(ctx, interp, true);

    if (showDebug) {
        ctx.fillStyle = new Color(0, 0, 100, 0.5).style;
        ctx.font = "12px monospace";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Bricks: " + world.bricks.length, 5, 5);
        ctx.fillText("Emitters: " + world.particleSystem.emitters.length, 5, 5 + 12 + 2);
        ctx.fillText("Particles: " + world.particleSystem.countParticles(), 5, 5 + 12 + 2 + 12 + 2);

        ctx.fillStyle = new Color(0, 0, 50, 0.5).style;
        for (var i = 0; i < loop.getFPSHistogram().length; i = i + 2) {
            ctx.fillRect(world.width - 105 + i, 65 - loop.getFPSHistogram()[i], 1, 1 + loop.getFPSHistogram()[i]);
        }

        ctx.fillStyle = new Color(0, 0, 0, 0.2).style;
        ctx.fillRect(world.width - 80, 25, 50, 20);

        ctx.fillStyle = new Color(0, 0, 100, 0.5).style;
        ctx.font = "12px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(Math.round(loop.getFPS()) + " FPS", world.width - 55, 35);
    }

    ctx.restore();
}

function ballWallCollission(position, velocity) {
    var emitter = Emitter.fromObject(Data.ballWallCollission);
    emitter.position = position;
    emitter.velocity = velocity;
    world.particleSystem.emitters.push(emitter);
}

function ballPadCollission(position, velocity) {
    var emitter = Emitter.fromObject(Data.ballWallCollission);
    emitter.position = position;
    emitter.velocity = velocity;
    world.particleSystem.emitters.push(emitter);
}

function brickDestruction(brick) {
    var emitter = Emitter.fromObject(Data.boxDestructionParticles);
    emitter.position = brick.position;
    emitter.color = brick.color.copy;
    emitter.colorEnd = brick.color.copy.alpha(0);
    world.particleSystem.emitters.push(emitter);
}

function startStopLoop() {
    if (loop.isRunning()) {
        loop.stop();
    }
    else {
        loop.start();
    }
}

var showDebug = false;
function showHideDebug() {
    showDebug = !showDebug;
}

document.addEventListener("visibilitychange", function () {
    startStopLoop();
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

window.addEventListener("gamepadconnected", function (e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gamepad.axes.length);
});

var world = new GameWorld();

function initStage() {
    world.pad.position = new Vector(world.width / 2, world.height - 30);
    world.pad.width = 100;
    world.pad.height = 20;
    world.pad.color = new Color(0, 0, 30, 1);

    world.ball.position = new Vector(world.pad.position.x, world.pad.position.y - world.pad.height / 2 - world.ball.radius - 1);
    world.ball.velocity = new Vector(Random.float(-0.5, 0.5), -0.8);
    world.ball.radius = 10;
    world.ball.color = new Color(0, 0, 30, 1);
    world.ball.captured = true;

    var brickRows = Random.int(6, 15);
    var brickColumns = Random.int(6, 15);
    for (var i = 1; i < brickRows; i++) {
        for (var j = 1; j < brickColumns - 1; j++) {
            if (Random.int(0, 5) > 0) {
                var brick = new Box();
                brick.width = world.width / brickColumns - 1;
                brick.height = 30;
                brick.position = new Vector(world.width / brickColumns * j + 1, i * 31);
                brick.color = new Color(Random.int(0, 360), 100, 50, 1);
                world.bricks.push(brick);
            }
        }
    }
}

initStage();

var backgroundParticles = Emitter.fromObject(Data.background);
world.particleSystem.emitters.push(backgroundParticles);

var loop = new Loop().setUpdate(update).setDraw(draw).start();
