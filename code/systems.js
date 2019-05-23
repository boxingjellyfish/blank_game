

/*
* Destroys the entity after Duration milliseconds.
*/
class ExpirationSystem {

    // Loop update function.
    update(delta, entities) {
        Entity.iterateBackwards(entities, ["Expiration"], (entity, index) => {
            var expiration = Entity.getComponent(entity, "Expiration");
            expiration.elapsed += delta;
            if (expiration.elapsed >= expiration.duration)
                entities.splice(index, 1);
        });
    }
}

/*
* Moves entities according to velocity and acceleration.
*/
class MovementSystem {

    // Stores world limits.
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.halfWidth = width / 2;
        this.halfHeight = height / 2;
    }

    // Loop update function.
    update(delta, entities) {
        Entity.iterate(entities, ["Transform", "Motion"], (entity) => {
            var transform = Entity.getComponent(entity, "Transform");
            var motion = Entity.getComponent(entity, "Motion");
            transform.position.x += motion.velocity.x * delta;
            transform.position.y += motion.velocity.y * delta;
            transform.angle += motion.angularVelocity * delta;

            var velocity = Vector.Copy(motion.velocity);
            velocity.x += motion.acceleration.x * delta;
            velocity.y += motion.acceleration.y * delta;

            if (Vector.Magnitude(velocity) <= motion.maxVelocity) {
                motion.velocity = velocity;
            }
            else {
                // Damping
                Vector.Multiply(motion.velocity, new Vector(0.95, 0.95));
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
        });
    }
}

/*
* Checks all collidable entities adding collisions handlers on the fly.
*/
class CollisionDetectionSystem {

