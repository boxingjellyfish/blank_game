/*
* Base class for all systems.
*/
class System {
    constructor(scene) {
        this.scene = scene;
    }

    update(delta) { }

    draw(interp, ctx) { }

    handle(event) { }
}

/*
* Destroys the entity after Duration milliseconds.
*/
class ExpirationSystem extends System {
    constructor(scene) {
        super(scene);
    }

    // Loop update function.
    update(delta) {
        Entity.IterateBackwards(this.scene.entities, ["Expiration"], (entity, index) => {
            var expiration = Entity.GetComponent(entity, "Expiration");
            expiration.elapsed += delta;
            if (expiration.elapsed >= expiration.duration)
                this.scene.entities.splice(index, 1);
        });
    }
}

/*
* Moves entities according to velocity and acceleration.
*/
class MovementSystem extends System {
    constructor(scene) {
        super(scene);
    }

    // Loop update function.
    update(delta) {
        Entity.Iterate(this.scene.entities, ["Transform", "Motion"], (entity) => {
            var transform = Entity.GetComponent(entity, "Transform");
            var motion = Entity.GetComponent(entity, "Motion");
            transform.position.x += motion.velocity.x * delta;
            transform.position.y += motion.velocity.y * delta;
            transform.angle += motion.angularVelocity * delta;

            var velocity = Vector.Copy(motion.velocity);
            velocity.x += motion.acceleration.x * delta;
            velocity.y += motion.acceleration.y * delta;

            if (Vector.Magnitude(velocity) <= motion.maxVelocity) {
                motion.velocity = velocity;
                //console.log("accel");
            }
            else {
                // Damping
                //console.log(Vector.Magnitude(velocity));
                Vector.Multiply(motion.velocity, new Vector(0.95, 0.95));
            }

            motion.angularVelocity += motion.angularAcceleration * delta;

            if (motion.wraparound) {
                if (transform.position.x > this.scene.worldSize.x / 2)
                    transform.position.x = -1 * this.scene.worldSize.x / 2;
                else if (transform.position.x < -1 * this.scene.worldSize.x / 2)
                    transform.position.x = this.scene.worldSize.x / 2;
                if (transform.position.y > this.scene.worldSize.y / 2)
                    transform.position.y = -1 * this.scene.worldSize.y / 2;
                else if (transform.position.y < -1 * this.scene.worldSize.y / 2)
                    transform.position.y = this.scene.worldSize.y / 2;
            }
        });
    }
}

/*
* Checks all collidable entities adding collisions handlers on the fly.
*/
class CollisionDetectionSystem extends System {
    constructor(scene) {
        super(scene);
    }

    // Loop update function.
    update(delta) {
        Entity.Iterate(this.scene.entities, ["Transform", "Motion", "CollisionDetection"], (collider) => {
            var collisionHandling = null;
            Entity.Iterate(this.scene.entities, ["Transform", "CollisionDetection"], (collided) => {
                if (collider.id != collided.id) {
                    if (this.areBoundingBoxesIntersecting(collider, collided)) {
                        collisionHandling = new CollisionHandlingComponent();
                        collisionHandling.collided = collided;
                        collider.addComponent(collisionHandling);
                    }
                }
            });
        });
    }

    // Returns true if entities bounding boxes are overlapping.
    areBoundingBoxesIntersecting(collider, collided) {
        var colliderPosition = Entity.GetComponent(collider, "Transform").position;
        var collidedPosition = Entity.GetComponent(collided, "Transform").position;
        var colliderBoundingBox = Entity.GetComponent(collider, "CollisionDetection").boundingBox;
        var collidedBoundingBox = Entity.GetComponent(collided, "CollisionDetection").boundingBox;
        var colliderBoundingBoxStart = Vector.Substract(Vector.Copy(colliderPosition), colliderBoundingBox);
        var colliderBoundingBoxEnd = Vector.Add(Vector.Copy(colliderPosition), colliderBoundingBox);
        var collidedBoundingBoxStart = Vector.Substract(Vector.Copy(collidedPosition), collidedBoundingBox);
        var collidedBoundingBoxEnd = Vector.Add(Vector.Copy(collidedPosition), collidedBoundingBox);
        return colliderBoundingBoxStart.x < collidedBoundingBoxEnd.x &&
            colliderBoundingBoxEnd.x > collidedBoundingBoxStart.x &&
            colliderBoundingBoxStart.y < collidedBoundingBoxEnd.y &&
            colliderBoundingBoxEnd.y > collidedBoundingBoxStart.y;
    }
}

