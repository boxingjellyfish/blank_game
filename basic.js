// https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-vectors/a/intro-to-vectors

class Vector {
    constructor(x, y) {
        this.x = x ;
        this.y = y;
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    sub(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }

    mult(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        return this;
    }

    div(vector) {
        this.x /= vector.x;
        this.y /= vector.y;
        return this;
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    norm() {
        var m = this.mag();
        if (m > 0) {
            this.div(m);
        }
        return this;
    }

    rotate(angle) {
        var newX = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        var newY = this.y * Math.cos(angle) + this.x * Math.sin(angle);
        this.x = newX;
        this.y = newY;
        return this;
    }

    angle() {
        return Math.atan2(this.y, this.x);
    }

    copy() {
        return new Vector(this.x, this.y);
    }

    static fromAngle(angle, magnitude) {
        return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
    }
}

// http://hslpicker.com/

class Color {
    constructor(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }

    toFillStyle() {
        return "hsla(" + this.h + ", " + this.s + "%, " + this.l + "%, " + this.a + ")";
    }

    copy() {
        return new Color(this.h, this.s, this.l, this.a);
    }

    hue(h) {
        if (h < 0)
            h = 0;
        if (h > 360)
            h = 360;
        this.h = h;
        return this;
    }

    saturation(s) {
        if (s < 0)
            s = 0;
        if (s > 100)
            s = 100;
        this.s = s;
        return this;
    }

    lightness(l) {
        if (l < 0)
            l = 0;
        if (l > 100)
            l = 100;
        this.l = l;
        return this;
    }

    alpha(a) {
        if (a < 0)
            a = 0;
        if (a > 1)
            a = 1;
        this.a = a;
        return this;
    }
}

class Random {
    static int(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static float(min, max) {
        return (Math.random() * (max - min)) + min;
    }
}

class UUID {
    static new() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

class Entity {
    constructor() {
        this.id = UUID.new();
        this.position = new Vector(Random.float(0, world.width), Random.float(0, world.height));
        this.velocity = new Vector(Random.float(-0.5, 0.5), Random.float(-0.5, 0.5));
        this.angle = Random.int(0, Math.PI * 2);
        this.visible = true;
        this.deleted = false;
    }
}

class Box extends Entity {
    constructor() {
        super();
        this.width = Random.int(20, 50);
        this.height = Random.int(20, 50);
        this.color = new Color(Random.int(0, 360), 0, 50, 0.8);
    }

    get minX() {
        return this.position.x - (this.width / 2);
    }

    get maxX() {
        return this.position.x + (this.width / 2);
    }

    get minY() {
        return this.position.y - (this.height / 2);
    }

    get maxY() {
        return this.position.y + (this.height / 2);
    }

    get area() {
        return this.width * this.height;
    }

    get points() {
        var points = [
            new Vector(this.width / 2, this.height / 2).rotate(this.angle).add(this.position),
            new Vector(this.width / 2 * -1, this.height / 2).rotate(this.angle).add(this.position),
            new Vector(this.width / 2 * -1, this.height / 2 * -1).rotate(this.angle).add(this.position),
            new Vector(this.width / 2, this.height / 2 * -1).rotate(this.angle).add(this.position)
        ];
        return points;
    }
}