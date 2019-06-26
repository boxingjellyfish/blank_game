/*
* Holds all data for a scene. Implements game loop functions.
*/
class Scene {
    constructor() {
        // Scene data
        this.runUpdate = true;
        this.showDebug = false;
        this.worldSize = new Vector(5000, 2400);
        this.viewportSize = Vector.Zero;

        // Main loop
        this.loop = new Loop(this);

        // Canvas
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");

        // Entity manager
        this.entityManager = new EntityManager();

        // Camera        
        this.camera = new Camera(this);

        // Input
        this.input = new Input();
        this.keyHandler = new KeyHandler();

        // Sound
        this.soundManager = new SoundManager();

        // Systems
        this.movementSystem = new MovementSystem(this);
        this.shapeRendererSystem = new ShapeRendererSystem(this);
        this.traceRendererSystem = new TraceRendererSystem(this);
        this.selectionSystem = new SelectionSystem(this);
        this.selectedHighlightSystem = new SelectedHighlightSystem(this);
        this.expirationSystem = new ExpirationSystem(this);
        this.particleEmissionSystem = new ParticleEmissionSystem(this);
        this.forceFieldSystem = new ForceFieldSystem(this);
        this.animationSystem = new AnimationSystem(this);
        this.navigationSystem = new NavigationSystem(this);
        this.navigationRecipientSystem = new NavigationRecipientSystem(this);
        this.roomGeneratorSystem = new RoomGeneratorSystem(this);

        // Events
        this.eventManager = new EventManager();
        this.eventManager.listeners.push(this.roomGeneratorSystem);

        // Pause when focus lost
        window.addEventListener("visibilitychange", () => {
            this.toggleLoop();
        });

        // Resize
        window.addEventListener("resize", () => {
            this.resize();
        }, false);
        this.resize();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.viewportSize = new Vector(window.innerWidth, window.innerHeight);
    }

    toggleLoop() {
        if (this.loop.isRunning()) {
            this.loop.stop();
            //this.soundManager.sequencer.stop();
        }
        else {
            this.loop.start();
            //this.soundManager.sequencer.start();
        }
    }

    // Loop update function.
    update(delta) {

        // Save Entities in local storage
        this.keyHandler.keyStarted("KeyC");
        if (this.keyHandler.keyEnded("KeyC")) {
            this.entityManager.save();
        }

        // Load entities from local storage
        this.keyHandler.keyStarted("KeyV");
        if (this.keyHandler.keyEnded("KeyV")) {
            this.entityManager.load();
        }

        // Randomly change entities acceleration angle
        this.keyHandler.keyStarted("NumpadDivide");
        if (this.keyHandler.keyEnded("NumpadDivide")) {
            this.entityManager.iterate(["Motion"], (entity) => {
                Vector.Rotate(Entity.GetComponent(entity, "Motion").acceleration, Random.Float(0, Math.PI * 2));
            });
        }

        // Play/Pause Gameplay
        this.keyHandler.keyStarted("Space")
        if (this.keyHandler.keyEnded("Space")) {
            this.runUpdate = !this.runUpdate;
            // if (this.runUpdate)
            //     this.soundManager.sequencer.start();
            // else
            //     this.soundManager.sequencer.stop();
        }

        // Show Debug
        this.keyHandler.keyStarted("KeyQ");
        if (this.keyHandler.keyEnded("KeyQ")) {
            this.showDebug = !this.showDebug;
        }

        // Generate random room
        this.keyHandler.keyStarted("KeyR");
        if (this.keyHandler.keyEnded("KeyR")) {
            this.eventManager.register(new Event("GenerateRoom"));
        }

        // Reload Demo 1
        this.keyHandler.keyStarted("Digit1");
        if (this.keyHandler.keyEnded("Digit1")) {
            this.entityManager.clear();
            this.demo1();
        }

        // Reload Demo 2
        this.keyHandler.keyStarted("Digit2");
        if (this.keyHandler.keyEnded("Digit2")) {
            this.entityManager.clear();
            this.demo2();
        }

        // Reload Demo 3
        this.keyHandler.keyStarted("Digit3");
        if (this.keyHandler.keyEnded("Digit3")) {
            this.entityManager.clear();
            this.demo3();
        }

        // Reload Demo 4
        this.keyHandler.keyStarted("Digit4");
        if (this.keyHandler.keyEnded("Digit4")) {
            this.entityManager.clear();
            this.demo4();
        }

        // Reload Demo 5
        this.keyHandler.keyStarted("Digit5");
        if (this.keyHandler.keyEnded("Digit5")) {
            this.entityManager.clear();
            this.demo5();
        }

        // Allow selection even on paused game
        this.navigationRecipientSystem.update(delta);
        this.selectionSystem.update(delta);

        // Allow camera movement even on paused game
        this.camera.update(delta);

        // Systems to update when game is running
        if (this.runUpdate) {
            this.eventManager.dispatch(); // should run outside?
            this.expirationSystem.update(delta);
            this.navigationSystem.update(delta);
            this.movementSystem.update(delta);
            this.forceFieldSystem.update(delta);
            this.traceRendererSystem.update(delta);
            this.particleEmissionSystem.update(delta);
            this.animationSystem.update(delta);
        }

    }

