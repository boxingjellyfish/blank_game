// https://medium.com/@savas/nomad-game-engine-part-2-ecs-9132829188e5
// http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript
// https://github.com/sosolimited/Entity-Component-Samples

class Entity {
    constructor() {
        this.id = Random.UUID();
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

    static iterate(entities, components, action) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (Entity.hasComponents(entity, components)) {
                action(entity, i);
            }
        }
    }

    static iterateBackwards(entities, components, action) {
        for (var i = entities.length - 1; i >= 0; i--) {
            var entity = entities[i];
            if (Entity.hasComponents(entity, components)) {
                action(entity, i);
            }
        }
    }
}

class TransformComponent {
    constructor(position = Vector.Zero, scale = Vector.One, angle = 0) {
        this.name = "Transform";
        this.position = position;
        this.scale = scale;
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
    constructor(color) {
        this.name = "Shape";
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
        this.highlightColor = new Color(0, 100, 100, 1);
    }
}

class ExpirationComponent {
    constructor(duration) {
        this.name = "Expiration";
        this.duration = duration;
        this.elapsed = 0;
    }
}

class ColorGradientComponent {
    constructor(colorStart, colorEnd, duration) {
        this.name = "ColorGradient";
        this.colorStart = colorStart;
        this.colorEnd = colorEnd;
        this.duration = duration;
        this.elapsed = 0;
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
        this.particleLifespan = 1;
        this.particleLifespanRandomness = 1;
        this.enabled = true;
        this.emissionTimer = 0;
        //TODO: resolve drawing Z
        this.foreground = true;
        this.fieldIds = [];
    }
}

class ForceFieldSubjectComponent {
    constructor(fieldIds) {
        this.name = "ForceFieldSubject";
        this.fieldIds = fieldIds;
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