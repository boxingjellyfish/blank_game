// https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-vectors/a/intro-to-vectors

class Vector {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    sub(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    mult(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
    }

    div(vector) {
        this.x /= vector.x;
        this.y /= vector.y;
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    norm() {
        var m = this.mag();
        if (m > 0) {
            this.div(m);
        }
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
        this.h = h || 0;
        this.s = s || 50;
        this.l = l || 50;
        this.a = a || 1;
    }

    toFillStyle() {
        return "hsla(" + this.h + ", " + this.s + "%, " + this.l + "%, " + this.a + ")";
    }

    copy() {
        return new Color(this.h, this.s, this.l, this.a);
    }

    hue(h) {
        this.h = h;
        return this;
    }

    saturation(s) {
        this.s = s;
        return this;
    }

    lightness(l) {
        this.l = l;
        return this;
    }

    alpha(a) {
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