// https://medium.com/@savas/nomad-game-engine-part-2-ecs-9132829188e5
// http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript
// https://github.com/sosolimited/Entity-Component-Samples

class Entity {
    constructor() {
        this.id = UUID.new;
        this.components = {};
    }

    static getComponent(entity, name) {
        return entity.components[name];
    }

    static hasComponents(entity, names) {
        var hasAll = true;
        for (var i = 0; i < names.length; i++) {
            hasAll &= entity.components[names[i]] != null;
        }
        return hasAll;
    }

    static addComponent(entity, component) {
        entity.components[component.name] = component;
    }

    static removeComponent(entity, name) {
        entity.components[name] = null;
    }
}

class TransformComponent {
    constructor(position, angle) {
        this.name = "Transform";
        this.position = position;
        this.angle = angle;
    }
}

class MotionComponent {
    constructor(velocity, maxVelocity, acceleration, angularVelocity, angularAcceleration) {
        this.name = "Motion";
        this.velocity = velocity;
        this.maxVelocity = maxVelocity;
        this.acceleration = acceleration;
        this.angularVelocity = angularVelocity;
        this.angularAcceleration = angularAcceleration;
        this.wraparound = true;
    }
}

class CollisionDetectionComponent {
    constructor(boundingBox) {
        this.name = "CollisionDetection";
        this.boundingBox = boundingBox;
    }
}

class CollisionHandlingComponent {
    constructor(collided) {
        this.name = "CollisionHandling";
        this.collided = collided;
    }
}

// TODO: Maybe change name?
class ShapeComponent {
    constructor(width, height, color) {
        this.name = "Shape";
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

class TraceComponent {
    constructor(width, color) {
        this.name = "Trace";
        this.width = width;
        this.color = color;
        this.points = [];
        this.maxPoints = 25;
    }
}

class SelectableComponent {
    constructor() {
        this.name = "Selectable";
        this.threshold = 20;
        this.highlight = false;
    }
}

class ExpirationComponent {
    constructor(created, duration) {
        this.name = "Expiration";
        this.created = created;
        this.duration = duration;
    }
}

class ColorGradientComponent {
    constructor(colorStart, colorEnd, created, duration) {
        this.name = "ColorGradient";
        this.colorStart = colorStart;
        this.colorEnd = colorEnd;
        this.created = created;
        this.duration = duration;
    }
}

class ParticleEmitterComponent {
    constructor() {
        this.name = "ParticleEmitter";
        this.spread = Math.PI * 2;
        this.particleVelocity = Vector.Zero;
        this.velocityRandomness = 1;
        this.size = 1;
        this.width = 1;
        this.height = 1;
        this.color = new Color(0, 0, 0, 0);
        this.colorEnd = new Color(0, 0, 0, 0);
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
}

class ForceFieldSubjectComponent {
    constructor() {
        this.name = "ForceFieldSubject";
        this.fieldIds = [];
    }
}

class ForceFieldComponent {
    constructor() {
        this.name = "ForceField";
        this.mass = 1;
        this.radius = 1;
        this.destructive = true;
        this.enabled = true;
    }
}

class ColorMutationSystem {
    update(delta, entities) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (Entity.hasComponents(entity, ["ColorGradient", "Shape"])) {
                var gradient = Entity.getComponent(entity, "ColorGradient");
                var shape = Entity.getComponent(entity, "Shape");
                shape.color = Color.gradient(gradient.colorStart, gradient.colorEnd, (Date.now() - gradient.created) / gradient.duration);
            }
        }
    }
}

class ForceFieldSystem {
    update(delta, entities) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (Entity.hasComponents(entity, ["ForceFieldSubject", "Transform", "Motion"])) {
                var subject = Entity.getComponent(entity, "ForceFieldSubject");
                var subjectTransform = Entity.getComponent(entity, "Transform");
                var subjectMotion = Entity.getComponent(entity, "Motion");
                // TODO: why is this zero? Why not entity accel?
                var totalAcceleration = Vector.Zero;
                for (var j = 0; j < entities.length; j++) {
                    if (Entity.hasComponents(entities[j], ["ForceField", "Transform"])) {
                        var field = Entity.getComponent(entities[j], "ForceField");
                        if (subject.fieldIds.includes(field.id) && field.enabled) {
                            var fieldTransform = Entity.getComponent(entities[j], "Transform");
                            var vector = Vector.substract(Vector.copy(fieldTransform.position), subjectTransform.position);
                            // TODO: Magic number?
                            var force = field.mass / Math.pow(vector.x * vector.x + vector.y * vector.y, 1.5);
                            Vector.add(totalAcceleration, Vector.multiply(vector, new Vector(force, force)));
                            if (field.destructive) {
                                if (Math.pow(this.position.x - field.position.x, 2) + Math.pow(this.position.y - field.position.y, 2) < Math.pow(field.radius, 2)) {
                                    if (Entity.hasComponents(entity, ["Expiration"]))
                                        Entity.getComponent(entity, "Expiration").duration = 0;
                                    else
                                        Entity.addComponent(entity, new ExpirationComponent(Date.now(), 0));
                                }
                            }
                        }
                    }
                }
                subjectMotion.acceleration = totalAcceleration;
            }
        }
    }
}