    // Loop update function.
    update(delta, entities) {
        Entity.iterate(entities, ["Transform", "Motion", "CollisionDetection"], (collider) => {
            var collisionHandling = null;
            Entity.iterate(entities, ["Transform", "CollisionDetection"], (collided) => {
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
        var colliderPosition = Entity.getComponent(collider, "Transform").position;
        var collidedPosition = Entity.getComponent(collided, "Transform").position;
        var colliderBoundingBox = Entity.getComponent(collider, "CollisionDetection").boundingBox;
        var collidedBoundingBox = Entity.getComponent(collided, "CollisionDetection").boundingBox;
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
class CollisionHandlingSystem {

    // Loop update function.
    update(delta, entities) {
        Entity.iterate(entities, ["Motion", "CollisionHandling"], (collider) => {
            Entity.removeComponent(collider, "CollisionHandling");
            var motion = Entity.getComponent(collider, "Motion");
            Vector.Multiply(motion.velocity, new Vector(-1, -1));
            Vector.Multiply(motion.acceleration, new Vector(-1, -1));
        });
    }
}

/*
* Simple square renderer.
*/
class ShapeRendererSystem {

    // Loop render function.
    draw(interp, ctx, entities) {
        Entity.iterate(entities, ["Transform", "Shape"], (entity) => {
            var transform = Entity.getComponent(entity, "Transform");
            var shape = Entity.getComponent(entity, "Shape");
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
        });
    }
}

/*
* Renders the last N positions of an entity.
*/
class TraceRendererSystem {

    // Loop update function.
    update(delta, entities) {
        Entity.iterate(entities, ["Transform", "Trace"], (entity) => {
            var transform = Entity.getComponent(entity, "Transform");
            var trace = Entity.getComponent(entity, "Trace");
            trace.points.push(Vector.Copy(transform.position));
            if (trace.points.length > trace.maxPoints)
                trace.points.shift();
        });
    }

    // Loop render function.
    draw(interp, ctx, entities) {
        Entity.iterate(entities, ["Trace"], (entity) => {
            var trace = Entity.getComponent(entity, "Trace");
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
* Enables an entity to be selected with mouse cursor and be highlighted.
*/
class SelectionSystem {

    // Handles mouse button click.
    constructor() {
        this.position = null;
        this.clickHandler = new ClickHandler();
    }

    // Loop update function.
    update(delta, entities, camera) {
        if (this.clickHandler.clickStarted(0)) {
            this.position = camera.screenToWorldPoint(Input.Instance.mousePosition);
        }
        if (this.clickHandler.clickEnded(0)) {
            var target = Vector.Copy(this.position);
            var found = false;
            Entity.iterate(entities, ["Transform", "Selectable"], (entity) => {
                var transform = Entity.getComponent(entity, "Transform");
                var selectable = Entity.getComponent(entity, "Selectable");
                selectable.highlight = false;
                // TODO: use transform.scale instead of threshold
                if (!found && Math.abs(transform.position.x - this.position.x) <= selectable.threshold
                    && Math.abs(transform.position.y - this.position.y) <= selectable.threshold) {
                    selectable.highlight = true;
                    target = transform.position;
                    found = true;
                }
            });
            camera.targetPosition = target;
        }
    }

    // Loop render function.
    draw(interp, ctx, entities) {
        Entity.iterate(entities, ["Transform", "Selectable"], (entity) => {
            var transform = Entity.getComponent(entity, "Transform");
            var selectable = Entity.getComponent(entity, "Selectable");
            if (selectable.highlight) {
                ctx.beginPath();
                ctx.strokeStyle = Color.Style(selectable.highlightColor);
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
class ForceFieldSystem {

    // Loop update function.
    update(delta, entities) {
        Entity.iterate(entities, ["ForceFieldSubject", "Transform", "Motion"], (entity) => {
            var subject = Entity.getComponent(entity, "ForceFieldSubject");
            var subjectTransform = Entity.getComponent(entity, "Transform");
            var subjectMotion = Entity.getComponent(entity, "Motion");
            // TODO: why is this zero? Why not entity accel?
            var totalAcceleration = Vector.Zero;
            Entity.iterate(entities, ["ForceField", "Transform"], (fieldEntity) => {
                var field = Entity.getComponent(fieldEntity, "ForceField");
                if (subject.fieldIds.includes(fieldEntity.id) && field.enabled) {
                    var fieldTransform = Entity.getComponent(fieldEntity, "Transform");
                    var vector = Vector.Substract(Vector.Copy(fieldTransform.position), subjectTransform.position);
                    // TODO: 1.5 Magic number?
                    var force = field.mass / Math.pow(vector.x * vector.x + vector.y * vector.y, 1.5);
                    Vector.Add(totalAcceleration, Vector.Multiply(vector, new Vector(force, force)));
                    if (field.destructive) {
                        if (Math.pow(subjectTransform.position.x - fieldTransform.position.x, 2) + Math.pow(subjectTransform.position.y - fieldTransform.position.y, 2) < Math.pow(field.radius, 2)) {
                            if (Entity.hasComponents(entity, ["Expiration"]))
                                Entity.getComponent(entity, "Expiration").duration = 0;
                            else
                                Entity.addComponent(entity, new ExpirationComponent(0));
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
class ParticleEmissionSystem {

    // Loop update function.
    update(delta, entities) {
        var foregroundParticles = [];
        var backgroundParticles = [];
        Entity.iterate(entities, ["ParticleEmitter", "Transform"], (entity) => {
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
                    Entity.addComponent(particle, new TransformComponent(position, new Vector(size, size)));
                    Entity.addComponent(particle, new MotionComponent(velocity, Number.MAX_SAFE_INTEGER, Vector.Zero));
                    Entity.addComponent(particle, new ShapeComponent(Color.Copy(emitter.color)));
                    //Entity.addComponent(particle, new TraceComponent(1, Color.copy(emitter.color)));
                    Entity.addComponent(particle, new ExpirationComponent(life));

                    var animation = new AnimationComponent();
                    var colorAnimation = new AnimationSequence();
                    colorAnimation.keyframes = [0, life];
                    colorAnimation.values = [Color.Copy(emitter.color), Color.Copy(emitter.colorEnd)];
                    colorAnimation.component = "Shape";
                    colorAnimation.property = "color";
                    colorAnimation.type = "Color";
                    colorAnimation.easing = "EaseInOutQuad";
                    animation.sequences.push(colorAnimation);
                    Entity.addComponent(particle, animation);

                    if (emitter.fieldIds.length > 0)
                        Entity.addComponent(particle, new ForceFieldSubjectComponent(emitter.fieldIds));

                    if (emitter.foreground)
                        foregroundParticles.push(particle);
                    else
                        backgroundParticles.push(particle);
                }
            }
        });
        for (var i = 0; i < foregroundParticles.length; i++) {
            entities.push(foregroundParticles[i]);
        }
        for (var i = 0; i < backgroundParticles.length; i++) {
            entities.unshift(backgroundParticles[i]);
        }
    }

}

/*
* Interpolates between values defined in each AnimationSequence.
*/
class AnimationSystem {

    // Loop update function.
    update(delta, entities) {
        Entity.iterate(entities, ["Animation"], (entity) => {
            var animation = Entity.getComponent(entity, "Animation");
            for (var sequence of animation.sequences) {
                if (sequence.playing) {
                    sequence.elapsed += delta;
                    var nextKeyframe = sequence.keyframe >= sequence.keyframes.length - 1 ? 0 : sequence.keyframe + 1;
                    if (sequence.elapsed < sequence.keyframes[nextKeyframe]) {
                        var perc = (sequence.elapsed - sequence.keyframes[sequence.keyframe]) / (sequence.keyframes[nextKeyframe] - sequence.keyframes[sequence.keyframe]);
                        var comp = Entity.getComponent(entity, sequence.component);
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