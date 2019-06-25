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
    static GetComponent(entity, name) {
        return entity.components[name];
    }

    // Retruns true if Entity has all components in Names.
    static HasComponents(entity, names) {
        var hasAll = true;
        for (var i = 0; i < names.length; i++) {
            hasAll &= entity.components[names[i]] != null;
        }
        return hasAll;
    }

    // Adds Component to Entity.
    static AddComponent(entity, component) {
        entity.components[component.name] = component;
    }

    // Removes component from Entity by Name.
    static RemoveComponent(entity, name) {
        entity.components[name] = null;
    }

    // Iterates an array of Entities with given Components, invoking Action.
    static Iterate(entities, components, action) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            if (Entity.HasComponents(entity, components)) {
                action(entity, i);
            }
        }
    }

    // Iterates an array of Entities with given Components backwards, invoking Action.
    static IterateBackwards(entities, components, action) {
        for (var i = entities.length - 1; i >= 0; i--) {
            var entity = entities[i];
            if (Entity.HasComponents(entity, components)) {
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
* Navigate to selected world coordinates
*/
class NavigationComponent {
    constructor(location) {
        this.name = "Navigation";
        this.location = location;
        this.slowFactor = 0.01;
        this.threshold = 10;
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
    constructor(color, type = ShapeComponent.Rectangle, outlineColor = null, outlineWidth = null) {
        this.name = "Shape";
        this.color = color;
        this.outlineColor = outlineColor;
        this.outlineWidth = outlineWidth;
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
* Allows an entity to be selected.
*/
class SelectableComponent {
    constructor() {
        this.name = "Selectable";
    }
}

/*
* Marks an entity as currently selected.
*/
class SelectedComponent {
    constructor() {
        this.name = "Selected";
        this.highlightColor = new Color(0, 100, 100, 1);
    }
}

/*
* Allows an entity to be directable by navigation.
*/
class NavigationRecipientComponent {
    constructor() {
        this.name = "NavigationRecipient";
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

/*
* Stores a sequence of independent animations to be applied.
*/
class AnimationComponent {
    constructor() {
        this.name = "Animation";
        this.sequences = []; // Array of AnimationSequence
    }
}

/*
* A sequence of values to interpolate each keyframe.
*/
class AnimationSequence {
    constructor() {
        this.keyframes = [];
        this.values = [];
        this.component = "";
        this.path = null;
        this.property = "";
        this.keyframe = 0;
        this.elapsed = 0;
        this.easing = "EaseInOutQuad";
        this.type = "Number"; // Number, Vector, Color
        this.loop = true;
        this.playing = true;
    }
}