class ParticleSystemECS {
    update(delta, entities) {
        var particles = [];
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (Entity.hasComponents(entity, ["ParticleEmitter", "Transform"])) {
                var emitter = Entity.getComponent(entity, "ParticleEmitter");
                var emitterTransform = Entity.getComponent(entity, "Transform");
                if (emitter.enabled) {
                    var particlesToEmit = 0;
                    emitter.emissionTimer += delta;
                    var emissionRateInv = 1 / emitter.emissionRate
                    if (emitter.emissionTimer > emissionRateInv) {
                        particlesToEmit = Math.round(emitter.emissionTimer / emissionRateInv);
                        emitter.emissionTimer = emitter.emissionTimer % emissionRateInv;
                    }
                    for (var j = 0; j < particlesToEmit; j++) {
                        var angle = Vector.angle(emitter.particleVelocity) + emitter.spread - Random.float(0, emitter.spread * 2);
                        var segment = Vector.fromAngleAndMagnitude(Vector.angle(emitter.particleVelocity) + Math.PI / 2, emitter.size);
                        var randomSegment = Vector.fromAngleAndMagnitude(Vector.angle(emitter.particleVelocity) - Math.PI / 2, Random.float(0, emitter.size * 2));
                        Vector.add(segment, randomSegment);
                        Vector.add(segment, emitterTransform.position);
                        var position = segment;
                        var velocity = Vector.fromAngleAndMagnitude(angle, Random.float(Vector.magnitude(emitter.particleVelocity), Vector.magnitude(emitter.particleVelocity) * emitter.velocityRandomness));
                        var life = Random.int(emitter.particleLifespan, emitter.particleLifespan * emitter.particleLifespanRandomness);
                        var size = Random.int(emitter.particleSize, emitter.particleSize * emitter.particleSizeRandomness);

                        //var particle = new Particle(position, velocity, Vector.Zero, Color.copy(emitter.color), size, life);

                        var particle = new Entity();
                        Entity.addComponent(particle, new TransformComponent(position));
                        Entity.addComponent(particle, new MotionComponent(velocity, Number.MAX_SAFE_INTEGER, Vector.Zero));
                        Entity.addComponent(particle, new ShapeComponent(size, size, Color.copy(emitter.color)));
                        //Entity.addComponent(entity, new TraceComponent(2, color));
                        Entity.addComponent(particle, new ExpirationComponent(Date.now(), life));
                        Entity.addComponent(particle, new ColorGradientComponent(Color.copy(emitter.color), Color.copy(emitter.colorEnd), Date.now(), life));

                        particles.push(particle);
                    }
                }
            }
        }
        for (var i = 0; i < particles.length; i++) {
            entities.push(particles[i]);
        }
    }

}

// TODO: Pausing loop doesnt prevent expiration
class ExpirationSystem {
    update(delta, entities) {
        for (var i = entities.length - 1; i >= 0; i--) {
            var entity = entities[i];
            if (Entity.hasComponents(entity, ["Expiration"])) {
                var expiration = Entity.getComponent(entity, "Expiration");
                var elapsed = Date.now() - expiration.created;
                if (elapsed >= expiration.duration)
                    entities.splice(i, 1);
            }
        }
    }
}

