/*
* An Entity is just a bag of Components with an ID
* https://medium.com/@savas/nomad-game-engine-part-2-ecs-9132829188e5
* http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript
* https://github.com/sosolimited/Entity-Component-Samples
*/
class Entity {
    constructor() {
        this.id = Random.UUID();
        this.components = {};
    }

    // Returns a component of Entity by Name.
    static getComponent(entity, name) {
        return entity.components[name];
    }

    // Retruns true if Entity has all components in Names.
    static hasComponents(entity, names) {
        var hasAll = true;
        for (var i = 0; i < names.length; i++) {
            hasAll &= entity.components[names[i]] != null;
        }
        return hasAll;
    }

    // Adds Component to Entity.
    static addComponent(entity, component) {
        entity.components[component.name] = component;
    }

    // Removes component from Entity by Name.
    static removeComponent(entity, name) {
        entity.components[name] = null;
    }

    // Iterates an array of Entities with given Components, invoking Action.
    static iterate(entities, components, action) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (Entity.hasComponents(entity, components)) {
                action(entity, i);
            }
        }
    }

    // Iterates an array of Entities with given Components backwards, invoking Action.
    static iterateBackwards(entities, components, action) {
        for (var i = entities.length - 1; i >= 0; i--) {
            var entity = entities[i];
            if (Entity.hasComponents(entity, components)) {
                action(entity, i);
            }
        }
    }
}

/*
* Position, Scale and Angle in 2D.
*/
class TransformComponent {
    constructor(position = Vector.Zero, scale = Vector.One, angle = 0) {
        this.name = "Transform";
        this.position = position;
        this.scale = scale;
        this.angle = angle;
    }
}

/*
* Stores Velocity and Acceleration in 2D.
*/
class MotionComponent {
    constructor(velocity, maxVelocity, acceleration, angularVelocity = 0, angularAcceleration = 0) {
        this.name = "Motion";
        this.velocity = velocity;
        this.maxVelocity = maxVelocity;
        this.acceleration = acceleration;
        this.angularVelocity = angularVelocity;
        this.angularAcceleration = angularAcceleration;
        this.wraparound = true;
    }
}

/*
* Stores the collision bounding box.
*/
class CollisionDetectionComponent {
    constructor(boundingBox) {
        this.name = "CollisionDetection";
        this.boundingBox = boundingBox;
    }
}

/*
* Stores collided object after a detection.
*/
class CollisionHandlingComponent {
    constructor(collided) {
        this.name = "CollisionHandling";
        this.collided = collided;
    }
}

/*
* Apperance of a shape to be rendered on screen.
*/
class ShapeComponent {
    constructor(color, type = ShapeComponent.Rectangle) {
        this.name = "Shape";
        this.color = color;
        this.type = type;
    }

    static get Rectangle() {
        return "Rectangle";
    }

    static get Ellipse() {
        return "Ellipse";
    }

    static get Triangle() {
        return "Triangle";
    }
}

/*
* Stores the last N positions of an entity to render a trace.
*/
class TraceComponent {
    constructor(width, color) {
        this.name = "Trace";
        this.width = width;
        this.color = color;
        this.points = [];
        this.maxPoints = 25;
    }
}

/*
* Select and highlight an Entity with mouse cursor.
*/
class SelectableComponent {
    constructor() {
        this.name = "Selectable";
        this.threshold = 20;
        this.highlight = false;
        this.highlightColor = new Color(0, 100, 100, 1);
    }
}

/*
* Destroys the entity after Duration milliseconds.
*/
class ExpirationComponent {
    constructor(duration) {
        this.name = "Expiration";
        this.duration = duration;
        this.elapsed = 0;
    }
}

/*
* Shifts from start and end colors according to duration.
*/
class ColorGradientComponent {
    constructor(colorStart, colorEnd, duration) {
        this.name = "ColorGradient";
        this.colorStart = colorStart;
        this.colorEnd = colorEnd;
        this.duration = duration;
        this.elapsed = 0;
    }
}

/*
* Source of particle entities.
*/
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
        this.foreground = true;
        this.fieldIds = [];
    }
}

/*
* Force field to be applyed to subjects.
*/
class ForceFieldComponent {
    constructor() {
        this.name = "ForceField";
        this.mass = 1;
        this.radius = 1;
        this.destructive = true;
        this.enabled = true;
    }
}

/*
* Is affected by fields.
*/
class ForceFieldSubjectComponent {
    constructor(fieldIds) {
        this.name = "ForceFieldSubject";
        this.fieldIds = fieldIds;
    }
}


class AnimationComponent {
    constructor() {
        this.name = "Animation";
        /*
        this.keyframes = [0, 1000, 2000, 3000];
        this.keyframesData = [
            {
                component: "Movement",
                property: "position",

            }
        ];
        */
    }
}
