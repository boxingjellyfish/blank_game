class Camera {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.position = Vector.Zero;
        this.targetPosition = Vector.Zero;
        this.zoom = 1;
        this.targetZoom = 1;
        this.lastWheelDelta = 0;
    }

    update(delta) {
        // Handle Pan
        var panSpeed = 10 / this.zoom
        if (Input.Instance.isKeyDown("ArrowLeft") || Input.Instance.isKeyDown("KeyA")) {
            this.targetPosition = this.targetPosition.copy;
            this.targetPosition.x -= panSpeed;
        }
        if (Input.Instance.isKeyDown("ArrowRight") || Input.Instance.isKeyDown("KeyD")) {
            this.targetPosition = this.targetPosition.copy;
            this.targetPosition.x += panSpeed;
        }
        if (Input.Instance.isKeyDown("ArrowUp") || Input.Instance.isKeyDown("KeyW")) {
            this.targetPosition = this.targetPosition.copy;
            this.targetPosition.y -= panSpeed;
        }
        if (Input.Instance.isKeyDown("ArrowDown") || Input.Instance.isKeyDown("KeyS")) {
            this.targetPosition = this.targetPosition.copy;
            this.targetPosition.y += panSpeed;
        }

        // Handle Zoom
        if (Input.Instance.isKeyDown("NumpadAdd"))
            this.targetZoom *= 1.05;
        else if (Input.Instance.isKeyDown("NumpadSubtract"))
            this.targetZoom /= 1.05;
        if (this.lastWheelDelta > Input.instance.wheelDelta)
            this.targetZoom *= 1.1;
        else if (this.lastWheelDelta < Input.instance.wheelDelta)
            this.targetZoom /= 1.1;

        this.lastWheelDelta = Input.instance.wheelDelta;

        // Reset Camera
        if (Input.Instance.isKeyDown("NumpadMultiply") || Input.Instance.isButtonDown(1)) {
            this.targetPosition = Vector.Zero;
            this.targetZoom = 1;
        }

        // Follow target, if set
        if (this.targetPosition) {
            this.position.x = Easing.lerp(this.position.x, this.targetPosition.x, 0.1);
            this.position.y = Easing.lerp(this.position.y, this.targetPosition.y, 0.1);
        }

        // Zoom to target, if set
        if (this.targetZoom) {
            this.zoom = Easing.lerp(this.zoom, this.targetZoom, 0.1);
        }
    }

    screenToWorldPoint(point) {
        var c = new Vector(this.width / 2, this.height / 2);
        var x = point.copy.substract(c);
        var j = x.copy.divide(new Vector(this.zoom, this.zoom));
        return this.position.copy.add(j);
    }

    toString() {
        var worldPoint = this.screenToWorldPoint(Input.instance.mousePosition);
        return "Camera Viewport:  " + this.width + "x" + this.height + "\n"
            + "Camera Position:  " + this.position.x.toFixed(2) + ";" + this.position.y.toFixed(2) + "\n"
            + "Camera Zoom:      " + this.zoom.toFixed(2) + "\n"
            + "Screen Cursor:    " + Input.instance.mousePosition.x + ";" + Input.instance.mousePosition.y + "\n"
            + "World Cursor:     " + worldPoint.x.toFixed(2) + ";" + worldPoint.y.toFixed(2);
    }

}