/*
* For testing purposes, reverses direction after collision.
*/
class CollisionHandlingSystem extends System {
    constructor(scene) {
        super(scene);
    }

    // Loop update function.
    update(delta) {
        Entity.Iterate(this.scene.entities, ["Motion", "CollisionHandling"], (collider) => {
            Entity.RemoveComponent(collider, "CollisionHandling");
            var motion = Entity.GetComponent(collider, "Motion");
            Vector.Multiply(motion.velocity, new Vector(-1, -1));
            Vector.Multiply(motion.acceleration, new Vector(-1, -1));
        });
    }
}

/*
* Simple square renderer.
*/
class ShapeRendererSystem extends System {
    constructor(scene) {
        super(scene);
    }

    // Loop render function.
    draw(interp, ctx) {
        Entity.Iterate(this.scene.entities, ["Transform", "Shape"], (entity) => {
            var transform = Entity.GetComponent(entity, "Transform");
            if (this.scene.camera.isInsideViewport(transform.position, transform.scale)) {
                var shape = Entity.GetComponent(entity, "Shape");
                if (shape.color) {
                    ctx.fillStyle = Color.Style(shape.color);
                }
                if (shape.outlineColor && shape.outlineWidth) {
                    ctx.strokeStyle = Color.Style(shape.outlineColor);
                    ctx.lineWidth = shape.outlineWidth;
                }
                if (shape.type == ShapeComponent.Ellipse) {
                    ctx.beginPath();
                    ctx.ellipse(Math.round(transform.position.x), Math.round(transform.position.y), Math.round(transform.scale.x / 2), Math.round(transform.scale.y / 2), 0, 0, 2 * Math.PI);

                    if (shape.outlineColor && shape.outlineWidth)
                        ctx.stroke();
                    if (shape.color)
                        ctx.fill();
                }
                else if (shape.type == ShapeComponent.Triangle) {
                    ctx.beginPath();
                    ctx.moveTo(Math.round(transform.position.x - transform.scale.x / 2), Math.round(transform.position.y - transform.scale.y / 2));
                    ctx.lineTo(Math.round(transform.position.x), Math.round(transform.position.y + transform.scale.y / 2));
                    ctx.lineTo(Math.round(transform.position.x + transform.scale.x / 2), Math.round(transform.position.y - transform.scale.y / 2));
                    ctx.closePath();
                    if (shape.outlineColor && shape.outlineWidth)
                        ctx.stroke();
                    if (shape.color)
                        ctx.fill();

                }
                else {
                    if (shape.outlineColor && shape.outlineWidth)
                        ctx.strokeRect(Math.round(transform.position.x) - transform.scale.x / 2, Math.round(transform.position.y) - transform.scale.y / 2, transform.scale.x, transform.scale.y);
                    if (shape.color)
                        ctx.fillRect(Math.round(transform.position.x) - transform.scale.x / 2, Math.round(transform.position.y) - transform.scale.y / 2, transform.scale.x, transform.scale.y);

                }
            }
        });
    }
}

/*
* Renders the last N positions of an entity.
*/
class TraceRendererSystem extends System {
    constructor(scene) {
        super(scene);
    }

    // Loop update function.
    update(delta) {
        Entity.Iterate(this.scene.entities, ["Transform", "Trace"], (entity) => {
            var transform = Entity.GetComponent(entity, "Transform");
            var trace = Entity.GetComponent(entity, "Trace");
            trace.points.push(Vector.Copy(transform.position));
            if (trace.points.length > trace.maxPoints)
                trace.points.shift();
        });
    }

    // Loop render function.
    draw(interp, ctx) {
        Entity.Iterate(this.scene.entities, ["Trace"], (entity) => {
            var trace = Entity.GetComponent(entity, "Trace");
            if (trace.points.length > 0) {
                var pos = trace.points[0];
                ctx.beginPath();
                ctx.strokeStyle = Color.Style(trace.color);
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
            }
        });
    }
}

/*
* Enables an entity to be selected with mouse cursor.
*/
class SelectionSystem extends System {
    constructor(scene) {
        super(scene);
        this.lastClickPosition = null;
        this.clickHandler = new ClickHandler();
    }

