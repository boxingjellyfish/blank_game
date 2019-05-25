/*
 * A main loop useful for games and other animated applications.
 * https://github.com/IceCreamYou/MainLoop.js/blob/gh-pages/src/mainloop.js
 */
class Loop {
    constructor(scene) {
        this.simulationTimestep = 1000 / 60;
        this.frameDelta = 0;
        this.lastFrameTimeMs = 0;
        this.fps = 60;
        this.fpsAlpha = 0.9;
        this.fpsUpdateInterval = 1000;
        this.lastFpsUpdate = 0;
        this.framesSinceLastFpsUpdate = 0;
        this.numUpdateSteps = 0;
        this.minFrameDelay = 0;
        this.running = false;
        this.started = false;
        this.panic = false;
        this.fpsHistogram = [];
        this.frameHandle = null;
        this.scene = scene;
    }

    // Returns Frames per Second.
    getFPS() {
        return this.fps;
    }

    // Returns last 100 FPS.
    getFPSHistogram() {
        return this.fpsHistogram;
    }
/*
    // Sets the function that runs at the beginning of the main loop.
    setBegin(fun) {
        this.begin = fun || this.begin;
        return this;
    }

    // Sets the function that runs updates (e.g. AI and physics).
    setUpdate(fun) {
        this.update = fun || this.update;
        return this;
    }

    // Sets the function that draws things on the screen.
    setDraw(fun) {
        this.draw = fun || this.draw;
        return this;
    }

    // Sets the function that runs at the end of the main loop.
    setEnd(fun) {
        this.end = fun || this.end;
        return this;
    }
*/

    // Starts the main loop.
    start() {
        if (!this.started) {
            this.started = true;
            this.frameHandle = requestAnimationFrame((timestamp) => {
                this.scene.draw(1);
                this.running = true;
                this.lastFrameTimeMs = timestamp;
                this.lastFpsUpdate = timestamp;
                this.framesSinceLastFpsUpdate = 0;
                this.frameHandle = requestAnimationFrame(this.animate.bind(this));
            });
        }
        return this;
    }

    // Stops the main loop.
    stop() {
        this.running = false;
        this.started = false;
        cancelAnimationFrame(this.frameHandle);
        return this;
    }

    // Returns true if loop is running.
    isRunning() {
        return this.running;
    }

    // The main loop that runs updates and rendering.
    animate(timestamp) {
        this.frameHandle = requestAnimationFrame(this.animate.bind(this));
        if (timestamp < this.lastFrameTimeMs + this.minFrameDelay) { return; }
        this.frameDelta += timestamp - this.lastFrameTimeMs;
        this.lastFrameTimeMs = timestamp;
        this.scene.begin(timestamp, this.frameDelta);
        if (timestamp > this.lastFpsUpdate + this.fpsUpdateInterval) {
            this.fps = this.fpsAlpha * this.framesSinceLastFpsUpdate * 1000 / (timestamp - this.lastFpsUpdate) + (1 - this.fpsAlpha) * this.fps;
            this.lastFpsUpdate = timestamp;
            this.framesSinceLastFpsUpdate = 0;
        }
        this.framesSinceLastFpsUpdate++;
        this.numUpdateSteps = 0;
        while (this.frameDelta >= this.simulationTimestep) {
            this.scene.update(this.simulationTimestep);
            this.frameDelta -= this.simulationTimestep;
            if (++this.numUpdateSteps >= 240) {
                this.panic = true;
                break;
            }
        }
        this.scene.draw(this.frameDelta / this.simulationTimestep);
        this.scene.end(this.fps, this.panic);
        this.panic = false;
        this.fpsHistogram.push(Math.round(this.fps));
        if (this.fpsHistogram.length >= 100) {
            this.fpsHistogram.splice(0, 1);
        }
    }
}