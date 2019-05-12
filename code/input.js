class Input {

    static instance = null;

    constructor() {
        if (Input.instance)
            return Input.instance;
        this.keys = [];
        window.addEventListener("keypress", (e) => { this.handleKeyPress(e) }, false);
        window.addEventListener("keyup", (e) => { this.handleKeyUp(e) }, false);
        Input.instance = this;
    }

    handleKeyPress(e) {
        this.keys[e.code] = true;
    }

    handleKeyUp(e) {
        this.keys[e.code] = false;
    }

    isKeyDown(keyCode) {
        return this.keys[keyCode];
    }

    static get Instance() {
        return Input.instance;
    }
}