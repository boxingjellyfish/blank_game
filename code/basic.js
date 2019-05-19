/*
* 2D vector implementation.
* https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-vectors/a/intro-to-vectors
*/
class Vector {

    // X and Y axis coordinates.
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Adds vectors A and B, modifiyng and returning A.
    static Add(a, b) {
        a.x += b.x;
        a.y += b.y;
        return a;
    }

    // Substracts vector B from A, modifiyng and returning A.
    static Substract(a, b) {
        a.x -= b.x;
        a.y -= b.y;
        return a;
    }

    // Multiplies vectors A and B, modifiyng and returning A.
    static Multiply(a, b) {
        a.x *= b.x;
        a.y *= b.y;
        return a;
    }

    // Divides vector B by A, modifiyng and returning A.
    static Divide(a, b) {
        a.x /= b.x;
        a.y /= b.y;
        return a;
    }

    // Rotates vector V by Angle radians, modifiyng and returning A.
    static Rotate(v, angle) {
        var newX = v.x * Math.cos(angle) - v.y * Math.sin(angle);
        var newY = v.y * Math.cos(angle) + v.x * Math.sin(angle);
        v.x = newX;
        v.y = newY;
        return v;
    }

    // Returns the dot product of A and B
    static Dot(a, b) {
        return a.x * b.x + a.y * b.y;
    }

    // Reflects vector V based on line segment Start-End.
    static Reflect(v, start, end) {
        var n = Vector.Normal(start, end);
        return Vector.Substract(v, new Vector(2 * v.dot(n), 2 * v.dot(n)).multiply(n));
    }

    // Returns the angle in radians of vector V.
    static Angle(v) {
        return Math.atan2(v.y, v.x);
    }

    // Returns the magnitude of vector V.
    static Magnitude(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }

    // Normalizes and returns vector V.
    static Normalize(v) {
        var m = Vector.Magnitude(v);
        if (m > 0) {
            Vector.Divide(v, new Vector(m, m));
        }
        return v;
    }

    // Returns a copy of vector V.
    static Copy(v) {
        return new Vector(v.x, v.y);
    }

    // Returns a new vector with Angle and Magnitude.
    static FromAngleAndMagnitude(angle, magnitude) {
        return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
    }

    // Returns the normal of line segment Start-End.
    static Normal(start, end) {
        return end.copy.substract(start).rotate(Math.PI / 2).normalize;
    }

    // Returns a new (0,0) vector.
    static get Zero() {
        return new Vector(0, 0);
    }

    // Returns a new (1,1) vector.
    static get One() {
        return new Vector(1, 1);
    }

    // Returns a new (-1,-1) vector.
    static get MinusOne() {
        return new Vector(-1, -1);
    }

    // Returns string representation of vector V.
    static Print(v, decimals = 2) {
        return v.x.toFixed(decimals) + ";" + v.y.toFixed(decimals);
    }
}

/*
* Color represented in HSLA space.
* http://hslpicker.com/
*/
class Color {

    // Hue, Saturation, Luminosity and Alpha values.
    constructor(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }

    // Returns HSLA string of Color.
    static Style(color) {
        return "hsla(" + color.h + ", " + color.s + "%, " + color.l + "%, " + color.a + ")";
    }

    // Returns a copy of Color.
    static Copy(color) {
        return new Color(color.h, color.s, color.l, color.a);
    }

    // Sets a valid Hue, modifiyng and returning Color.
    static Hue(color, h) {
        if (h < 0)
            h = 0;
        if (h > 360)
            h = 360;
        color.h = h;
        return color;
    }

    // Sets a valid Saturation, modifiyng and returning Color.
    static Saturation(color, s) {
        if (s < 0)
            s = 0;
        if (s > 100)
            s = 100;
        color.s = s;
        return color;
    }

    // Sets a valid Luminosity, modifiyng and returning Color.
    static Luminosity(color, l) {
        if (l < 0)
            l = 0;
        if (l > 100)
            l = 100;
        color.l = l;
        return color;
    }

    // Sets a valid Alpha, modifiyng and returning Color.
    static Alpha(color, a) {
        if (a < 0)
            a = 0;
        if (a > 1)
            a = 1;
        color.a = a;
        return color;
    }

    // Returns a new color between StartColor and EndColor, according to Percentage.
    static Gradient(startColor, endColor, percentage) {
        if (percentage > 1)
            percentage = 1;
        if (percentage < 0)
            percentage = 0;
        var color = new Color();
        Color.Hue(color, startColor.h + (endColor.h - startColor.h) * percentage);
        Color.Saturation(color, startColor.s + (endColor.s - startColor.s) * percentage);
        Color.Luminosity(color, startColor.l + (endColor.l - startColor.l) * percentage);
        Color.Alpha(color, startColor.a + (endColor.a - startColor.a) * percentage);
        return color;
    }

    // Named color: White
    static get White() {
        return new Color(0, 0, 100, 1);
    }

    // Named color: Black
    static get Black() {
        return new Color(0, 0, 0, 1);
    }

    // Named color: Gray
    static get Gray() {
        return new Color(0, 0, 50, 1);
    }

    // Named color: White50
    static get White50() {
        return new Color(0, 0, 100, 0.5);
    }
}

/*
* Random number utilities.
* https://www.redblobgames.com/articles/probability/damage-rolls.html
*/
class Random {

    // Returns random integer between Min and Max.
    static Int(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Returns random float between Min and Max.
    static Float(min, max) {
        return (Math.random() * (max - min)) + min;
    }

    // Returns random value from Array.
    static Value(array) {
        return array[Random.Int(0, array.length)];
    }

    // Returns random boolean.
    static Bool() {
        return Math.random() < 0.5;
    }

    // Returns a random UUID
    static UUID() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

/*
* Easing functions.
* https://gist.github.com/gre/1650294
*/
class Easing {

    // Returns a number approaching Target from Value, according to Factor.
    static Lerp(value, target, factor) {
        return value + (target - value) * factor;
    }

    // No easing, no acceleration.
    static Linear(t) {
        return t
    }

    // Accelerating from zero velocity.
    static EaseInQuad(t) {
        return t * t
    }

    // Decelerating to zero velocity.
    static EaseOutQuad(t) {
        return t * (2 - t)
    }

    // Acceleration until halfway, then deceleration.
    static EaseInOutQuad(t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    }

    // Accelerating from zero velocity.
    static EaseInCubic(t) {
        return t * t * t
    }

    // Decelerating to zero velocity.
    static EaseOutCubic(t) {
        return (--t) * t * t + 1
    }

    // Acceleration until halfway, then deceleration.
    static EaseInOutCubic(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    // Accelerating from zero velocity.
    static EaseInQuart(t) {
        return t * t * t * t
    }

    // Decelerating to zero velocity.
    static EaseOutQuart(t) {
        return 1 - (--t) * t * t * t
    }

    // Acceleration until halfway, then deceleration.
    static EaseInOutQuart(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
    }

    // Accelerating from zero velocity.
    static EaseInQuint(t) {
        return t * t * t * t * t
    }

    // Decelerating to zero velocity.
    static EaseOutQuint(t) {
        return 1 + (--t) * t * t * t * t
    }

    // Acceleration until halfway, then deceleration.
    static EaseInOutQuint(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
    }
}