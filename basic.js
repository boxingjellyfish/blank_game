// https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-vectors/a/intro-to-vectors

class Vector {
    constructor(x, y) {
        this.x = x;
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
            this.div(new Vector(m, m));
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

    static intersection(v0, v1, v2, v3) {
        var s1 = v1.copy().sub(v0);
        var s2 = v3.copy().sub(v2);
        var s = (-s1.y * (v0.x - v2.x) + s1.x * (v0.y - v2.y)) / (-s2.x * s1.y + s1.x * s2.y);
        var t = (s2.x * (v0.y - v2.y) - s2.y * (v0.x - v2.x)) / (-s2.x * s1.y + s1.x * s2.y);
        if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
            return new Vector(v0.x + (t * s1.x), v0.y + (t * s1.y));
        }
        return null;
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
        this.angularVelocity = Random.float(-Math.PI / 500, Math.PI / 500);
        this.visible = true;
        this.deleted = false;
    }
}

class Box extends Entity {
    constructor() {
        super();
        this.width = Random.int(20, 50);
        this.height = Random.int(20, 50);
        this.color = new Color(Random.int(0, 360), 0, 50, 1);
        this.trailEmitter = null;
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

    get lines() {
        var points = this.points;
        var lines = [
            { v0: points[0], v1: points[1] },
            { v0: points[1], v1: points[2] },
            { v0: points[2], v1: points[3] },
            { v0: points[3], v1: points[0] },
        ];
        return lines;
    }

    get minMax() {
        var points = this.points;
        var minX = Math.min(points[0].x, points[1].x, points[2].x, points[3].x);
        var maxX = Math.max(points[0].x, points[1].x, points[2].x, points[3].x);
        var minY = Math.min(points[0].y, points[1].y, points[2].y, points[3].y);
        var maxY = Math.max(points[0].y, points[1].y, points[2].y, points[3].y);
        return [
            new Vector(minX, minY),
            new Vector(maxX, maxY),
        ];
    }

    get boundingBox() {
        var minMax = this.minMax;
        return [
            new Vector(minMax[0].x, minMax[0].y),
            new Vector(minMax[1].x, minMax[0].y),
            new Vector(minMax[1].x, minMax[1].y),
            new Vector(minMax[0].x, minMax[1].y)
        ];
    }

    intersects(box) {
        if (this.intersectsFast(box)) {
            return this.intersectsSlow(box) != null;
        }
        return false;
    }

    intersectsSlow(box) {
        for (var i = 0; i < this.lines.length; i++) {
            for (var j = 0; j < box.lines.length; j++) {
                var point = Vector.intersection(this.lines[i].v0, this.lines[i].v1, box.lines[j].v0, box.lines[j].v1);
                if (point != null) {
                    return point;
                }
            }
        }
        return null;
    }

    intersectsFast(box) {
        var thisMinMax = this.minMax;
        var otherMinMax = box.minMax;
        return thisMinMax[0].x < otherMinMax[1].x && thisMinMax[1].x > otherMinMax[0].x && thisMinMax[0].y < otherMinMax[1].y && thisMinMax[1].y > otherMinMax[0].y;
    }
}