class MovementSystem {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.halfWidth = width / 2;
        this.halfHeight = height / 2;
    }

    update(delta, entities) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (Entity.hasComponents(entity, ["Transform", "Motion"])) {
                var transform = Entity.getComponent(entity, "Transform");
                var motion = Entity.getComponent(entity, "Motion");
                transform.position.x += motion.velocity.x * delta;
                transform.position.y += motion.velocity.y * delta;
                transform.angle += motion.angularVelocity * delta;

                var velocity = Vector.copy(motion.velocity);
                velocity.x += motion.acceleration.x * delta;
                velocity.y += motion.acceleration.y * delta;

                if (Vector.magnitude(velocity) <= motion.maxVelocity) {
                    motion.velocity = velocity;
                }
                else {
                    // Damping
                    Vector.multiply(motion.velocity, new Vector(0.95, 0.95));
                }

                motion.angularVelocity += motion.angularAcceleration * delta;

                if (motion.wraparound) {
                    if (transform.position.x > this.halfWidth)
                        transform.position.x = -1 * this.halfWidth;
                    else if (transform.position.x < -1 * this.halfWidth)
                        transform.position.x = this.halfWidth;
                    if (transform.position.y > this.halfHeight)
                        transform.position.y = -1 * this.halfHeight;
                    else if (transform.position.y < -1 * this.halfHeight)
                        transform.position.y = this.halfHeight;
                }
            }
        }
    }
}

class CollisionDetectionSystem {
    update(delta, entities) {
        for (var i = 0; i < entities.length; i++) {
            var collider = entities[i];
            if (Entity.hasComponents(collider, ["Transform", "Motion", "CollisionDetection"])) {
                var collisionHandling = null;
                for (var j = 0; j < entities.length && !collisionHandling; j++) {
                    var collided = entities[j];
                    if (collider.id != collided.id && Entity.hasComponents(collided, ["Transform", "CollisionDetection"])) {
                        if (this.areBoundingBoxesIntersecting(collider, collided)) {
                            collisionHandling = new CollisionHandlingComponent();
                            collisionHandling.collided = collided;
                            collider.addComponent(collisionHandling);
                        }
                    }
                }
            }
        }
    }

    areBoundingBoxesIntersecting(collider, collided) {
        var colliderPosition = Entity.getComponent(collider, "Transform").position;
        var collidedPosition = Entity.getComponent(collided, "Transform").position;
        var colliderBoundingBox = Entity.getComponent(collider, "CollisionDetection").boundingBox;
        var collidedBoundingBox = Entity.getComponent(collided, "CollisionDetection").boundingBox;
        var colliderBoundingBoxStart = Vector.substract(Vector.copy(colliderPosition), colliderBoundingBox);
        var colliderBoundingBoxEnd = Vector.add(Vector.copy(colliderPosition), colliderBoundingBox);
        var collidedBoundingBoxStart = Vector.substract(Vector.copy(collidedPosition), collidedBoundingBox);
        var collidedBoundingBoxEnd = Vector.add(Vector.copy(collidedPosition), collidedBoundingBox);
        return colliderBoundingBoxStart.x < collidedBoundingBoxEnd.x &&
            colliderBoundingBoxEnd.x > collidedBoundingBoxStart.x &&
            colliderBoundingBoxStart.y < collidedBoundingBoxEnd.y &&
            colliderBoundingBoxEnd.y > collidedBoundingBoxStart.y;
    }
}

class CollisionHandlingSystem {
    update(delta, entities) {
        for (var i = 0; i < entities.length; i++) {
            var collider = entities[i];
            if (Entity.hasComponents(collider, ["Motion", "CollisionHandling"])) {
                Entity.removeComponent(collider, "CollisionHandling");
                var motion = Entity.getComponent(collider, "Motion");
                Vector.multiply(motion.velocity, new Vector(-1, -1));
                Vector.multiply(motion.acceleration, new Vector(-1, -1));
            }
        }
    }
}

