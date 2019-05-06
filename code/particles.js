class ParticleSystem {
    constructor() {
        this.emitters = [];
    }

    countParticles() {
        var count = 0;
        for (var i = 0; i < this.emitters.length; i++) {
            count += this.emitters[i].particles.length;
        }
        return count;
    }

    update(step) {
        for (var i = this.emitters.length - 1; i >= 0; i--) {
            var emitter = this.emitters[i];
            emitter.update(step);
            if (emitter.lifespan != null) {
                emitter.lifespan -= step;
                if (emitter.lifespan <= 0) {
                    emitter.enabled = false;
                }
            }
            if (!emitter.enabled && emitter.particles.length == 0) {
                this.emitters.splice(i, 1);
            }
        }
    }

    draw(ctx, interp, foreground) {
        for (var i = 0; i < this.emitters.length; i++) {
            if (this.emitters[i].foreground == foreground)
                this.emitters[i].draw(ctx, interp);
        }
    }
}

class Emitter {
    constructor() {
        this.id = UUID.new;
        this.position = Vector.Zero;
        this.velocity = Vector.Zero;
        this.spread = Math.PI * 2;
        this.velocityRandomness = 1;
        this.size = 1;
        this.width = 1;
        this.height = 1;
        this.color = new Color(0, 0, 0, 0);
        this.colorEnd = new Color(0, 0, 0, 0);
        this.lifespan = 1;
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

    update(step) {
        if (this.enabled) {
            this.addParticles(step);
        }
        this.moveParticles(step);
    }

    draw(ctx, interp) {
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].draw(ctx, interp);
        }
    }

    addParticles(step) {
        if (this.particles.length > this.maxParticles) return;
        var particlesToEmit = 0;
        this.emissionTimer += step;
        var emissionRateInv = 1 / this.emissionRate
        if (this.emissionTimer > emissionRateInv) {
            particlesToEmit = parseInt(this.emissionTimer / emissionRateInv);
            this.emissionTimer = this.emissionTimer % emissionRateInv;
        }
        for (var j = 0; j < particlesToEmit; j++) {
            var angle = this.velocity.angle + this.spread - Random.float(0, this.spread * 2);
            var segment = Vector.fromAngleAndMagnitude(this.velocity.angle + Math.PI / 2, this.size);
            var randomSegment = Vector.fromAngleAndMagnitude(this.velocity.angle - Math.PI / 2, Random.float(0, this.size * 2));
            segment.add(randomSegment);
            segment.add(this.position);
            var position = segment;
            var velocity = Vector.fromAngleAndMagnitude(angle, Random.float(this.velocity.magnitude, this.velocity.magnitude * this.velocityRandomness));
            var life = Random.int(this.particleLifespan, this.particleLifespan * this.particleLifespanRandomness);
            var size = Random.int(this.particleSize, this.particleSize * this.particleSizeRandomness);
            var particle = new Particle(position, velocity, Vector.Zero, this.color.copy, size, life);
            this.particles.push(particle);
        }
    }

    moveParticles(step) {
        var updatedParticles = [];
        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            particle.submitToFields(this.fields);
            particle.update(step);
            particle.lifespan -= step;
            if (particle.lifespan > 0) {
                particle.color = particle.color.blend(this.color, this.colorEnd, particle.totalLifespan, particle.lifespan);
                updatedParticles.push(particle);
            }
        }
        this.particles = updatedParticles;
    }

    move(position) {
        var delta = position.copy.substract(this.position);
        this.position = position;
        for (var i = 0; i < this.fields.length; i++) {
            this.fields[i].position.add(delta);
        }
    }

    static fromJson(json) {
        var emitter = JSON.parse(json);
        return fromObject(emitter);
    }

    static fromObject(emitter) {
        emitter.__proto__ = Emitter.prototype;
        emitter.position.__proto__ = Vector.prototype;
        emitter.velocity.__proto__ = Vector.prototype;    
        emitter.color.__proto__ = Color.prototype;
        emitter.colorEnd.__proto__ = Color.prototype;
        for(var i = 0; i < emitter.particles.length; i++) {
            emitter.particles[i].__proto__ = Particle.prototype;
            emitter.particles[i].position.__proto__ = Vector.prototype;
            emitter.particles[i].velocity.__proto__ = Vector.prototype;    
            emitter.particles[i].color.__proto__ = Color.prototype;
        }
        for(var i = 0; i < emitter.fields.length; i++) {
            emitter.fields[i].__proto__ = Field.prototype;
            emitter.fields[i].position.__proto__ = Vector.prototype;
        }
        return emitter;
    }
}

class Particle {
    constructor(position, velocity, acceleration, color, size, lifespan) {
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.color = color;
        this.size = size;
        this.lifespan = lifespan;
        this.totalLifespan = lifespan;
    }

    submitToFields(fields) {
        var totalAcceleration = Vector.Zero;
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (field.enabled) {
                var vector = field.position.copy.substract(this.position);
                var force = field.mass / Math.pow(vector.x * vector.x + vector.y * vector.y, 1.5);
                totalAcceleration.add(vector.multiply(new Vector(force, force)));
                if (field.destructive) {
                    if (Math.pow(this.position.x - field.position.x, 2) + Math.pow(this.position.y - field.position.y, 2) < Math.pow(field.radius, 2)) {
                        this.lifespan = 0;
                    }
                }
            }
        }
        this.acceleration = totalAcceleration;
    }

    update(delta) {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }

    draw(ctx, interp) {
        ctx.fillStyle = this.color.style;
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}

class Field {
    constructor() {
        this.id = UUID.new;
        this.position = Vector.Zero;
        this.mass = 1;
        this.destructive = true;
        this.radius = 1;
        this.enabled = true;
        this.visible = true;
    }

}