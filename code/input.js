// https://keycode.info/

class Input {

    static instance = null;

    constructor() {
        if (Input.instance)
            return Input.instance;
        this.keys = [];
        this.keysDuration = [];
        this.mousePosition = Vector.Zero;
        this.buttons = [];
        this.buttonsDuration = [];
        this.wheelDelta = 0;
        window.addEventListener("keydown", (e) => { this.handleKeyDown(e) }, false);
        window.addEventListener("keyup", (e) => { this.handleKeyUp(e) }, false);
        window.addEventListener("mousemove", (e) => { this.handleMouseMove(e) }, false);
        window.addEventListener("mousedown", (e) => { this.handleMouseDown(e) }, false);
        window.addEventListener("mouseup", (e) => { this.handleMouseUp(e) }, false);
        window.addEventListener("wheel", (e) => { this.handleWheel(e) }, false);
        Input.instance = this;
    }

    handleKeyDown(e) {
        this.keys[e.code] = true;
        this.keysDuration[e.code] = Date.now();
    }

    handleKeyUp(e) {
        this.keys[e.code] = false;
        this.keysDuration[e.code] = Date.now() - this.keysDuration[e.code];
    }

    handleMouseMove(e) {
        this.mousePosition.x = e.clientX;
        this.mousePosition.y = e.clientY;
    }

    handleMouseDown(e) {
        this.buttons[e.button] = true;
        this.buttonsDuration[e.button] = Date.now();
    }

    handleMouseUp(e) {
        this.buttons[e.button] = false;
        this.buttonsDuration[e.button] = Date.now() - this.buttonsDuration[e.button];
    }

    handleWheel(e) {
        this.wheelDelta += e.deltaY;
    }

    isKeyDown(keyCode) {
        return this.keys[keyCode];
    }

    isButtonDown(button) {
        return this.buttons[button];
    }

    static get Instance() {
        return Input.instance;
    }
}

class ClickHandler {
    constructor() {
        this.buttonsDuration = [];
        this.position = null;
        this.clickDuration = 200;
    }

    clickStarted(button) {
        if (Input.instance.isButtonDown(button) && this.buttonsDuration[button] == null) {
            this.buttonsDuration[button] = Date.now();
            return true;
        }
        return false;
    }

    clickEnded(button) {
        if (!Input.instance.isButtonDown(button) && this.buttonsDuration[button] != null) {
            var elapsed = Date.now() - this.buttonsDuration[button];
            this.buttonsDuration[button] = null;
            if (elapsed < this.clickDuration)
                return true;
        }
        return false;
    }
}

class KeyHandler {
    constructor() {
        this.keysDuration = [];
        this.pressDuration = 200;
    }

    keyStarted(keyCode) {
        if (Input.instance.isKeyDown(keyCode) && this.keysDuration[keyCode] == null) {
            this.keysDuration[keyCode] = Date.now();
            return true;
        }
        return false;
    }

    keyEnded(keyCode) {
        if (!Input.instance.isKeyDown(keyCode) && this.keysDuration[keyCode] != null) {
            var elapsed = Date.now() - this.keysDuration[keyCode];
            this.keysDuration[keyCode] = null;
            if (elapsed < this.pressDuration)
                return true;
        }
        return false;
    }
}