// https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-vectors/a/intro-to-vectors

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static add(a, b) {
        a.x += b.x;
        a.y += b.y;
        return a;
    }

    static substract(a, b) {
        a.x -= b.x;
        a.y -= b.y;
        return a;
    }

    static multiply(a, b) {
        a.x *= b.x;
        a.y *= b.y;
        return a;
    }

    static divide(a, b) {
        a.x /= b.x;
        a.y /= b.y;
        return a;
    }

    static rotate(v, angle) {
        var newX = v.x * Math.cos(angle) - v.y * Math.sin(angle);
        var newY = v.y * Math.cos(angle) + v.x * Math.sin(angle);
        v.x = newX;
        v.y = newY;
        return v;
    }

    static dot(a, b) {
        return a.x * b.x + a.y * b.y;
    }

    static reflect(v, start, end) {
        var n = Vector.normal(start, end);
        return Vector.substract(v, new Vector(2 * v.dot(n), 2 * v.dot(n)).multiply(n));
    }

    static angle(v) {
        return Math.atan2(v.y, v.x);
    }

    static magnitude(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }

    static normalize(v) {
        var m = Vector.magnitude(v);
        if (m > 0) {
            Vector.divide(v, new Vector(m, m));
        }
        return v;
    }

    static copy(v) {
        return new Vector(v.x, v.y);
    }

    static fromAngleAndMagnitude(angle, magnitude) {
        return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
    }

    static normal(start, end) {
        return end.copy.substract(start).rotate(Math.PI / 2).normalize;
    }

    static get Zero() {
        return new Vector(0, 0);
    }

    static get One() {
        return new Vector(1, 1);
    }

    static get MinusOne() {
        return new Vector(-1, -1);
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

    static style(color) {
        return "hsla(" + color.h + ", " + color.s + "%, " + color.l + "%, " + color.a + ")";
    }

    static copy(color) {
        return new Color(color.h, color.s, color.l, color.a);
    }

    static hue(color, h) {
        if (h < 0)
            h = 0;
        if (h > 360)
            h = 360;
        color.h = h;
        return color;
    }

    static saturation(color, s) {
        if (s < 0)
            s = 0;
        if (s > 100)
            s = 100;
        color.s = s;
        return color;
    }

    static lightness(color, l) {
        if (l < 0)
            l = 0;
        if (l > 100)
            l = 100;
        color.l = l;
        return color;
    }

    static alpha(color, a) {
        if (a < 0)
            a = 0;
        if (a > 1)
            a = 1;
        color.a = a;
        return color;
    }

    static gradient(startColor, endColor, percentage) {
        if (percentage > 1)
            percentage = 1;
        if (percentage < 0)
            percentage = 0;
        var color = new Color();
        Color.hue(color, startColor.h + (endColor.h - startColor.h) * percentage);
        Color.saturation(color, startColor.s + (endColor.s - startColor.s) * percentage);
        Color.lightness(color, startColor.l + (endColor.l - startColor.l) * percentage);
        Color.alpha(color, startColor.a + (endColor.a - startColor.a) * percentage);
        return color;
    }

    // TODO: deprecate
    static blend(startColor, endColor, total, step) {
        var color = new Color();
        Color.hue(color, endColor.h + ((startColor.h - endColor.h) / total) * step);
        Color.saturation(color, endColor.s + ((startColor.s - endColor.s) / total) * step);
        Color.lightness(color, endColor.l + ((startColor.l - endColor.l) / total) * step);
        Color.alpha(color, endColor.a + ((startColor.a - endColor.a) / total) * step);
        return color;
    }

    static fixedStyle(h, s, l, a) {
        return "hsla(" + h + ", " + s + "%, " + l + "%, " + a + ")";
    }

    static get White() {
        return Color.fixedStyle(0, 0, 100, 1);
    }

    static get Black() {
        return Color.fixedStyle(0, 0, 0, 1);
    }

    static get Gray() {
        return Color.fixedStyle(0, 0, 50, 1);
    }
}

// https://www.redblobgames.com/articles/probability/damage-rolls.html

class Random {
    static int(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static float(min, max) {
        return (Math.random() * (max - min)) + min;
    }

    static value(array) {
        return array[Random.int(0, array.length)];
    }

    static bool() {
        return Math.random() < 0.5;
    }
}

class UUID {
    static get new() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

// https://gist.github.com/gre/1650294

class Easing {

    static lerp(value, target, factor) {
        return value + (target - value) * factor;
    }

    // no easing, no acceleration
    static linear(t) {
        return t
    }

    // accelerating from zero velocity
    static easeInQuad(t) {
        return t * t
    }

    // decelerating to zero velocity
    static easeOutQuad(t) {
        return t * (2 - t)
    }

    // acceleration until halfway, then deceleration
    static easeInOutQuad(t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    }

    // accelerating from zero velocity 
    static easeInCubic(t) {
        return t * t * t
    }

    // decelerating to zero velocity 
    static easeOutCubic(t) {
        return (--t) * t * t + 1
    }

    // acceleration until halfway, then deceleration 
    static easeInOutCubic(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    // accelerating from zero velocity 
    static easeInQuart(t) {
        return t * t * t * t
    }

    // decelerating to zero velocity 
    static easeOutQuart(t) {
        return 1 - (--t) * t * t * t
    }

    // acceleration until halfway, then deceleration
    static easeInOutQuart(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
    }

    // accelerating from zero velocity
    static easeInQuint(t) {
        return t * t * t * t * t
    }

    // decelerating to zero velocity
    static easeOutQuint(t) {
        return 1 + (--t) * t * t * t * t
    }

    // acceleration until halfway, then deceleration 
    static easeInOutQuint(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
    }
}