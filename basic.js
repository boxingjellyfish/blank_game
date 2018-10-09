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