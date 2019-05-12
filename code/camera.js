class Camera {
    constructor() {
        this.position = Vector.Zero;
        this.targetPosition = null;
        this.zoom = 1;
        this.targetZoom = null;
    }

    update(delta) {
        if (Input.Instance.isKeyDown("NumpadAdd"))
            this.zoom *= 1.01;
        else if (Input.Instance.isKeyDown("NumpadSubtract"))
            this.zoom *= 0.99;

        if(Input.Instance.isKeyDown("NumpadMultiply"))
            this.targetPosition = Vector.Zero;

        if (this.targetPosition) {
            this.position.x = Easing.lerp(this.position.x, this.targetPosition.x, 0.1);
            this.position.y = Easing.lerp(this.position.y, this.targetPosition.y, 0.1);
        }
        if (this.targetZoom) {
            this.zoom = Easing.lerp(this.zoom, this.targetZoom, 0.01);
        }
    }


}