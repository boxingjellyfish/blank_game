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
    constructor() {
        this.name = "Transform";
        this.position = Vector.Zero;
        this.angle = 0;
    }
}

class MotionComponent {
    constructor() {
        this.name = "Motion";
        this.velocity = Vector.Zero;
        this.acceleration = Vector.Zero;
        this.angularVelocity = 0;
        this.angularAcceleration = 0;
        this.maxVelocity = 0;
    }
}

class CollisionDetectionComponent {
    constructor() {
        this.name = "CollisionDetection";
        this.boundingBox = Vector.Zero;
        // TODO: Handle other types of collisions
    }
}

class CollisionHandlingComponent {
    constructor() {
        this.name = "CollisionHandling";
        this.collided = null;
    }
}

class MovementSystem {
    update(delta, entities) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (entity.hasComponents(["Transform", "Motion"])) {
                entity.transform.position.x += entity.motion.velocity.x * delta;
                entity.transform.position.y += entity.motion.velocity.y * delta;
                entity.transform.angle += entity.motion.angularVelocity * delta;

                if (entity.motion.velocity.magnitude <= entity.motion.maxVelocity) {
                    entity.motion.velocity.x += entity.motion.acceleration.x * delta;
                    entity.motion.velocity.y += entity.motion.acceleration.y * delta;
                }
                entity.motion.angularVelocity += entity.motion.angularAcceleration * delta;

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