    // Loop render function.
    draw(interp) {

        // Clear canvas and save 
        this.ctx.clearRect(0, 0, this.viewportSize.x, this.viewportSize.y);
        this.ctx.save();

        // Zoom camera according to scale
        this.ctx.scale(this.camera.zoom, this.camera.zoom);

        // Center world in canvas
        this.ctx.translate(this.viewportSize.x / (2 * this.camera.zoom), this.viewportSize.y / (2 * this.camera.zoom));

        // Scroll camera center
        this.ctx.translate(-1 * this.camera.position.x, -1 * this.camera.position.y);

        // Debug
        this.drawDebugBackground();

        // Systems with render logic
        this.traceRendererSystem.draw(interp, this.ctx);
        this.shapeRendererSystem.draw(interp, this.ctx);
        this.selectedHighlightSystem.draw(interp, this.ctx);

        // Restore to draw relative to window edges
        this.ctx.restore();

        // Draw Fog        
        this.camera.draw(interp, this.ctx);

        // Debug
        this.drawDebugForeground();

        // Draw cursor
        Input.Instance.draw(interp, this.ctx);

    }

    // Loop begin function.
    begin(timestamp, delta) {

    }

    // Loop end function.
    end(fps, panic) {

    }

    // Draws debug grid in backgorund
    drawDebugBackground() {
        if (this.showDebug) {
            // Reference grid
            var axisStyle = Color.Style(new Color(0, 100, 50, 0.5));
            var guideStyle = Color.Style(new Color(0, 0, 100, 0.2));
            for (var i = this.worldSize.x / -2; i < this.worldSize.x / 2; i += 100) {
                this.ctx.beginPath();
                this.ctx.strokeStyle = i == 0 ? axisStyle : guideStyle;
                this.ctx.lineWidth = 1;
                this.ctx.moveTo(i, this.worldSize.y / -2);
                this.ctx.lineTo(i, this.worldSize.y / 2);
                this.ctx.stroke();
            }
            for (var i = this.worldSize.y / -2; i < this.worldSize.y / 2; i += 100) {
                this.ctx.beginPath();
                this.ctx.strokeStyle = i == 0 ? axisStyle : guideStyle;
                this.ctx.lineWidth = 1;
                this.ctx.moveTo(this.worldSize.x / -2, i);
                this.ctx.lineTo(this.worldSize.x / 2, i);
                this.ctx.stroke();
            }

            // World edges
            this.ctx.beginPath();
            this.ctx.strokeStyle = Color.Style(Color.White);
            this.ctx.lineWidth = 4;
            this.ctx.rect(0 - Math.round(this.worldSize.x / 2), 0 - Math.round(this.worldSize.y / 2), this.worldSize.x, this.worldSize.y);
            this.ctx.stroke();
        }
    }

    // Draws debug data in foreground
    drawDebugForeground() {
        if (this.showDebug) {
            var x = 15;
            var y = 15;
            this.ctx.fillStyle = Color.Style(Color.White50);
            this.ctx.font = "12px monospace";
            this.ctx.textBaseline = "top";
            this.ctx.textAlign = "right";
            this.ctx.fillText(Math.round(this.loop.getFPS()) + " FPS", this.viewportSize.x - 15, 15);

            var text = this.camera.toString();
            text += "\n" + "Entities count:   " + this.entityManager.count();
            this.ctx.fillStyle = Color.Style(Color.White50);
            this.ctx.font = "12px monospace";
            this.ctx.textBaseline = "top";
            this.ctx.textAlign = "left";
            var lines = text.split("\n");
            for (var i = 0; i < lines.length; i++) {
                this.ctx.fillText(lines[i], x, y);
                y += 15;
            }
        }
    }

