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

    get collision() {
        return this.getComponent("Collision");
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
    }
}

class CollisionComponent {
    constructor() {
        this.name = "Collision";
        this.boundingBox = Vector.Zero;
        // TODO: Handle other types of collisions
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

                entity.motion.velocity.x += entity.motion.acceleration.x * delta;
                entity.motion.velocity.y += entity.motion.acceleration.y * delta;
                entity.motion.angularVelocity += entity.motion.angularAcceleration * delta;
            }
        }
    }
}

class CollisionSystem {
    update(delta, entities) {
        for (var i = 0; i < entities.length; i++) {
            var entityA = entities[i];
            if (entityA.hasComponents(["Transform", "Motion", "Collision"])) {
                var boundingBoxStartA = entityA.transform.position.copy.substract(entityA.collision.boundingBox);
                var boundingBoxEndA = entityA.transform.position.copy.add(entityA.collision.boundingBox);
                var collided = false;
                for (var j = 0; j < entities.length && !collided; j++) {
                    var entityB = entities[j];
                    if (entityA.id != entityB.id && entityB.hasComponents(["Transform", "Collision"])) {
                        var boundingBoxStartB = entityB.transform.position.copy.substract(entityB.collision.boundingBox);
                        var boundingBoxEndB = entityB.transform.position.copy.add(entityB.collision.boundingBox);
                        collided = Collisions.boundigBoxes(boundingBoxStartA, boundingBoxEndA, boundingBoxStartB, boundingBoxEndB);
                    }
                }
                if(collided) {
                    entityA.motion.velocity.multiply(new Vector(-1, -1));
                }
            }
        }
    }
}