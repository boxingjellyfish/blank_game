var box = {
    position: { x: 0, y: 0 },
    velocity: { x: 0.4, y: 0.2 },
    width: 40,
    height: 20,
}

var canvas = document.getElementById("canvas");
var width = canvas.width;
var height = canvas.height;
var ctx = canvas.getContext("2d");

var simulationTimestep = 1000 / 60;
var frameDelta = 0;
var lastFrameTimeMs = 0;
var fps = 10;
var fpsAlpha = 0.9;
var fpsUpdateInterval = 1000;
var lastFpsUpdate = 0;
var framesSinceLastFpsUpdate = 0;
var numUpdateSteps = 0;
var minFrameDelay = 0;
var maxAllowedFps = 144;
var running = false;
var started = false;
var panic = false;
var rafHandle;

function start() {
    if (!started) {
        started = true;
        rafHandle = requestAnimationFrame(function (timestamp) {
            draw(1);
            running = true;
            lastFrameTimeMs = timestamp;
            lastFpsUpdate = timestamp;
            framesSinceLastFpsUpdate = 0;
            rafHandle = requestAnimationFrame(animate);
        });
    }
}

function stop() {
    running = false;
    started = false;
    cancelAnimationFrame(rafHandle);
    return this;
}

function animate(timestamp) {
    rafHandle = requestAnimationFrame(animate);
    if (timestamp < lastFrameTimeMs + minFrameDelay) {
        return;
    }
    frameDelta += timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;
    begin(timestamp, frameDelta);
    if (timestamp > lastFpsUpdate + fpsUpdateInterval) {
        fps = fpsAlpha * framesSinceLastFpsUpdate * 1000 / (timestamp - lastFpsUpdate) + (1 - fpsAlpha) * fps;
        lastFpsUpdate = timestamp;
        framesSinceLastFpsUpdate = 0;
    }
    framesSinceLastFpsUpdate++;
    numUpdateSteps = 0;
    while (frameDelta >= simulationTimestep) {
        update(simulationTimestep);
        frameDelta -= simulationTimestep;
        if (++numUpdateSteps >= 240) {
            panic = true;
            break;
        }
    }
    draw(frameDelta / simulationTimestep);
    end(fps, panic);

    panic = false;
}

function begin(timestamp, frameDelta) {
    // Run any updates that are not dependent on time in the simulation.
}

function end(fps, panic) {
    // Run any updates that are not dependent on time in the simulation.
}

function update(delta) {
    if((box.position.x + box.width > width && box.velocity.x > 0) || (box.position.x < 0 && box.velocity.x < 0)){
        box.velocity.x *= -1;
    }
    if((box.position.y + box.height > height && box.velocity.y > 0) || (box.position.y < 0 && box.velocity.y < 0)){
        box.velocity.y *= -1;
    }
    box.position.x += box.velocity.x * delta;
    box.position.y += box.velocity.y * delta;
}

function draw(interp) {
    ctx.clearRect(0, 0, width, height);
    ctx.save();

    ctx.fillStyle = "darkgrey";
    ctx.fillRect(box.position.x, box.position.y, box.width, box.height);

    ctx.font="12px monospace";
    ctx.fillText(Math.round(fps) + " FPS", 1, 10);

    ctx.restore();
}

start();