    // Demo 1 data
    demo1() {
        this.worldSize = new Vector(5000, 2400);
        this.entityManager.clear();

        // Random entities
        for (var i = 0; i < 50; i++) {
            var entity = new Entity();
            var scale = new Vector(Random.Int(5, 50), Random.Int(5, 50));
            var position = new Vector(Random.Float(-100, 100), Random.Float(-100, 100));
            Entity.AddComponent(entity, new TransformComponent(position, scale));
            var velocity = new Vector(Random.Float(-0.1, 0.1), Random.Float(-0.1, 0.1));
            var maxVelocity = Random.Float(0.05, 1.5);
            var acceleration = new Vector(Random.Float(-0.0001, 0.0001), Random.Float(-0.0001, 0.0001));
            Entity.AddComponent(entity, new MotionComponent(velocity, maxVelocity, acceleration));
            var color = new Color(Random.Int(0, 360), 75, 60, 1);
            Entity.AddComponent(entity, new ShapeComponent(color, Random.Value([ShapeComponent.Rectangle, ShapeComponent.Ellipse, ShapeComponent.Triangle])));
            //Entity.addComponent(entity, new TraceComponent(2, color));
            Entity.AddComponent(entity, new SelectableComponent());

            var animation = new AnimationComponent();
            var colorAnimation = new AnimationSequence();
            colorAnimation.keyframes = [0, Random.Int(1000, 2000), Random.Int(3000, 4000)];
            colorAnimation.values = [Color.Copy(color), Color.Hue(Color.Copy(color), 0), Color.Copy(color)];
            colorAnimation.component = "Shape";
            colorAnimation.property = "color";
            colorAnimation.type = "Color";
            colorAnimation.easing = "EaseInOutQuad";
            animation.sequences.push(colorAnimation);
            var scaleAnimation = new AnimationSequence();
            scaleAnimation.keyframes = [0, Random.Int(200, 500), Random.Int(800, 1000), Random.Int(1200, 1500)];
            scaleAnimation.values = [Vector.Copy(scale), Vector.Multiply(Vector.Copy(scale), new Vector(2, 2)), Vector.Zero, Vector.Copy(scale)];
            scaleAnimation.component = "Transform";
            scaleAnimation.property = "scale";
            scaleAnimation.type = "Vector";
            scaleAnimation.easing = "EaseInOutQuad";
            animation.sequences.push(scaleAnimation);
            Entity.AddComponent(entity, animation);

            this.entityManager.add(entity);
        }

        // Emitter 
        var emitterEntity = new Entity();
        var emitterPosition = new Vector(Random.Float(-100, 100), Random.Float(-100, 100));
        Entity.AddComponent(emitterEntity, new TransformComponent(emitterPosition));
        var emitterComponent = new ParticleEmitterComponent();
        emitterComponent.particleVelocity = new Vector(0.05, 0.05);
        emitterComponent.velocityRandomness = 1.5;
        emitterComponent.spread = Math.PI * 2;
        emitterComponent.size = 1;
        emitterComponent.color = new Color(100, 100, 90, 1);
        emitterComponent.colorEnd = new Color(100, 100, 0, 0);
        emitterComponent.particleSize = 2;
        emitterComponent.particleSizeRandomness = 2;
        emitterComponent.emissionRate = 0.05;
        emitterComponent.particleLifespan = 3000;
        emitterComponent.particleLifespanRandomness = 1.5;
        emitterComponent.foreground = true;
        Entity.AddComponent(emitterEntity, emitterComponent);
        var emitterVelocity = new Vector(Random.Float(-0.1, 0.1), Random.Float(-0.1, 0.1));
        var emitterMaxVelocity = Random.Float(0.05, 0.5);
        var emitterAcceleration = new Vector(Random.Float(-0.0001, 0.0001), Random.Float(-0.0001, 0.0001));
        Entity.AddComponent(emitterEntity, new MotionComponent(emitterVelocity, emitterMaxVelocity, emitterAcceleration));
        Entity.AddComponent(emitterEntity, new SelectableComponent());
        this.entityManager.add(emitterEntity);

        var fieldEntity = new Entity();
        Entity.AddComponent(fieldEntity, new TransformComponent(new Vector(emitterPosition.x, emitterPosition.y - 100)));
        var fieldComponent = new ForceFieldComponent();
        fieldComponent.mass = 3;
        fieldComponent.destructive = true;
        fieldComponent.radius = 50;
        fieldComponent.enabled = true;
        Entity.AddComponent(fieldEntity, fieldComponent);
        Entity.AddComponent(fieldEntity, new MotionComponent(Vector.Copy(emitterVelocity), emitterMaxVelocity, Vector.Copy(emitterAcceleration)));
        Entity.AddComponent(fieldEntity, new SelectableComponent());
        this.entityManager.add(fieldEntity);

        emitterComponent.fieldIds.push(fieldEntity.id);
    }

