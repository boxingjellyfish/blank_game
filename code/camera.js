class Camera {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.position = Vector.Zero;
        this.targetPosition = this.position;
        this.zoom = 1;
        this.targetZoom = null;
    }

    update(delta) {
        // Handle Pan
        if (Input.Instance.isKeyDown("ArrowLeft"))
            this.targetPosition.x -= 10;
        if (Input.Instance.isKeyDown("ArrowRight"))
            this.targetPosition.x += 10;
        if (Input.Instance.isKeyDown("ArrowUp"))
            this.targetPosition.y -= 10;
        if (Input.Instance.isKeyDown("ArrowDown"))
            this.targetPosition.y += 10;

        // Handle Zoom
        if (Input.Instance.isKeyDown("NumpadAdd"))
            this.zoom *= 1.01;
        else if (Input.Instance.isKeyDown("NumpadSubtract"))
            this.zoom *= 0.99;

        // Reset Camera
        if (Input.Instance.isKeyDown("NumpadMultiply"))
            this.targetPosition = Vector.Zero;

        // Follow target, if set
        if (this.targetPosition) {
            this.position.x = Easing.lerp(this.position.x, this.targetPosition.x, 0.1);
            this.position.y = Easing.lerp(this.position.y, this.targetPosition.y, 0.1);
        }

        // Zoom to target, if set
        if (this.targetZoom) {
            this.zoom = Easing.lerp(this.zoom, this.targetZoom, 0.01);
        }
    }

    screenToWorldPoint(point) {
        // Center
        var world = point.copy.substract(new Vector(this.width / 2, this.height / 2));
        // Position
        world.add(this.position);
        // Zoom
        world.multiply(new Vector(this.zoom, this.zoom));
        return world;
    }

}