class ShapeRendererSystem {
    draw(interp, ctx, entities) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (Entity.hasComponents(entity, ["Transform", "Shape"])) {
                var transform = Entity.getComponent(entity, "Transform");
                var shape = Entity.getComponent(entity, "Shape");
                ctx.fillStyle = Color.style(shape.color);
                ctx.fillRect(Math.round(transform.position.x) - shape.width / 2, Math.round(transform.position.y) - shape.height / 2, shape.width, shape.height);
            }
        }
    }
}

class TraceRendererSystem {
    update(delta, entities) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (Entity.hasComponents(entity, ["Transform", "Trace"])) {
                var transform = Entity.getComponent(entity, "Transform");
                var trace = Entity.getComponent(entity, "Trace");
                trace.points.push(Vector.copy(transform.position));
                if (trace.points.length > trace.maxPoints)
                    trace.points.shift();
            }
        }
    }

    draw(interp, ctx, entities) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (Entity.hasComponents(entity, ["Trace", "Motion"])) {
                var trace = Entity.getComponent(entity, "Trace");
                var motion = Entity.getComponent(entity, "Motion");
                if (trace.points.length > 0) {
                    var pos = trace.points[0];
                    ctx.beginPath();
                    ctx.strokeStyle = Color.style(trace.color);
                    ctx.lineWidth = trace.width;
                    ctx.moveTo(Math.round(pos.x), Math.round(pos.y));
                    for (var j = 1; j < trace.points.length; j++) {
                        if (Math.abs(pos.x - trace.points[j].x) < 100 && Math.abs(pos.y - trace.points[j].y) < 100)
                            ctx.lineTo(Math.round(trace.points[j].x), Math.round(trace.points[j].y));
                        else
                            ctx.moveTo(Math.round(trace.points[j].x), Math.round(trace.points[j].y));
                        pos = trace.points[j];
                    }
                    ctx.stroke();

                    var acc = Vector.multiply(Vector.normalize(Vector.copy(motion.acceleration)), new Vector(20, 20));
                    ctx.beginPath();
                    ctx.strokeStyle = Color.fixedStyle(0, 0, 100, 1);
                    ctx.lineWidth = trace.width;
                    ctx.moveTo(Math.round(pos.x), Math.round(pos.y));
                    ctx.lineTo(Math.round(pos.x + acc.x), Math.round(pos.y + acc.y));
                    ctx.stroke();
                }
            }
        }
    }
}

class SelectionSystem {
    constructor() {
        this.position = null;
        this.clickHandler = new ClickHandler();
    }

    update(delta, entities, camera) {
        if (this.clickHandler.clickStarted(0)) {
            this.position = camera.screenToWorldPoint(Input.Instance.mousePosition);
        }
        if (this.clickHandler.clickEnded(0)) {
            var target = Vector.copy(this.position);
            var found = false;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                if (Entity.hasComponents(entity, ["Transform", "Selectable"])) {
                    var transform = Entity.getComponent(entity, "Transform");
                    var selectable = Entity.getComponent(entity, "Selectable");
                    selectable.highlight = false;
                    if (!found && Math.abs(transform.position.x - this.position.x) <= selectable.threshold
                        && Math.abs(transform.position.y - this.position.y) <= selectable.threshold) {
                        selectable.highlight = true;
                        target = transform.position;
                        found = true;
                    }
                }
            }
            camera.targetPosition = target;
        }
    }

    draw(interp, ctx, entities) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (Entity.hasComponents(entity, ["Transform", "Selectable", "Shape"])) {
                var transform = Entity.getComponent(entity, "Transform");
                var selectable = Entity.getComponent(entity, "Selectable");
                var shape = Entity.getComponent(entity, "Shape");
                if (selectable.highlight) {
                    ctx.beginPath();
                    ctx.strokeStyle = Color.style(shape.color);
                    ctx.lineWidth = 1;
                    ctx.rect(Math.round(transform.position.x) - shape.width / 2 - 4, Math.round(transform.position.y) - shape.height / 2 - 4, shape.width + 8, shape.height + 8);
                    ctx.stroke();
                }
            }
        }
    }
}