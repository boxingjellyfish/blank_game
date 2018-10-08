// https://github.com/IceCreamYou/MainLoop.js/blob/gh-pages/src/mainloop.js

class MainLoop {

    constructor() {
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
        this.begin = function () { };
        this.update = function () { };
        this.draw = function () { };
        this.end = function () { };
        this.frameHandle = null;
    }

    getSimulationTimestep() {
        return this.simulationTimestep;
    }

    setSimulationTimestep(timestep) {
        this.simulationTimestep = timestep;
        return this;
    }

    getFPS() {
        return this.fps;
    }

    getMaxAllowedFPS() {
        return 1000 / this.minFrameDelay;
    }

    setMaxAllowedFPS(fps) {
        if (typeof fps === 'undefined') {
            this.fps = Infinity;
        }
        if (fps === 0) {
            this.stop();
        }
        else {
            // Dividing by Infinity returns zero.
            minFrameDelay = 1000 / this.fps;
        }
        return this;
    }

    resetFrameDelta() {
        var oldFrameDelta = this.frameDelta;
        this.frameDelta = 0;
        return oldFrameDelta;
    }

    setBegin(fun) {
        this.begin = fun || this.begin;
        return this;
    }

    setUpdate(fun) {
        this.update = fun || this.update;
        return this;
    }

    setDraw(fun) {
        this.draw = fun || this.draw;
        return this;
    }

    setEnd(fun) {
        this.end = fun || this.end;
        return this;
    }

    start() {
        if (!this.started) {
            this.started = true;
            this.frameHandle = requestAnimationFrame((timestamp) => {
                this.draw(1);
                this.running = true;
                this.lastFrameTimeMs = timestamp;
                this.lastFpsUpdate = timestamp;
                this.framesSinceLastFpsUpdate = 0;
                this.frameHandle = requestAnimationFrame(this.animate.bind(this));
            });
        }
        return this;
    }

    stop() {
        this.running = false;
        this.started = false;
        cancelAnimationFrame(this.frameHandle);
        return this;
    }

    isRunning() {
        return this.running;
    }

    animate(timestamp) {
        this.frameHandle = requestAnimationFrame(this.animate.bind(this));
        if (timestamp < this.lastFrameTimeMs + this.minFrameDelay) {
            return;
        }
        this.frameDelta += timestamp - this.lastFrameTimeMs;
        this.lastFrameTimeMs = timestamp;
        this.begin(timestamp, this.frameDelta);
        if (timestamp > this.lastFpsUpdate + this.fpsUpdateInterval) {
            this.fps = this.fpsAlpha * this.framesSinceLastFpsUpdate * 1000 / (timestamp - this.lastFpsUpdate) + (1 - this.fpsAlpha) * this.fps;
            this.lastFpsUpdate = timestamp;
            this.framesSinceLastFpsUpdate = 0;
        }
        this.framesSinceLastFpsUpdate++;
        this.numUpdateSteps = 0;
        while (this.frameDelta >= this.simulationTimestep) {
            this.update(this.simulationTimestep);
            this.frameDelta -= this.simulationTimestep;
            if (++this.numUpdateSteps >= 240) {
                this.panic = true;
                break;
            }
        }
        this.draw(this.frameDelta / this.simulationTimestep);
        this.end(this.fps, this.panic);
        this.panic = false;
    }
}