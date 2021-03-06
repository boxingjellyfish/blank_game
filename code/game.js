var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

class Vector2D {
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
        var n = Vector2D.Normal(start, end);
        return this.substract(new Vector2D(2 * this.dot(n), 2 * this.dot(n)).multiply(n));
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
            this.divide(new Vector2D(m, m));
        }
        return this;
    }

    get copy() {
        return new Vector2D(this.x, this.y);
    }

    get toString() {
        return this.x + "," + this.y + " (" + this.angle + "," + this.magnitude + ")";
    }

    static FromAngleAndMagnitude(angle, magnitude) {
        return new Vector2D(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
    }

    static Normal(start, end) {
        return end.copy.substract(start).rotate(Math.PI / 2).normalize;
    }

    static get Zero() {
        return new Vector2D(0, 0);
    }

    static get One() {
        return new Vector2D(1, 1);
    }

    static get MinusOne() {
        return new Vector2D(-1, -1);
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
        return Color.FixedStyle(0, 0, 100, 1);
    }
    
    static get Black() {
        return Color.FixedStyle(0, 0, 0, 1);
    }

    static get Gray() {
        return Color.FixedStyle(0, 0, 50, 1);
    }
}

// https://www.redblobgames.com/articles/probability/damage-rolls.html

class Random {
    static Int(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static Float(min, max) {
        return (Math.random() * (max - min)) + min;
    }

    static Value(array) {
        return array[Random.Int(0, array.length)];
    }

    static Bool() {
        return Math.random() < 0.5;
    }

    static UUID() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

class GameEntity {
    constructor() {
        this.id = Random.UUID();
        this.position = Vector2D.Zero;
        this.velocity = Vector2D.Zero;
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
        box.position = new Vector2D(Random.Float(0, world.width), Random.Float(0, world.height));
        box.velocity = new Vector2D(Random.Float(-0.5, 0.5), Random.Float(-0.5, 0.5));
        box.angle = Random.Int(0, Math.PI * 2);
        box.angularVelocity = Random.Float(-Math.PI / 500, Math.PI / 500);
        box.width = Random.Int(10, 100);
        box.height = Random.Int(10, 100);
        box.color = new Color(Random.Int(0, 360), 100, 50, 1);
        return box;
    }

    get area() {
        return this.width * this.height;
    }

    get points() {
        return [
            new Vector2D(this.width / 2, this.height / 2).rotate(this.angle).add(this.position),
            new Vector2D(this.width / 2 * -1, this.height / 2).rotate(this.angle).add(this.position),
            new Vector2D(this.width / 2 * -1, this.height / 2 * -1).rotate(this.angle).add(this.position),
            new Vector2D(this.width / 2, this.height / 2 * -1).rotate(this.angle).add(this.position)
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
            new Vector2D(minX, minY),
            new Vector2D(maxX, maxY),
        ];
    }

    get boundingBox() {
        var minMax = this.minMax;
        return [
            new Vector2D(minMax[0].x, minMax[0].y),
            new Vector2D(minMax[1].x, minMax[0].y),
            new Vector2D(minMax[1].x, minMax[1].y),
            new Vector2D(minMax[0].x, minMax[1].y)
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
            return new Vector2D(lineStartA.x + (t * s1.x), lineStartA.y + (t * s1.y));
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
        var closestPoint = lineStart.copy.add(lineEnd.copy.substract(lineStart).multiply(new Vector2D(dot, dot)));
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

class ParticleSystem {
    constructor() {
        this.emitters = [];
    }

    countParticles() {
        var count = 0;
        for (var i = 0; i < this.emitters.length; i++) {
            count += this.emitters[i].particles.length;
        }
        return count;
    }

    update(step) {
        for (var i = this.emitters.length - 1; i >= 0; i--) {
            var emitter = this.emitters[i];
            emitter.update(step);
            if (emitter.lifespan != null) {
                emitter.lifespan -= step;
                if (emitter.lifespan <= 0) {
                    emitter.enabled = false;
                }
            }
            if (!emitter.enabled && emitter.particles.length == 0) {
                this.emitters.splice(i, 1);
            }
        }
    }

    draw(ctx, interp, foreground) {
        for (var i = 0; i < this.emitters.length; i++) {
            if (this.emitters[i].foreground == foreground)
                this.emitters[i].draw(ctx, interp);
        }
    }
}

class Emitter {
    constructor() {
        this.id = Random.UUID();
        this.position = Vector2D.Zero;
        this.velocity = Vector2D.Zero;
        this.spread = Math.PI * 2;
        this.velocityRandomness = 1;
        this.size = 1;
        this.width = 1;
        this.height = 1;
        this.color = new Color(0, 0, 0, 0);
        this.colorEnd = new Color(0, 0, 0, 0);
        this.lifespan = 1;
        this.emissionRate = 1;
        this.particleSize = 1;
        this.particleSizeRandomness = 1;
        this.maxParticles = 1;
        this.particleLifespan = 1;
        this.particleLifespanRandomness = 1;
        this.enabled = true;
        this.emissionTimer = 0;
        this.foreground = true;
        this.fields = [];
        this.particles = [];
    }

    update(step) {
        if (this.enabled) {
            this.addParticles(step);
        }
        this.moveParticles(step);
    }

    draw(ctx, interp) {
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].draw(ctx, interp);
        }
    }

    addParticles(step) {
        if (this.particles.length > this.maxParticles) return;
        var particlesToEmit = 0;
        this.emissionTimer += step;
        var emissionRateInv = 1 / this.emissionRate
        if (this.emissionTimer > emissionRateInv) {
            particlesToEmit = parseInt(this.emissionTimer / emissionRateInv);
            this.emissionTimer = this.emissionTimer % emissionRateInv;
        }
        for (var j = 0; j < particlesToEmit; j++) {
            var angle = this.velocity.angle + this.spread - Random.Float(0, this.spread * 2);
            var segment = Vector2D.FromAngleAndMagnitude(this.velocity.angle + Math.PI / 2, this.size);
            var randomSegment = Vector2D.FromAngleAndMagnitude(this.velocity.angle - Math.PI / 2, Random.Float(0, this.size * 2));
            segment.add(randomSegment);
            segment.add(this.position);
            var position = segment;
            var velocity = Vector2D.FromAngleAndMagnitude(angle, Random.Float(this.velocity.magnitude, this.velocity.magnitude * this.velocityRandomness));
            var life = Random.Int(this.particleLifespan, this.particleLifespan * this.particleLifespanRandomness);
            var size = Random.Int(this.particleSize, this.particleSize * this.particleSizeRandomness);
            var particle = new Particle(position, velocity, Vector2D.Zero, this.color.copy, size, life);
            this.particles.push(particle);
        }
    }

    moveParticles(step) {
        var updatedParticles = [];
        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            particle.submitToFields(this.fields);
            particle.update(step);
            particle.lifespan -= step;
            if (particle.lifespan > 0) {
                particle.color = particle.color.blend(this.color, this.colorEnd, particle.totalLifespan, particle.lifespan);
                updatedParticles.push(particle);
            }
        }
        this.particles = updatedParticles;
    }

    move(position) {
        var delta = position.copy.substract(this.position);
        this.position = position;
        for (var i = 0; i < this.fields.length; i++) {
            this.fields[i].position.add(delta);
        }
    }

    static fromJson(json) {
        var emitter = JSON.parse(json);
        return fromObject(emitter);
    }

    static fromObject(emitter) {
        emitter.__proto__ = Emitter.prototype;
        emitter.position.__proto__ = Vector2D.prototype;
        emitter.velocity.__proto__ = Vector2D.prototype;    
        emitter.color.__proto__ = Color.prototype;
        emitter.colorEnd.__proto__ = Color.prototype;
        for(var i = 0; i < emitter.particles.length; i++) {
            emitter.particles[i].__proto__ = Particle.prototype;
            emitter.particles[i].position.__proto__ = Vector2D.prototype;
            emitter.particles[i].velocity.__proto__ = Vector2D.prototype;    
            emitter.particles[i].color.__proto__ = Color.prototype;
        }
        for(var i = 0; i < emitter.fields.length; i++) {
            emitter.fields[i].__proto__ = Field.prototype;
            emitter.fields[i].position.__proto__ = Vector2D.prototype;
        }
        return emitter;
    }
}

class Particle {
    constructor(position, velocity, acceleration, color, size, lifespan) {
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.color = color;
        this.size = size;
        this.lifespan = lifespan;
        this.totalLifespan = lifespan;
    }

    submitToFields(fields) {
        var totalAcceleration = Vector2D.Zero;
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (field.enabled) {
                var vector = field.position.copy.substract(this.position);
                var force = field.mass / Math.pow(vector.x * vector.x + vector.y * vector.y, 1.5);
                totalAcceleration.add(vector.multiply(new Vector2D(force, force)));
                if (field.destructive) {
                    if (Math.pow(this.position.x - field.position.x, 2) + Math.pow(this.position.y - field.position.y, 2) < Math.pow(field.radius, 2)) {
                        this.lifespan = 0;
                    }
                }
            }
        }
        this.acceleration = totalAcceleration;
    }

    update(delta) {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }

    draw(ctx, interp) {
        ctx.fillStyle = this.color.style;
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}

class Field {
    constructor() {
        this.id = Random.UUID();
        this.position = Vector2D.Zero;
        this.mass = 1;
        this.destructive = true;
        this.radius = 1;
        this.enabled = true;
        this.visible = true;
    }

}

class GameWorld {
    constructor() {
        this.width = canvas.width;
        this.height = canvas.height;
        this.particleSystem = new ParticleSystem();
        this.input = {
            mousePosition: Vector2D.Zero,
            mouseDown: false
        };
        this.soundManager = new SoundManager();
        this.pad = new Pad();
        this.ball = new Ball();
        this.bricks = [];
    }
}

class Pad extends Box {
    constructor() {
        super();
    }

    update(delta) {

    }

    draw(ctx, interp) {
        var points = this.points;

        var gradient = ctx.createLinearGradient(points[0].x, points[0].y, points[2].x, points[2].y);
        gradient.addColorStop(0, this.color.copy.lightness(60).style);
        gradient.addColorStop(1, this.color.copy.lightness(40).style);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (var i = 1; i < points.length; i++)
            ctx.lineTo(points[i].x, points[i].y);
        ctx.closePath();
        ctx.fill();

        ctx.lineWidth = 2;
        ctx.strokeStyle = this.color.style;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (var j = 1; j < points.length; j++)
            ctx.lineTo(points[j].x, points[j].y);
        ctx.closePath();
        ctx.stroke();
    }
}

class Ball extends GameEntity {
    constructor() {
        super();
        this.radius = 10;
        this.color = new Color(0, 100, 0, 1);
        this.captured = true;
    }

    get minMax() {
        return [
            new Vector2D(this.position.x - this.radius, this.position.y - this.radius),
            new Vector2D(this.position.x + this.radius, this.position.y + this.radius),
        ];
    }

    get boundingBox() {
        return [
            new Vector2D(minMax[0].x, minMax[0].y),
            new Vector2D(minMax[1].x, minMax[0].y),
            new Vector2D(minMax[1].x, minMax[1].y),
            new Vector2D(minMax[0].x, minMax[1].y)
        ];
    }

    update(delta) {

    }

    draw(ctx, interp) {
        var gradient = ctx.createRadialGradient(this.position.x, this.position.y, this.radius, this.position.x - this.radius / 3, this.position.y - this.radius / 3, 2);
        gradient.addColorStop(0, this.color.copy.lightness(30).style);
        gradient.addColorStop(1, this.color.copy.lightness(70).style);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function update(delta) {
    for (var i = world.bricks.length - 1; i >= 0; i--) {
        var brick = world.bricks[i];

        for (var j = 0; j < brick.points.length; j++) {
            if ((brick.points[j].x > world.width && brick.velocity.x > 0) || (brick.points[j].x < 0 && brick.velocity.x < 0)) {
                brick.velocity.x *= -1;
            }
            if ((brick.points[j].y > world.height && brick.velocity.y > 0) || (brick.points[j].y < 0 && brick.velocity.y < 0)) {
                brick.velocity.y *= -1;
            }
        }

        if (Collisions.boundigBoxes(brick.minMax[0], brick.minMax[1], world.ball.minMax[0], world.ball.minMax[1])) {
            var ballCollisionSegment = null;
            for (var j = 0; j < brick.lines.length; j++) {
                if (Collisions.lineCircle(brick.lines[j].v0, brick.lines[j].v1, world.ball.position, world.ball.radius)) {
                    ballCollisionSegment = brick.lines[j];
                }
            }
            if (ballCollisionSegment != null) {
                if (!brick.visible) {
                    brick.velocity = world.ball.velocity.copy.multiply(new Vector2D(Random.Float(0.1, 0.4), Random.Float(0.1, 0.4)));
                    brick.angularVelocity = Random.Float(-Math.PI / 2000, Math.PI / 2000);
                    brick.visible = true;
                    world.bricks.splice(i, 1);
                    world.bricks.push(brick);
                }
                else {
                    brickDestruction(brick);
                    brick.visible = false;
                    brick.deleted = true;
                }
                world.ball.velocity.reflect(ballCollisionSegment.v1, ballCollisionSegment.v0);
                world.soundManager.padCollision();
            }
        }

        if (!brick.deleted) {
            brick.position.x += brick.velocity.x * delta;
            brick.position.y += brick.velocity.y * delta;
            brick.angle += brick.angularVelocity * delta;
            brick.angularVelocity *= 0.995;
        }
        else {
            world.bricks.splice(i, 1);
        }
    }

    if (world.input.mouseDown) {
        world.ball.captured = false;
    }

    if (!world.ball.captured && world.ball.position.x + world.ball.radius > world.width && world.ball.velocity.x > 0) {
        world.ball.velocity.x *= -1;
        ballWallCollision(new Vector2D(world.width, world.ball.position.y), new Vector2D(world.ball.velocity.copy.normalize.x, 0));
        world.soundManager.wallCollision();
    }
    if (!world.ball.captured && world.ball.position.x - world.ball.radius < 0 && world.ball.velocity.x < 0) {
        world.ball.velocity.x *= -1;
        ballWallCollision(new Vector2D(0, world.ball.position.y), new Vector2D(world.ball.velocity.copy.normalize.x, 0));
        world.soundManager.wallCollision();
    }
    if (!world.ball.captured && world.ball.position.y - world.ball.radius < 0 && world.ball.velocity.y < 0) {
        world.ball.velocity.y *= -1;
        ballWallCollision(new Vector2D(world.ball.position.x, 0), new Vector2D(0, world.ball.velocity.copy.normalize.y));
        world.soundManager.wallCollision();
    }

    if (!world.ball.captured && Collisions.lineCircle(world.pad.boundingBox[0], world.pad.boundingBox[1], world.ball.position, world.ball.radius) && world.ball.velocity.y > 0) {
        var magnitude = world.ball.velocity.magnitude;
        var percentage = world.ball.position.copy.substract(world.pad.position).x / world.pad.width / 2;
        world.ball.velocity = Vector2D.FromAngleAndMagnitude(Math.PI * percentage - (Math.PI / 2), magnitude);
        ballPadCollision(new Vector2D(world.ball.position.x, world.ball.position.y + world.ball.radius), new Vector2D(0, world.ball.velocity.copy.normalize.y));
        world.soundManager.padCollision();
    }

    if (!world.ball.captured && world.ball.position.y + world.ball.radius > world.height && world.ball.velocity.y > 0) {
        world.ball.captured = true;
        world.ball.velocity = new Vector2D(0.2, -0.8);
        world.soundManager.floorCollision();
    }

    world.pad.position.x = world.input.mousePosition.x;
    if (world.pad.position.x > world.width - world.pad.width / 2)
        world.pad.position.x = world.width - world.pad.width / 2;
    if (world.pad.position.x < world.pad.width / 2)
        world.pad.position.x = world.pad.width / 2;

    if (world.ball.captured) {
        world.ball.position.x = world.pad.position.x;
        world.ball.position.y = world.pad.position.y - world.pad.height / 2 - world.ball.radius - 1;
    }
    else {
        world.ball.position.x += world.ball.velocity.x * delta;
        world.ball.position.y += world.ball.velocity.y * delta;
        world.ball.angle += world.ball.angularVelocity * delta;
    }
    backgroundParticles.fields[0].position = world.ball.position;

    if (world.bricks.length == 0) {
        initStage();
    }

    world.particleSystem.update(delta);
}

function draw(interp) {
    ctx.clearRect(0, 0, world.width, world.height);
    ctx.save();

    world.particleSystem.draw(ctx, interp, false);

    for (var i = 0; i < world.bricks.length; i++) {
        var brick = world.bricks[i];
        if (brick.visible && !brick.deleted) {
            var points = brick.points;
            gradient = ctx.createLinearGradient(points[0].x, points[0].y, points[2].x, points[2].y);
            gradient.addColorStop(0, brick.color.copy.lightness(70).style);
            gradient.addColorStop(1, brick.color.copy.lightness(30).style);
            ctx.fillStyle = gradient;

            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (var j = 1; j < points.length; j++)
                ctx.lineTo(points[j].x, points[j].y);
            ctx.closePath();
            ctx.fill();

            ctx.lineWidth = 2;
            ctx.strokeStyle = brick.color.style;
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (var j = 1; j < points.length; j++)
                ctx.lineTo(points[j].x, points[j].y);
            ctx.closePath();
            ctx.stroke();
        }
    }

    world.pad.draw(ctx, interp);

    world.ball.draw(ctx, interp);

    world.particleSystem.draw(ctx, interp, true);

    if (showDebug) {
        ctx.fillStyle = new Color(0, 0, 100, 0.5).style;
        ctx.font = "12px monospace";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Bricks: " + world.bricks.length, 5, 5);
        ctx.fillText("Emitters: " + world.particleSystem.emitters.length, 5, 5 + 12 + 2);
        ctx.fillText("Particles: " + world.particleSystem.countParticles(), 5, 5 + 12 + 2 + 12 + 2);

        ctx.fillStyle = new Color(0, 0, 50, 0.5).style;
        for (var i = 0; i < loop.getFPSHistogram().length; i = i + 2) {
            ctx.fillRect(world.width - 105 + i, 65 - loop.getFPSHistogram()[i], 1, 1 + loop.getFPSHistogram()[i]);
        }

        ctx.fillStyle = new Color(0, 0, 0, 0.2).style;
        ctx.fillRect(world.width - 80, 25, 50, 20);

        ctx.fillStyle = new Color(0, 0, 100, 0.5).style;
        ctx.font = "12px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(Math.round(loop.getFPS()) + " FPS", world.width - 55, 35);
    }

    ctx.restore();
}

function ballWallCollision(position, velocity) {
    var emitter = Emitter.fromObject(Data.ballWallCollision);
    emitter.position = position;
    emitter.velocity = velocity;
    world.particleSystem.emitters.push(emitter);
}

function ballPadCollision(position, velocity) {
    var emitter = Emitter.fromObject(Data.ballWallCollision);
    emitter.position = position;
    emitter.velocity = velocity;
    world.particleSystem.emitters.push(emitter);
}

function brickDestruction(brick) {
    var emitter = Emitter.fromObject(Data.boxDestructionParticles);
    emitter.position = brick.position;
    emitter.color = brick.color.copy;
    emitter.colorEnd = brick.color.copy.alpha(0);
    world.particleSystem.emitters.push(emitter);
}

function startStopLoop() {
    if (loop.isRunning()) {
        loop.stop();
        world.soundManager.sequencer.stop();
    }
    else {
        loop.start();
        world.soundManager.sequencer.start();
    }
}

var showDebug = false;
function showHideDebug() {
    showDebug = !showDebug;
}

document.addEventListener("visibilitychange", function () {
    startStopLoop();
});

canvas.addEventListener("mousemove", function (evt) {
    var rect = canvas.getBoundingClientRect();
    world.input.mousePosition.x = evt.clientX - rect.left;
    world.input.mousePosition.y = evt.clientY - rect.top;
});
canvas.addEventListener("mousedown", function (evt) {
    world.input.mouseDown = true;
});
canvas.addEventListener("mouseup", function (evt) {
    world.input.mouseDown = false;
});

window.addEventListener("gamepadconnected", function (e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gamepad.axes.length);
});

var world = new GameWorld();

function initStage() {
    world.pad.position = new Vector2D(world.width / 2, world.height - 30);
    world.pad.width = Random.Int(100, 300);
    world.pad.height = 20;
    world.pad.color = new Color(0, 0, 30, 1);

    world.ball.position = new Vector2D(world.pad.position.x, world.pad.position.y - world.pad.height / 2 - world.ball.radius - 1);
    world.ball.velocity = new Vector2D(0.2, -0.8);
    world.ball.radius = Random.Int(10, 30);
    world.ball.color = new Color(0, 0, 30, 1);
    world.ball.captured = true;

    var brickRows = Random.Int(6, 15);
    var brickColumns = Random.Int(6, 15);
    for (var i = 1; i < brickRows; i++) {
        for (var j = 1; j < brickColumns - 1; j++) {
            var brick = new Box();
            brick.width = world.width / brickColumns - 1;
            brick.height = Random.Int(30, 50);
            brick.position = new Vector2D(world.width / brickColumns * j + 1, i * 51);
            brick.color = new Color(Random.Int(0, 360), 100, 50, 1);
            brick.visible = Random.Int(0, 5) > 0;
            world.bricks.push(brick);
        }
    }
}

initStage();

var backgroundParticles = Emitter.fromObject(Data.background);
world.particleSystem.emitters.push(backgroundParticles);

var loop = new Loop().setUpdate(update).setDraw(draw);
startStopLoop();