    // Demo 2 data
    demo2() {
        this.worldSize = new Vector(600, 600);
        this.entityManager.clear();
        this.entityManager.addAll(Data.Intro);
        //this.camera.fogCenter = new Vector(200,200);
    }

    // Demo 3 data
    demo3() {
        this.worldSize = new Vector(5000, 5000);
        this.entityManager.clear();
        this.entityManager.addAll([
            {
                "id": Random.UUID(),
                "components": {
                    "Transform": {
                        "name": "Transform",
                        "position": { "x": -200, "y": -200 },
                        "scale": { "x": 50, "y": 50 },
                        "angle": 0
                    },
                    "Shape": {
                        "name": "Shape",
                        "color": { "h": 0, "s": 100, "l": 50, "a": 1 },
                        "outlineColor": { "h": 0, "s": 0, "l": 0, "a": 1 },
                        "outlineWidth": 5,
                        "type": "Rectangle"
                    },
                    "Motion": {
                        "name": "Motion",
                        "velocity": { "x": 0, "y": 0 },
                        "maxVelocity": 0.5,
                        "acceleration": { "x": 0, "y": 0 },
                        "angularVelocity": 0,
                        "angularAcceleration": 0,
                        "wraparound": true
                    },
                    "Navigation": {
                        "name": "Navigation",
                        "location": { "x": 500, "y": 100 },
                        "slowFactor": 0.01,
                        "threshold": 5
                    },
                    "Selectable": {
                        "name": "Selectable",
                        "highlight": false,
                        "highlightColor": { "h": 0, "s": 100, "l": 100, "a": 1 }
                    },
                    "NavigationRecipient": {
                        "name": "NavigationRecipient"
                    }
                }
            },
            {
                "id": Random.UUID(),
                "components": {
                    "Transform": {
                        "name": "Transform",
                        "position": { "x": -200, "y": 200 },
                        "scale": { "x": 50, "y": 50 },
                        "angle": 0
                    },
                    "Shape": {
                        "name": "Shape",
                        "color": { "h": 50, "s": 100, "l": 50, "a": 1 },
                        "outlineColor": { "h": 0, "s": 0, "l": 0, "a": 1 },
                        "outlineWidth": 5,
                        "type": "Rectangle"
                    },
                    "Selectable": {
                        "name": "Selectable",
                        "highlight": false,
                        "highlightColor": { "h": 0, "s": 100, "l": 100, "a": 1 }
                    },
                    "NavigationRecipient": {
                        "name": "NavigationRecipient"
                    }
                }
            },
            {
                "id": Random.UUID(),
                "components": {
                    "Transform": {
                        "name": "Transform",
                        "position": { "x": 200, "y": -200 },
                        "scale": { "x": 50, "y": 50 },
                        "angle": 0
                    },
                    "Shape": {
                        "name": "Shape",
                        "color": { "h": 160, "s": 100, "l": 50, "a": 1 },
                        "outlineColor": { "h": 0, "s": 0, "l": 0, "a": 1 },
                        "outlineWidth": 5,
                        "type": "Rectangle"
                    },
                    "Selectable": {
                        "name": "Selectable",
                        "highlight": false,
                        "highlightColor": { "h": 0, "s": 100, "l": 100, "a": 1 }
                    }
                }
            },
            {
                "id": Random.UUID(),
                "components": {
                    "Transform": {
                        "name": "Transform",
                        "position": { "x": 200, "y": 200 },
                        "scale": { "x": 50, "y": 50 },
                        "angle": 0
                    },
                    "Shape": {
                        "name": "Shape",
                        "color": { "h": 270, "s": 100, "l": 50, "a": 1 },
                        "outlineColor": { "h": 0, "s": 0, "l": 0, "a": 1 },
                        "outlineWidth": 5,
                        "type": "Rectangle"
                    }
                }
            }
        ]);
    }

    // Demo 4 data
    demo4() {
        this.worldSize = new Vector(1600, 1600);
        this.entityManager.clear();
        this.eventManager.register(new Event("GenerateRoom"));
    }

    // Demo 5 data
    demo5() {
        this.worldSize = new Vector(1200, 800);
        this.entityManager.clear();
    }
}

var scene = new Scene();
scene.demo4();
scene.toggleLoop();