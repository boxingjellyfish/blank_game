/*
* 2D camera with panning, zooming and following.
*/
class Camera {

    // Camera with viewport Width, Height.
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.position = Vector.Zero;
        this.targetPosition = Vector.Zero;
        this.zoom = 1;
        this.targetZoom = 1;
        this.lastWheelDelta = 0;
        this.maxZoom = 1000;
        this.minZoom = 0.01;
    }

    // Loop update function.
    update(delta) {

        // Handle Pan
        var panSpeed = 10 / this.zoom
        if (Input.Instance.isKeyDown("ArrowLeft") || Input.Instance.isKeyDown("KeyA")) {
            this.targetPosition = Vector.Copy(this.targetPosition);
            this.targetPosition.x -= panSpeed;
        }
        if (Input.Instance.isKeyDown("ArrowRight") || Input.Instance.isKeyDown("KeyD")) {
            this.targetPosition = Vector.Copy(this.targetPosition);
            this.targetPosition.x += panSpeed;
        }
        if (Input.Instance.isKeyDown("ArrowUp") || Input.Instance.isKeyDown("KeyW")) {
            this.targetPosition = Vector.Copy(this.targetPosition);
            this.targetPosition.y -= panSpeed;
        }
        if (Input.Instance.isKeyDown("ArrowDown") || Input.Instance.isKeyDown("KeyS")) {
            this.targetPosition = Vector.Copy(this.targetPosition);
            this.targetPosition.y += panSpeed;
        }

        // Handle Zoom
        if (Input.Instance.isKeyDown("NumpadAdd"))
            this.targetZoom *= 1.05;
        else if (Input.Instance.isKeyDown("NumpadSubtract"))
            this.targetZoom /= 1.05;
        if (this.lastWheelDelta > Input.Instance.wheelDelta)
            this.targetZoom *= 1.1;
        else if (this.lastWheelDelta < Input.Instance.wheelDelta)
            this.targetZoom /= 1.1;

        if (this.targetZoom > this.maxZoom)
            this.targetZoom = this.maxZoom;
        if (this.targetZoom < this.minZoom)
            this.targetZoom = this.minZoom;

        this.lastWheelDelta = Input.Instance.wheelDelta;

        // Reset Camera
        if (Input.Instance.isKeyDown("NumpadMultiply") || Input.Instance.isButtonDown(1)) {
            this.targetPosition = Vector.Zero;
            this.targetZoom = 1;
        }

        // Follow target, if set
        if (this.targetPosition) {
            this.position.x = Easing.Lerp(this.position.x, this.targetPosition.x, 0.1);
            this.position.y = Easing.Lerp(this.position.y, this.targetPosition.y, 0.1);
        }

        // Zoom to target, if set
        if (this.targetZoom) {
            this.zoom = Easing.Lerp(this.zoom, this.targetZoom, 0.1);
        }
    }

    // Returns the world position corresponding to screen position.
    screenToWorldPoint(point) {
        var c = new Vector(this.width / 2, this.height / 2);
        var x = Vector.Substract(Vector.Copy(point), c);
        var j = Vector.Divide(Vector.Copy(x), new Vector(this.zoom, this.zoom));
        return Vector.Add(Vector.Copy(this.position), j);
    }

    // Returns camera data string representation for debug purposes.
    toString() {
        var worldPoint = this.screenToWorldPoint(Input.Instance.mousePosition);
        return "Camera Viewport:  " + this.width + "x" + this.height + "\n"
            + "Camera Position:  " + Vector.Print(this.position) + "\n"
            + "Camera Zoom:      " + this.zoom.toFixed(2) + "\n"
            + "Screen Cursor:    " + Vector.Print(Input.Instance.mousePosition) + "\n"
            + "World Cursor:     " + Vector.Print(worldPoint);
    }

}