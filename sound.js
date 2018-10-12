// http://marcgg.com/blog/2016/11/01/javascript-audio/

class SoundManager {
    constructor() {
        this.context = new AudioContext();
        this.oscillator = null;
        this.gain = null;
        this.notes = [
            /*
            { note: "C1", frequency: 32.70 },
            { note: "D1", frequency: 36.71 },
            { note: "E1", frequency: 41.20 },
            { note: "F1", frequency: 43.65 },
            { note: "G1", frequency: 49.00 },
            { note: "A1", frequency: 55.00 },
            { note: "B1", frequency: 61.74 },
            */
            { note: "C2", frequency: 65.41 },
            { note: "D2", frequency: 73.42 },
            { note: "E2", frequency: 82.41 },
            //{ note: "F2", frequency: 87.31 },
            { note: "G2", frequency: 98.00 },
            { note: "A2", frequency: 110.00 },
            //{ note: "B2", frequency: 123.47 },
            { note: "C3", frequency: 130.81 },
            { note: "D3", frequency: 146.83 },
            { note: "E3", frequency: 164.81 },
            //{ note: "F3", frequency: 174.61 },
            //{ note: "G3", frequency: 196.00 },
            //{ note: "A3", frequency: 220.00},
            //{ note: "B3", frequency: 123.47 }
        ];
    }

    playSampleSound() {
        this.oscillator = this.context.createOscillator();
        this.gain = this.context.createGain();
        this.oscillator.connect(this.gain);
        this.oscillator.type = this.randomFrequencyType;
        this.oscillator.frequency.value = this.randomNote.frequency;
        this.gain.connect(this.context.destination);
        this.oscillator.start(0);
        this.gain.gain.exponentialRampToValueAtTime(0.00001, this.context.currentTime + 1.5);
    }

    get randomNote() {
        return this.notes[Random.int(0, this.notes.length)];
    }

    get randomFrequencyType() {
        var types = ["sine", "triangle"/*, "square", "sawtooth"*/];
        return types[Random.int(0, types.length)];
    }
}