/*
* Handles keyboard and mouse input.
* https://keycode.info/
*/
class Input {

    // Singleton instance.
    static _input = null;

    // Private constructor.
    constructor() {
        if (Input._input)
            return Input._input;
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
        Input._input = this;
    }

    // KeyDown event handler.
    handleKeyDown(e) {
        this.keys[e.code] = true;
        this.keysDuration[e.code] = Date.now();
    }

    // KeyUp event handler.
    handleKeyUp(e) {
        this.keys[e.code] = false;
        this.keysDuration[e.code] = Date.now() - this.keysDuration[e.code];
    }

    // MouseMove event handler.
    handleMouseMove(e) {
        this.mousePosition.x = e.clientX;
        this.mousePosition.y = e.clientY;
    }

    // MouseDown event handler.
    handleMouseDown(e) {
        this.buttons[e.button] = true;
        this.buttonsDuration[e.button] = Date.now();
    }

    // MouseUp event handler.
    handleMouseUp(e) {
        this.buttons[e.button] = false;
        this.buttonsDuration[e.button] = Date.now() - this.buttonsDuration[e.button];
    }

    // Wheel event handler.
    handleWheel(e) {
        this.wheelDelta += e.deltaY;
    }

    // Returns true if KeyCode is currently down.
    isKeyDown(keyCode) {
        return this.keys[keyCode];
    }

    // Returns true if mouse Button is currently down.
    isButtonDown(button) {
        return this.buttons[button];
    }

    // Returns singleton instance.
    static get Instance() {
        return Input._input;
    }
}

/*
* Tracks button down duration to detect button press.
*/
class ClickHandler {
    constructor() {
        this.buttonsDuration = [];
        this.position = null;
        this.clickDuration = 200;
    }

    // Must be called each update to begin duration tracking.
    clickStarted(button) {
        if (Input.Instance.isButtonDown(button) && this.buttonsDuration[button] == null) {
            this.buttonsDuration[button] = Date.now();
            return true;
        }
        return false;
    }

    // Must be called each update to end duration tracking.
    clickEnded(button) {
        if (!Input.Instance.isButtonDown(button) && this.buttonsDuration[button] != null) {
            var elapsed = Date.now() - this.buttonsDuration[button];
            this.buttonsDuration[button] = null;
            if (elapsed < this.clickDuration)
                return true;
        }
        return false;
    }
}

/*
* Tracks key down duration to detect key press.
*/
class KeyHandler {
    constructor() {
        this.keysDuration = [];
        this.pressDuration = 200;
    }

    // Must be called each update to begin duration tracking.
    keyStarted(keyCode) {
        if (Input.Instance.isKeyDown(keyCode) && this.keysDuration[keyCode] == null) {
            this.keysDuration[keyCode] = Date.now();
            return true;
        }
        return false;
    }

    // Must be called each update to end duration tracking.
    keyEnded(keyCode) {
        if (!Input.Instance.isKeyDown(keyCode) && this.keysDuration[keyCode] != null) {
            var elapsed = Date.now() - this.keysDuration[keyCode];
            this.keysDuration[keyCode] = null;
            if (elapsed < this.pressDuration)
                return true;
        }
        return false;
    }
}