// https://keycode.info/

class Input {

    static instance = null;

    constructor() {
        if (Input.instance)
            return Input.instance;
        this.keys = [];
        this.mousePosition = Vector.Zero;
        this.buttons = [];
        window.addEventListener("keydown", (e) => { this.handleKeyDown(e) }, false);
        window.addEventListener("keyup", (e) => { this.handleKeyUp(e) }, false);
        window.addEventListener("mousemove", (e) => { this.handleMouseMove(e) }, false);
        window.addEventListener("mousedown", (e) => { this.handleMouseDown(e) }, false);
        window.addEventListener("mouseup", (e) => { this.handleMouseUp(e) }, false);
        Input.instance = this;
    }

    handleKeyDown(e) {
        this.keys[e.code] = true;
    }

    handleKeyUp(e) {
        this.keys[e.code] = false;
    }

    handleMouseMove(e) {
        this.mousePosition.x = e.clientX;
        this.mousePosition.y = e.clientY;
    }

    handleMouseDown(e) {
        this.buttons[e.button] = true;
    }

    handleMouseUp(e) {
        this.buttons[e.button] = false;
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