    // Loop update function.
    update(delta) {
        if (this.clickHandler.clickStarted(0)) {
            this.lastClickPosition = this.scene.camera.screenToWorld(Input.Instance.mousePosition);
        }
        if (this.clickHandler.clickEnded(0)) {
            var position = Vector.Copy(this.lastClickPosition);
            Entity.Iterate(this.scene.entities, ["Transform", "Selectable"], (entity) => {
                //Entity.RemoveComponent(entity, "Selected");
                var transform = Entity.GetComponent(entity, "Transform");
                if (Math.abs(transform.position.x - this.lastClickPosition.x) <= transform.scale.x / 2
                    && Math.abs(transform.position.y - this.lastClickPosition.y) <= transform.scale.y / 2) {
                    Entity.AddComponent(entity, new SelectedComponent());
                }
            });
            // this.scene.camera.targetPosition = target;
            // this.scene.camera.fogCenter = target;
        }
    }
}

/*
* Enables an entity to be directed by navigation.
*/
class NavigationRecipientSystem extends System {
    constructor(scene) {
        super(scene);
        this.lastClickPosition = null;
        this.clickHandler = new ClickHandler();
    }

    // Loop update function.
    update(delta) {
        if (this.clickHandler.clickStarted(0)) {
            this.lastClickPosition = this.scene.camera.screenToWorld(Input.Instance.mousePosition);
        }
        if (this.clickHandler.clickEnded(0)) {
            Entity.Iterate(this.scene.entities, ["NavigationRecipient", "Selected"], (entity) => {
                Entity.RemoveComponent(entity, "Navigation");
                Entity.RemoveComponent(entity, "Motion");
                Entity.AddComponent(entity, new MotionComponent(Vector.Zero, 0.5, Vector.Zero));
                Entity.AddComponent(entity, new NavigationComponent(Vector.Copy(this.lastClickPosition)));
            });
        }
    }
}

/*
* Enables an entity to be selected with mouse cursor and be highlighted.
*/
class SelectedHighlightSystem extends System {
    constructor(scene) {
        super(scene);
    }

    // Loop render function.
    draw(interp, ctx) {
        Entity.Iterate(this.scene.entities, ["Transform", "Selected"], (entity) => {
            var transform = Entity.GetComponent(entity, "Transform");
            if (this.scene.camera.isInsideViewport(transform.position, transform.scale)) {
                var selected = Entity.GetComponent(entity, "Selected");
                ctx.beginPath();
                ctx.strokeStyle = Color.Style(selected.highlightColor);
                ctx.lineWidth = 1;
                ctx.rect(Math.round(transform.position.x) - transform.scale.x / 2 - 4, Math.round(transform.position.y) - transform.scale.y / 2 - 4, transform.scale.x + 8, transform.scale.y + 8);
                ctx.stroke();
            }
        });
    }
}

/*
* Applies force fields to to subjects.
*/
class ForceFieldSystem extends System {
    constructor(scene) {
        super(scene);
    }

    // Loop update function.
    update(delta) {
        Entity.Iterate(this.scene.entities, ["ForceFieldSubject", "Transform", "Motion"], (entity) => {
            var subject = Entity.GetComponent(entity, "ForceFieldSubject");
            var subjectTransform = Entity.GetComponent(entity, "Transform");
            var subjectMotion = Entity.GetComponent(entity, "Motion");
            // TODO: why is this zero? Why not entity accel?
            var totalAcceleration = Vector.Zero;
            Entity.Iterate(this.scene.entities, ["ForceField", "Transform"], (fieldEntity) => {
                var field = Entity.GetComponent(fieldEntity, "ForceField");
                if (subject.fieldIds.includes(fieldEntity.id) && field.enabled) {
                    var fieldTransform = Entity.GetComponent(fieldEntity, "Transform");
                    var vector = Vector.Substract(Vector.Copy(fieldTransform.position), subjectTransform.position);
                    // TODO: 1.5 Magic number?
                    var force = field.mass / Math.pow(vector.x * vector.x + vector.y * vector.y, 1.5);
                    Vector.Add(totalAcceleration, Vector.Multiply(vector, new Vector(force, force)));
                    if (field.destructive) {
                        if (Math.pow(subjectTransform.position.x - fieldTransform.position.x, 2) + Math.pow(subjectTransform.position.y - fieldTransform.position.y, 2) < Math.pow(field.radius, 2)) {
                            if (Entity.HasComponents(entity, ["Expiration"]))
                                Entity.GetComponent(entity, "Expiration").duration = 0;
                            else
                                Entity.AddComponent(entity, new ExpirationComponent(0));
                        }
                    }
                }
            });
            subjectMotion.acceleration = totalAcceleration;
        });
    }
}

