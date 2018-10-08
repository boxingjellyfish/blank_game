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

}