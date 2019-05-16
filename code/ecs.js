// https://medium.com/@savas/nomad-game-engine-part-2-ecs-9132829188e5
// http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript
// https://github.com/sosolimited/Entity-Component-Samples

class Entity {
    constructor() {
        this.id = UUID.new;
        this.components = {};
    }

    getComponent(name) {
        return this.components[name];
    }

    hasComponent(name) {
        return this.components[name] != null;
    }

    hasComponents(names) {
        var hasAll = true;
        for (var i = 0; i < names.length; i++) {
            hasAll &= this.components[names[i]] != null;
        }
        return hasAll;
    }

    addComponent(component) {
        this.components[component.name] = component;
    }

    removeComponent(name) {
        this.components[name] = null;
    }

    get transform() {
        return this.getComponent("Transform");
    }

    get motion() {
        return this.getComponent("Motion");
    }

    get collisionDetection() {
        return this.getComponent("CollisionDetection");
    }

    get collisionHandling() {
        return this.getComponent("CollisionHandling");
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

class ShapeComponent {
    constructor(width, height, color) {
        this.name = "Shape";
        this.width = width;
        this.height = height;
        this.color = color;
        this.highlight = false;
    }
}

class TraceComponent {
    constructor(width, color) {
        this.name = "Trace";
        this.width = width;
        this.color = color;
        this.points = [];
        this.maxPoints = 1;
    }
}

class SelectableComponent {
    constructor() {
        this.name = "Selectable";
        this.threshold = 20;
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
            if (entity.hasComponents(["Transform", "Motion"])) {
                var transform = entity.getComponent("Transform");
                var motion = entity.getComponent("Motion");
                transform.position.x += motion.velocity.x * delta;
                transform.position.y += motion.velocity.y * delta;
                transform.angle += motion.angularVelocity * delta;

                var velocity = motion.velocity.copy;
                velocity.x += motion.acceleration.x * delta;
                velocity.y += motion.acceleration.y * delta;

                if (velocity.magnitude <= motion.maxVelocity) {
                    motion.velocity = velocity;
                }
                else {
                    // Damping
                    motion.velocity.multiply(new Vector(0.95, 0.95));
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
            if (collider.hasComponents(["Transform", "Motion", "CollisionDetection"])) {
                var collisionHandling = null;
                for (var j = 0; j < entities.length && !collisionHandling; j++) {
                    var collided = entities[j];
                    if (collider.id != collided.id && collided.hasComponents(["Transform", "CollisionDetection"])) {
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
        var colliderBoundingBoxStart = collider.transform.position.copy.substract(collider.collisionDetection.boundingBox);
        var colliderBoundingBoxEnd = collider.transform.position.copy.add(collider.collisionDetection.boundingBox);
        var collidedBoundingBoxStart = collided.transform.position.copy.substract(collided.collisionDetection.boundingBox);
        var collidedBoundingBoxEnd = collided.transform.position.copy.add(collided.collisionDetection.boundingBox);
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
            if (collider.hasComponents(["Motion", "CollisionHandling"])) {
                collider.removeComponent("CollisionHandling");
                collider.motion.velocity.multiply(new Vector(-1, -1));
                collider.motion.acceleration.multiply(new Vector(-1, -1));
            }
        }
    }
}

class ShapeRendererSystem {
    draw(interp, ctx, entities) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (entity.hasComponents(["Transform", "Shape"])) {
                var transform = entity.getComponent("Transform");
                var shape = entity.getComponent("Shape");
                ctx.fillStyle = shape.color;
                ctx.fillRect(Math.round(transform.position.x) - shape.width / 2, Math.round(transform.position.y) - shape.height / 2, shape.width, shape.height);
                if (shape.highlight) {
                    ctx.beginPath();
                    ctx.strokeStyle = shape.color;
                    ctx.lineWidth = 1;
                    ctx.rect(Math.round(transform.position.x) - shape.width / 2 - 4, Math.round(transform.position.y) - shape.height / 2 - 4, shape.width + 8, shape.height + 8);
                    ctx.stroke();
                }
            }
        }
    }
}

class TraceRendererSystem {
    update(delta, entities) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (entity.hasComponents(["Transform", "Trace"])) {
                var transform = entity.getComponent("Transform");
                var trace = entity.getComponent("Trace");
                trace.points.push(transform.position.copy);
                if (trace.points.length > trace.maxPoints)
                    trace.points.shift();
            }
        }
    }

    draw(interp, ctx, entities) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (entity.hasComponents(["Trace", "Motion"])) {
                var trace = entity.getComponent("Trace");
                var motion = entity.getComponent("Motion");
                if (trace.points.length > 0) {
                    var pos = trace.points[0];
                    ctx.beginPath();
                    ctx.strokeStyle = trace.color;
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

                    var acc = motion.acceleration.copy.normalize.multiply(new Vector(20, 20));
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
            var target = this.position.copy;
            var found = false;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                if (entity.hasComponents(["Transform", "Selectable", "Shape"])) {
                    var transform = entity.getComponent("Transform");
                    var selectable = entity.getComponent("Selectable");
                    var shape = entity.getComponent("Shape");
                    shape.highlight = false;
                    if (!found && Math.abs(transform.position.x - this.position.x) <= selectable.threshold
                        && Math.abs(transform.position.y - this.position.y) <= selectable.threshold) {
                        shape.highlight = true;
                        target = transform.position;
                        found = true;
                    }
                }
            }
            camera.targetPosition = target;
        }
    }
}