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

    substract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }

    multiply(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        return this;
    }

    divide(vector) {
        this.x /= vector.x;
        this.y /= vector.y;
        return this;
    }

    rotate(angle) {
        var newX = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        var newY = this.y * Math.cos(angle) + this.x * Math.sin(angle);
        this.x = newX;
        this.y = newY;
        return this;
    }

    dot(vector) {
        return this.x * vector.x + this.y * vector.y;
    }

    reflect(start, end) {
        var n = Vector.normal(start, end);
        return this.substract(new Vector(2 * this.dot(n), 2 * this.dot(n)).multiply(n));
    }

    get angle() {
        return Math.atan2(this.y, this.x);
    }

    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    get normalize() {
        var m = this.magnitude;
        if (m > 0) {
            this.divide(new Vector(m, m));
        }
        return this;
    }

    get copy() {
        return new Vector(this.x, this.y);
    }

    get toString() {
        return this.x + "," + this.y + " (" + this.angle + "," + this.magnitude + ")";
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

    get style() {
        return "hsla(" + this.h + ", " + this.s + "%, " + this.l + "%, " + this.a + ")";
    }

    get copy() {
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

    blend(startColor, endColor, total, step) {
        this.hue(endColor.h + ((startColor.h - endColor.h) / total) * step);
        this.saturation(endColor.s + ((startColor.s - endColor.s) / total) * step);
        this.lightness(endColor.l + ((startColor.l - endColor.l) / total) * step);
        this.alpha(endColor.a + ((startColor.a - endColor.a) / total) * step);
        return this;
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

class GameEntity {
    constructor() {
        this.id = UUID.new;
        this.position = Vector.Zero;
        this.velocity = Vector.Zero;
        this.angle = 0;
        this.angularVelocity = 0;
        this.visible = true;
        this.deleted = false;
    }
}

class Box extends GameEntity {
    constructor() {
        super();
        this.width = 0;
        this.height = 0;
        this.color = new Color(0, 0, 0, 0);
        this.trailEmitter = null;
    }

    static get random() {
        var box = new Box();
        // TODO: Basic doesnt have to know world
        box.position = new Vector(Random.float(0, world.width), Random.float(0, world.height));
        box.velocity = new Vector(Random.float(-0.5, 0.5), Random.float(-0.5, 0.5));
        box.angle = Random.int(0, Math.PI * 2);
        box.angularVelocity = Random.float(-Math.PI / 500, Math.PI / 500);
        box.width = Random.int(10, 100);
        box.height = Random.int(10, 100);
        box.color = new Color(Random.int(0, 360), 100, 50, 1);
        return box;
    }

    get area() {
        return this.width * this.height;
    }

    get points() {
        return [
            new Vector(this.width / 2, this.height / 2).rotate(this.angle).add(this.position),
            new Vector(this.width / 2 * -1, this.height / 2).rotate(this.angle).add(this.position),
            new Vector(this.width / 2 * -1, this.height / 2 * -1).rotate(this.angle).add(this.position),
            new Vector(this.width / 2, this.height / 2 * -1).rotate(this.angle).add(this.position)
        ];
    }

    get lines() {
        var points = this.points;
        return [
            { v0: points[0], v1: points[1] },
            { v0: points[1], v1: points[2] },
            { v0: points[2], v1: points[3] },
            { v0: points[3], v1: points[0] },
        ];
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
        if (this.intersectsBoundingBox(box)) {
            return this.intersectsEdges(box) != null;
        }
        return false;
    }

    intersectsEdges(box) {
        for (var i = 0; i < this.lines.length; i++) {
            for (var j = 0; j < box.lines.length; j++) {
                var point = Collisions.lineLineIntersectionPoint(this.lines[i].v0, this.lines[i].v1, box.lines[j].v0, box.lines[j].v1);
                if (point != null) {
                    return point;
                }
            }
        }
        return null;
    }

    intersectsBoundingBox(box) {
        var thisMinMax = this.minMax;
        var otherMinMax = box.minMax;
        return thisMinMax[0].x < otherMinMax[1].x && thisMinMax[1].x > otherMinMax[0].x && thisMinMax[0].y < otherMinMax[1].y && thisMinMax[1].y > otherMinMax[0].y;
    }
}

// http://www.jeffreythompson.org/collision-detection/index.php

class Collisions {
    static pointCircle(point, circleCenter, circleRadius) {
        var distance = point.copy.substract(circleCenter);
        if (distance.magnitude <= circleRadius) {
            return true;
        }
        return false;
    }

    static lineLine(lineStartA, lineEndA, lineStartB, lineEndB) {
        return Collisions.lineLineIntersectionPoint(lineStartA, lineEndA, lineStartB, lineEndB) != null;
    }

    static lineLineIntersectionPoint(lineStartA, lineEndA, lineStartB, lineEndB) {
        var s1 = lineEndA.copy.substract(lineStartA);
        var s2 = lineEndB.copy.substract(lineStartB);
        var s = (-s1.y * (lineStartA.x - lineStartB.x) + s1.x * (lineStartA.y - lineStartB.y)) / (-s2.x * s1.y + s1.x * s2.y);
        var t = (s2.x * (lineStartA.y - lineStartB.y) - s2.y * (lineStartA.x - lineStartB.x)) / (-s2.x * s1.y + s1.x * s2.y);
        if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
            return new Vector(lineStartA.x + (t * s1.x), lineStartA.y + (t * s1.y));
        }
        return null;
    }

    static linePoint(lineStart, lineEnd, point) {
        var pointToStart = point.copy.substract(lineStart).magnitude;
        var pointToEnd = point.copy.substract(lineEnd).magnitude;
        var lineLength = lineEnd.copy.substract(lineStart).magnitude;
        var buffer = 0.1;
        if (pointToStart + pointToEnd >= lineLength - buffer && pointToStart + pointToEnd <= lineLength + buffer) {
            return true;
        }
        return false;
    }

    static lineCircle(lineStart, lineEnd, circleCenter, circleRadius) {
        var isStartInside = Collisions.pointCircle(lineStart, circleCenter, circleRadius);
        var isEndInside = Collisions.pointCircle(lineEnd, circleCenter, circleRadius);
        if (isStartInside || isEndInside)
            return true;
        var lineLength = lineEnd.copy.substract(lineStart).magnitude;
        var dot = (((circleCenter.x - lineStart.x) * (lineEnd.x - lineStart.x)) + ((circleCenter.y - lineStart.y) * (lineEnd.y - lineStart.y))) / Math.pow(lineLength, 2);
        var closestPoint = lineStart.copy.add(lineEnd.copy.substract(lineStart).multiply(new Vector(dot, dot)));
        var onSegment = Collisions.linePoint(lineStart, lineEnd, closestPoint);
        if (!onSegment)
            return false;
        var distance = closestPoint.substract(circleCenter).magnitude;
        if (distance <= circleRadius) {
            return true;
        }
        return false;
    }

    static boundigBoxes(boundingBoxStartA, boundingBoxEndA, boundingBoxStartB, boundingBoxEndB) {
        return boundingBoxStartA.x < boundingBoxEndB.x &&
            boundingBoxEndA.x > boundingBoxStartB.x &&
            boundingBoxStartA.y < boundingBoxEndB.y &&
            boundingBoxEndA.y > boundingBoxStartB.y;
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