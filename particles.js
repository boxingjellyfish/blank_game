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

    drawForeground(ctx, interp) {
        for (var i = 0; i < this.emitters.length; i++) {
            if (this.emitters[i].foreground)
                this.emitters[i].draw(ctx, interp);
        }
    }

    drawBackground(ctx, interp) {
        for (var i = 0; i < this.emitters.length; i++) {
            if (!this.emitters[i].foreground)
                this.emitters[i].draw(ctx, interp);
        }
    }
}

class Emitter {
    constructor(position, velocity, spread, size, color, lifespan, particleSize, emissionRate, maxParticles, particleLifespan) {
        this.id = UUID.new();
        this.position = position;
        this.velocity = velocity;
        this.spread = spread;
        this.size = size;
        this.color = color;
        this.lifespan = lifespan;
        this.emissionRate = emissionRate;
        this.particleSize = particleSize;
        this.maxParticles = maxParticles;
        this.particleLifespan = particleLifespan;
        this.particles = [];
        this.enabled = true;
        this.emissionTimer = 0;
        this.foreground = true;
    }

    update(step) {
        if (this.enabled) {
            this.addNewParticles(step);
        }
        this.moveParticles(step);
    }

    draw(ctx, interp) {
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].draw(ctx, interp);
        }
    }

    addNewParticles(step) {
        if (this.particles.length > this.maxParticles) return;
        var particlesToEmit = 0;
        this.emissionTimer += step;
        var emissionRateInv = 1 / this.emissionRate
        if (this.emissionTimer > emissionRateInv) {
            particlesToEmit = parseInt(this.emissionTimer / emissionRateInv);
            this.emissionTimer = this.emissionTimer % emissionRateInv;
        }
        for (var j = 0; j < particlesToEmit; j++) {
            var angle = this.velocity.angle() + this.spread - Random.float(0, this.spread * 2);
            var magnitude = this.velocity.mag();
            var segment = Vector.fromAngle(this.velocity.angle() + Math.PI / 2, this.size);
            var randomSegment = Vector.fromAngle(this.velocity.angle() - Math.PI / 2, Random.float(0, this.size * 2));
            segment.add(randomSegment);
            segment.add(this.position);
            var position = segment;
            var velocity = Vector.fromAngle(angle, magnitude);
            var particle = new Particle(position, velocity, new Vector(0, 0), this.color, this.particleSize, this.particleLifespan);
            this.particles.push(particle);
        }
    }

    moveParticles(step) {
        var updatedParticles = [];
        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            particle.update(step);
            particle.lifespan -= step;
            if (particle.lifespan > 0) {
                updatedParticles.push(particle);
            }
        }
        this.particles = updatedParticles;
    }

    setPosition(x, y) {
        var deltaX = x - this.position.x;
        var deltaY = y - this.position.y;
        this.position.x = x;
        this.position.y = y;
        for (var i = 0; i < this.fields.length; i++) {
            this.fields[i].position.x += deltaX;
            this.fields[i].position.y += deltaY;
        }
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
    }

    update(delta) {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }

    draw(ctx, interp) {
        ctx.fillStyle = this.color.toFillStyle();
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}