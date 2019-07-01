/*
* 2D camera with panning, zooming and following.
*/
class Camera {

    // Constructor.
    constructor(scene) {
        this.scene = scene;
        this.position = Vector.Zero;
        this.targetPosition = Vector.Zero;
        this.zoom = 1;
        this.targetZoom = 1;
        this.lastWheelDelta = 0;
        this.maxZoom = 1000;
        this.minZoom = 0.01;
        this.fogEnabled = false;
        this.fogCenter = null;
        this.fogInnerRadius = 300;
        this.fogOuterRadius = 500;
        this.keyHandler = new KeyHandler();
    }

    // Loop update function.
    update(delta) {

        // Handle Pan
        var panSpeed = 10 / this.zoom
        if (Input.Instance.isKeyDown(KeyCodes.ARROW_LEFT) || Input.Instance.isKeyDown(KeyCodes.KEY_A)) {
            this.targetPosition = Vector.Copy(this.targetPosition);
            this.targetPosition.x -= panSpeed;
        }
        if (Input.Instance.isKeyDown(KeyCodes.ARROW_RIGHT) || Input.Instance.isKeyDown(KeyCodes.KEY_D)) {
            this.targetPosition = Vector.Copy(this.targetPosition);
            this.targetPosition.x += panSpeed;
        }
        if (Input.Instance.isKeyDown(KeyCodes.ARROW_UP) || Input.Instance.isKeyDown(KeyCodes.KEY_W)) {
            this.targetPosition = Vector.Copy(this.targetPosition);
            this.targetPosition.y -= panSpeed;
        }
        if (Input.Instance.isKeyDown(KeyCodes.ARROW_DOWN) || Input.Instance.isKeyDown(KeyCodes.KEY_S)) {
            this.targetPosition = Vector.Copy(this.targetPosition);
            this.targetPosition.y += panSpeed;
        }

        // Handle Zoom
        if (Input.Instance.isKeyDown(KeyCodes.NUMPAD_ADD))
            this.targetZoom *= 1.05;
        else if (Input.Instance.isKeyDown(KeyCodes.NUMPAD_SUBTRACT))
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
        if (Input.Instance.isKeyDown(KeyCodes.NUMPAD_MULTIPLY) || Input.Instance.isButtonDown(1)) {
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

        // Toggle Fog        
        this.keyHandler.keyStarted(KeyCodes.KEY_F);
        if (this.keyHandler.keyEnded(KeyCodes.KEY_F)) {
            this.fogEnabled = !this.fogEnabled;
        }
    }

    // Loop render function.
    draw(interp, ctx) {
        // Draw Fog
        if (this.fogEnabled) {
            var m = this.fogCenter != null ? this.worldToScreen(this.fogCenter) : Input.Instance.mousePosition;
            var grd = ctx.createRadialGradient(m.x, m.y, this.fogInnerRadius * this.zoom, m.x, m.y, this.fogOuterRadius * this.zoom);
            grd.addColorStop(0, Color.Style(new Color(0, 0, 0, 0)));
            grd.addColorStop(1, Color.Style(new Color(0, 0, 0, 1)));
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, this.scene.viewportSize.x, this.scene.viewportSize.y);
        }
    }

    // Returns the world position corresponding to screen position.
    screenToWorld(point) {
        var c = new Vector(this.scene.viewportSize.x / 2, this.scene.viewportSize.y / 2);
        var x = Vector.Substract(Vector.Copy(point), c);
        var j = Vector.Divide(Vector.Copy(x), new Vector(this.zoom, this.zoom));
        return Vector.Add(Vector.Copy(this.position), j);
    }

    // Returns the screen position corresponding to world position.
    worldToScreen(point) {
        var a = Vector.Substract(Vector.Copy(point), this.position);
        var j = Vector.Multiply(Vector.Copy(a), new Vector(this.zoom, this.zoom));
        return Vector.Add(j, new Vector(this.scene.viewportSize.x / 2, this.scene.viewportSize.y / 2));
    }

    // Returns true if world point is currently inside viewport 
    isInsideViewport(point, scale) {
        var screen = this.worldToScreen(point);
        var margin = Vector.Multiply(Vector.Copy(scale), new Vector(this.zoom, this.zoom));
        return screen.x + margin.x >= 0
            && screen.y + margin.y >= 0
            && screen.x - margin.x <= this.scene.viewportSize.x
            && screen.y - margin.y <= this.scene.viewportSize.y;
    }

    // Returns camera data string representation for debug purposes.
    toString() {
        var worldPoint = this.screenToWorld(Input.Instance.mousePosition);
        return "Camera Viewport:  " + this.scene.viewportSize.x + "x" + this.scene.viewportSize.y + "\n"
            + "Camera Position:  " + Vector.Print(this.position) + "\n"
            + "Camera Zoom:      " + this.zoom.toFixed(2) + "\n"
            + "Screen Cursor:    " + Vector.Print(Input.Instance.mousePosition) + "\n"
            + "World Cursor:     " + Vector.Print(worldPoint);
    }

}