/*
* Creates particles from emitters.
*/
class ParticleEmissionSystem extends System {
    constructor(scene) {
        super(scene);
    }

    // Loop update function.
    update(delta) {
        var foregroundParticles = [];
        var backgroundParticles = [];
        Entity.Iterate(this.scene.entities, ["ParticleEmitter", "Transform"], (entity) => {
            var emitter = Entity.GetComponent(entity, "ParticleEmitter");
            var emitterTransform = Entity.GetComponent(entity, "Transform");
            if (emitter.enabled) {
                var particlesToEmit = 0;
                emitter.emissionTimer += delta;
                var emissionRateInv = 1 / emitter.emissionRate
                if (emitter.emissionTimer > emissionRateInv) {
                    particlesToEmit = Math.round(emitter.emissionTimer / emissionRateInv);
                    emitter.emissionTimer = emitter.emissionTimer % emissionRateInv;
                }
                for (var i = 0; i < particlesToEmit; i++) {
                    var angle = Vector.Angle(emitter.particleVelocity) + emitter.spread - Random.Float(0, emitter.spread * 2);
                    var segment = Vector.FromAngleAndMagnitude(Vector.Angle(emitter.particleVelocity) + Math.PI / 2, emitter.size);
                    var randomSegment = Vector.FromAngleAndMagnitude(Vector.Angle(emitter.particleVelocity) - Math.PI / 2, Random.Float(0, emitter.size * 2));
                    Vector.Add(segment, randomSegment);
                    Vector.Add(segment, emitterTransform.position);
                    var position = segment;
                    var velocity = Vector.FromAngleAndMagnitude(angle, Random.Float(Vector.Magnitude(emitter.particleVelocity), Vector.Magnitude(emitter.particleVelocity) * emitter.velocityRandomness));
                    var life = Random.Int(emitter.particleLifespan, emitter.particleLifespan * emitter.particleLifespanRandomness);
                    var size = Random.Int(emitter.particleSize, emitter.particleSize * emitter.particleSizeRandomness);

                    var particle = new Entity();
                    Entity.AddComponent(particle, new TransformComponent(position, new Vector(size, size)));
                    Entity.AddComponent(particle, new MotionComponent(velocity, Number.MAX_SAFE_INTEGER, Vector.Zero));
                    Entity.AddComponent(particle, new ShapeComponent(Color.Copy(emitter.color)));
                    Entity.AddComponent(particle, new ExpirationComponent(life));

                    var animation = new AnimationComponent();
                    var colorAnimation = new AnimationSequence();
                    colorAnimation.keyframes = [0, life];
                    colorAnimation.values = [Color.Copy(emitter.color), Color.Copy(emitter.colorEnd)];
                    colorAnimation.component = "Shape";
                    colorAnimation.property = "color";
                    colorAnimation.type = "Color";
                    colorAnimation.easing = "EaseInOutQuad";
                    animation.sequences.push(colorAnimation);
                    Entity.AddComponent(particle, animation);

                    if (emitter.fieldIds.length > 0)
                        Entity.AddComponent(particle, new ForceFieldSubjectComponent(emitter.fieldIds));

                    if (emitter.foreground)
                        foregroundParticles.push(particle);
                    else
                        backgroundParticles.push(particle);
                }
            }
        });
        for (var i = 0; i < foregroundParticles.length; i++) {
            this.scene.entities.push(foregroundParticles[i]);
        }
        for (var i = 0; i < backgroundParticles.length; i++) {
            this.scene.entities.unshift(backgroundParticles[i]);
        }
    }

}

/*
* Interpolates between values defined in each AnimationSequence.
*/
class AnimationSystem extends System {
    constructor(scene) {
        super(scene);
    }

