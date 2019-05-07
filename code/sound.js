// http://marcgg.com/blog/2016/11/01/javascript-audio/

class SoundManager {
    constructor() {
        this.context = new AudioContext();
        this.oscillator = null;
        this.gain = null;
        this.notes = [
            { note: "C1", frequency: 32.70 },
            { note: "D1", frequency: 36.71 },
            { note: "E1", frequency: 41.20 },
            { note: "F1", frequency: 43.65 },
            { note: "G1", frequency: 49.00 },
            { note: "A1", frequency: 55.00 },
            { note: "B1", frequency: 61.74 },
            { note: "C2", frequency: 65.41 },
            { note: "D2", frequency: 73.42 },
            { note: "E2", frequency: 82.41 },
            { note: "F2", frequency: 87.31 },
            { note: "G2", frequency: 98.00 },
            { note: "A2", frequency: 110.00 },
            { note: "B2", frequency: 123.47 },
            { note: "C3", frequency: 130.81 },
            { note: "D3", frequency: 146.83 },
            { note: "E3", frequency: 164.81 },
            { note: "F3", frequency: 174.61 },
            { note: "G3", frequency: 196.00 },
            { note: "A3", frequency: 220.00 },
            { note: "B3", frequency: 246.94 },
            { note: "C4", frequency: 261.63 },
            { note: "D4", frequency: 293.66 },
            { note: "E4", frequency: 329.63 },
            { note: "F4", frequency: 349.23 },
            { note: "G4", frequency: 392.00 },
            { note: "A4", frequency: 440.00 },
            { note: "B4", frequency: 493.88 },
            { note: "C5", frequency: 523.25 },
            { note: "D5", frequency: 587.33 },
            { note: "E5", frequency: 659.25 },
            { note: "F5", frequency: 698.46 },
            { note: "G5", frequency: 783.99 },
            { note: "A5", frequency: 880.00 },
            { note: "B5", frequency: 987.77 },
        ];
        this.musicTimer1 = null;        
        this.musicTimer2 = null;
    }


     startMusic() {
        this.boxCollision();
        this.musicTimer1 = setInterval(function() {
            this.boxCollision();
        }, 250);

        this.wallCollision();
        this.musicTimer2 = setInterval(function() {
            this.wallCollision();
        }, 1000);
    }

    stopMusic() {
        if(this.musicTimer1) {
            clearInterval(this.musicTimer1);
        }
        if(this.musicTimer2) {
            clearInterval(this.musicTimer2);
        }
    }

    floorCollision() {
        this.oscillator = this.context.createOscillator();
        this.gain = this.context.createGain();
        this.gain.gain.value = 0.2;
        this.oscillator.connect(this.gain);
        this.oscillator.type = "sawtooth";
        this.oscillator.frequency.value = this.findNote("C1").frequency;
        this.gain.connect(this.context.destination);
        this.oscillator.start(0);
        this.gain.gain.exponentialRampToValueAtTime(0.00001, this.context.currentTime + 1.5);
    }

    padCollision() {
        this.collisionSound(3);
    }

    wallCollision() {
        this.collisionSound(2);
    }

    boxCollision() {
        this.collisionSound(4);
    }

    collisionSound(octave) {
        this.oscillator = this.context.createOscillator();
        this.gain = this.context.createGain();
        this.gain.gain.value = 0.5;
        this.oscillator.connect(this.gain);
        this.oscillator.type = this.randomFrequencyType;
        this.oscillator.frequency.value = this.randomPentatonic(octave).frequency;
        this.gain.connect(this.context.destination);
        this.oscillator.start(0);
        this.gain.gain.exponentialRampToValueAtTime(0.00001, this.context.currentTime + 1.5);
    }

    randomNote(octave) {
        return this.notes[Random.int(octave * 7 - 7, octave * 7)];
    }

    randomPentatonic(octave) {
        var scale = ["A" + octave, "C" + octave, "D" + octave, "E" + octave, "G" + octave];
        return this.findNote(Random.value(scale));
    }

    findNote(note) {
        for (var i = 0; i < this.notes.length; i++) {
            if (this.notes[i].note == note)
                return this.notes[i];
        }
        return this.notes[0];
    }

    get randomFrequencyType() {
        var types = ["sine", "triangle"/*, "square", "sawtooth"*/];
        return types[Random.int(0, types.length)];
    }
}