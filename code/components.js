/*
* Base component
*/
class Component {
    constructor(name) {
        this.name = name;
    }
}

/*
* Position, Scale and Angle in 2D.
*/
class TransformComponent extends Component {
    constructor(position = Vector.Zero, scale = Vector.One, angle = 0) {
        super(Components.TRANSFORM);
        this.position = position;
        this.scale = scale;
        this.angle = angle;
    }
}

/*
* Stores Velocity and Acceleration in 2D.
*/
class MotionComponent extends Component {
    constructor(velocity, maxVelocity, acceleration, angularVelocity = 0, angularAcceleration = 0) {
        super(Components.MOTION);
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
class NavigationComponent extends Component {
    constructor(location) {
        super(Components.NAVIGATION);
        this.location = location;
        this.slowFactor = 0.01;
        this.threshold = 10;
    }
}

/*
* Stores the collision bounding box.
*/
class CollisionDetectionComponent extends Component {
    constructor(boundingBox) {
        super(Components.COLLISION_DETECTION);
        this.boundingBox = boundingBox;
    }
}

/*
* Stores collided object after a detection.
*/
class CollisionHandlingComponent extends Component {
    constructor(collided) {
        super(Components.COLLISION_HANDLING);
        this.collided = collided;
    }
}

/*
* Apperance of a shape to be rendered on screen.
*/
class ShapeComponent extends Component {
    constructor(color, type = ShapeTypes.RECTANGLE, outlineColor = null, outlineWidth = null) {
        super(Components.SHAPE);
        this.color = color;
        this.outlineColor = outlineColor;
        this.outlineWidth = outlineWidth;
        this.type = type;
    }
}

/*
* Stores the last N positions of an entity to render a trace.
*/
class TraceComponent extends Component {
    constructor(width, color) {
        super(Components.TRACE);
        this.width = width;
        this.color = color;
        this.points = [];
        this.maxPoints = 25;
    }
}

/*
* Allows an entity to be selected.
*/
class SelectableComponent extends Component {
    constructor() {
        super(Components.SELECTABLE);
    }
}

/*
* Marks an entity as currently selected.
*/
class SelectedComponent extends Component {
    constructor(color = new Color(0, 0, 100, 1)) {
        super(Components.SELECTED);
        this.highlightColor = color;
    }
}

/*
* Allows an entity to be directable by navigation.
*/
class NavigationRecipientComponent extends Component {
    constructor() {
        super(Components.NAVIGATION_RECIPIENT);
    }
}

/*
* Destroys the entity after Duration milliseconds.
*/
class ExpirationComponent extends Component {
    constructor(duration) {
        super(Components.EXPIRATION);
        this.duration = duration;
        this.elapsed = 0;
    }
}

/*
* Source of particle entities.
*/
class ParticleEmitterComponent extends Component {
    constructor() {
        super(Components.PARTICLE_EMITTER);
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
class ForceFieldComponent extends Component {
    constructor() {
        super(Components.FORCE_FIELD);
        this.mass = 1;
        this.radius = 1;
        this.destructive = true;
        this.enabled = true;
    }
}

/*
* Is affected by fields.
*/
class ForceFieldSubjectComponent extends Component {
    constructor(fieldIds) {
        super(Components.FORCE_FIELD_SUBJECT);
        this.fieldIds = fieldIds;
    }
}

/*
* Stores a sequence of independent animations to be applied.
*/
class AnimationComponent extends Component {
    constructor() {
        super(Components.ANIMATION);
        this.sequences = []; // Array of AnimationSequence
    }
}

/*
* A sequence of values to interpolate each keyframe.
*/
class AnimationSequence {
    constructor(name = "") {
        this.name = name;
        this.keyframes = [];
        this.values = [];
        this.component = "";
        this.path = null;
        this.property = "";
        this.keyframe = 0;
        this.elapsed = 0;
        this.easing = "EaseInOutQuad";
        this.type = AnimationSequenceTypes.NUMBER;
        this.loop = true;
        this.playing = true;
    }
}

/*
* Rectangle that compones a room
*/
class RoomRectangleComponent extends Component {
    constructor() {
        super(Components.ROOM_RECTANGLE);
        // Emtpy for now, just marks that this entity is part of a room.
        // Maybe knows about doors/connections?
    }
}