    // Loop update function.
    update(delta) {
        Entity.Iterate(this.scene.entities, ["Animation"], (entity) => {
            var animation = Entity.GetComponent(entity, "Animation");
            for (var sequence of animation.sequences) {
                if (sequence.playing) {
                    sequence.elapsed += delta;
                    var nextKeyframe = sequence.keyframe >= sequence.keyframes.length - 1 ? 0 : sequence.keyframe + 1;
                    if (sequence.elapsed < sequence.keyframes[nextKeyframe]) {
                        var perc = (sequence.elapsed - sequence.keyframes[sequence.keyframe]) / (sequence.keyframes[nextKeyframe] - sequence.keyframes[sequence.keyframe]);
                        var comp = Entity.GetComponent(entity, sequence.component);
                        var e = Easing[sequence.easing](perc);
                        var obj = sequence.path != null ? this.getNestedObject(comp, sequence.path.split(".")) : comp;

                        if (sequence.type == "Vector")
                            obj[sequence.property] = Easing.VectorLerp(sequence.values[sequence.keyframe], sequence.values[nextKeyframe], e);
                        else if (sequence.type == "Color")
                            obj[sequence.property] = Easing.ColorLerp(sequence.values[sequence.keyframe], sequence.values[nextKeyframe], e);
                        else
                            obj[sequence.property] = Easing.Lerp(sequence.values[sequence.keyframe], sequence.values[nextKeyframe], e);

                    }
                    else {
                        sequence.keyframe = nextKeyframe;
                        if (sequence.keyframe == sequence.keyframes.length - 1) {
                            sequence.keyframe = 0;
                            sequence.elapsed = 0;
                            if (!sequence.loop)
                                sequence.playing = false;
                        }
                    }
                }
            }
        });
    }

    getNestedObject(nestedObj, pathArr) {
        return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
    }
}

/*
* Navigates until destination is reached.
*/
class NavigationSystem extends System {
    constructor(scene) {
        super(scene);
    }

    // Loop update function.
    update(delta) {
        Entity.Iterate(this.scene.entities, ["Navigation", "Transform", "Motion"], (entity) => {
            var transform = Entity.GetComponent(entity, "Transform");
            var motion = Entity.GetComponent(entity, "Motion");
            var navigation = Entity.GetComponent(entity, "Navigation");
            var distance = Vector.Substract(Vector.Copy(navigation.location), transform.position);
            if (Vector.Magnitude(distance) > navigation.threshold) {
                var factor = new Vector(navigation.slowFactor, navigation.slowFactor);
                motion.acceleration = Vector.Multiply(Vector.Normalize(distance), factor);
            } else {
                motion.velocity = Vector.Zero;
                motion.acceleration = Vector.Zero;
                Entity.RemoveComponent(entity, "Navigation");
            }
        });
    }
}

/*
* Generates random rooms when needed
*/
class RoomGeneratorSystem extends System {
    constructor(scene) {
        super(scene);
        this.color = new Color(0, 0, 20, 1);
        this.factor = 40;
        this.centerBounds = 400 / this.factor;
        this.minSize = 200 / this.factor;
        this.maxSize = 1200 / this.factor;
    }

    handle(event) {
        if (event.name == "GenerateRoom") {
            // Destroy previous room components
            Entity.Iterate(this.scene.entities, ["RoomRectangle"], (entity) => {
                Entity.AddComponent(entity, new ExpirationComponent(0));
            });

            var rectanglesCount = Random.Int(8, 16);
            for (var i = 0; i < rectanglesCount; i++) {
                var rectangle = new Entity();
                Entity.AddComponent(rectangle, new RoomRectangleComponent());
                var position = new Vector(Random.Int(-1 * this.centerBounds, this.centerBounds), Random.Int(-1 * this.centerBounds, this.centerBounds));
                Vector.Multiply(position, new Vector(this.factor, this.factor));
                var scale = i % 2 == 0 ? new Vector(Random.Int(this.minSize, this.maxSize / 2), Random.Int(this.maxSize / 2, this.maxSize)) : new Vector(Random.Int(this.maxSize / 2, this.maxSize), Random.Int(this.minSize, this.maxSize / 2));
                Vector.Multiply(scale, new Vector(this.factor, this.factor));
                Entity.AddComponent(rectangle, new TransformComponent(position, scale));
                Entity.AddComponent(rectangle, new ShapeComponent(this.color, ShapeComponent.Rectangle, this.color, 2));
                this.scene.entities.push(rectangle);
            }
        }
    }
}