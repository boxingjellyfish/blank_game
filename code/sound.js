// http://marcgg.com/blog/2016/11/01/javascript-audio/
// https://dev.opera.com/articles/drum-sounds-webaudio/
// https://sonoport.github.io/synthesising-sounds-webaudio.html

class SoundManager {
    constructor() {
        this.context = new AudioContext();
        this.sequencer = new Sequencer(this.context);
    }

    floorCollision() {
        this.sequencer.bass.trigger(Notes.findNote("C1"));
    }

    padCollision() {
        this.sequencer.bass.trigger(Notes.randomPentatonic(3));
    }

    wallCollision() {
        this.sequencer.bass.trigger(Notes.randomPentatonic(2));
    }

    boxCollision() {
        this.sequencer.bass.trigger(Notes.randomPentatonic(4));
    }

}

class Sequencer {
    constructor(context) {
        this.context = context;
        this.masterGain = this.context.createGain();
        this.masterGain.connect(this.context.destination);
        this.kick = new Kick(this.context, this.masterGain);
        this.snare = new Snare(this.context, this.masterGain);
        this.click = new HiHat(this.context, this.masterGain);
        this.bass = new Bass(this.context);
        this.interval = null;
        this.timeout = 115;
        this.position = 0;
    }

    start() {
        this.position = 0;
        this.triggerCurrentPosition();
        this.advancePosition();
        this.interval = setInterval(() => {
            this.triggerCurrentPosition();
            this.advancePosition();
        }, this.timeout);
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.position = 0;
    }

    advancePosition() {
        this.position++;
        if (this.position >= 32)
            this.position = 0;
    }

    triggerCurrentPosition() {
        if (this.kickTrack[this.position % this.kickTrack.length] == "X")
            this.kick.trigger();
        if (this.snareTrack[this.position % this.snareTrack.length] == "X")
            this.snare.trigger();
        if (this.clickTrack[this.position % this.clickTrack.length] == "X")
            this.click.trigger();
        if (this.bassTrack[this.position % this.bassTrack.length] != "-")
            this.bass.trigger(Notes.findNote(this.bassTrack[this.position % this.bassTrack.length]));
    }

    get kickTrack() {
        var rand = Random.Value(["X", "-"]);
        return "X---X---X---X-" + rand + "-";
    }

    get snareTrack() {
        var rand = Random.Value(["X", "-", "-", "-"]);
        return "----X-------X-------X-----" + rand + "-X---";
    }

    get clickTrack() {
        return "X-";
    }

    get bassTrack() {
        var rand1 = Random.Value(["D2", "D#2", "F2", "G2", "-", "-"]);
        var rand2 = Random.Value(["D#2", "F2", "G2"]);
        return ["C2", "-", rand1, "-", "C2", "-", rand1, "-", "C2", "-", rand1, "-", "C2", "-", rand1, "-",
        rand2, "-", "-", "-", rand2, "-", "-", "-", rand2, "-", "-", "-", rand2, "-", "-", "-"];
    }
}

class Kick {
    constructor(context, masterGain) {
        this.context = context;
        this.masterGain = masterGain;
    }

    trigger() {
        var time = this.context.currentTime;
        var osc = this.context.createOscillator();
        var osc2 = this.context.createOscillator();
        var gainOsc = this.context.createGain();
        var gainOsc2 = this.context.createGain();

        osc.type = "triangle";
        osc2.type = "sine";

        gainOsc.gain.setValueAtTime(1, time);
        gainOsc.gain.exponentialRampToValueAtTime(0.001, time + 0.5);
        gainOsc2.gain.setValueAtTime(1, time);
        gainOsc2.gain.exponentialRampToValueAtTime(0.001, time + 0.5);
        osc.frequency.setValueAtTime(120, time);
        osc.frequency.exponentialRampToValueAtTime(0.001, time + 0.5);
        osc2.frequency.setValueAtTime(50, time);

        osc.connect(gainOsc);
        osc2.connect(gainOsc2);
        gainOsc2.connect(this.masterGain);
        gainOsc.connect(this.masterGain);

        osc.start(time);
        osc2.start(time);
        osc.stop(time + 0.5);
        osc2.stop(time + 0.5);



        osc.onended = () => {
            gainOsc.disconnect();
            gainOsc = null;
        };
        osc2.onended = () => {
            gainOsc2.disconnect();
            gainOsc2 = null;
        };
    }

}

class Snare {
    constructor(context, masterGain) {
        this.context = context;
        this.masterGain = masterGain;
    }

    trigger() {
        var time = this.context.currentTime;
        var osc3 = this.context.createOscillator();
        var gainOsc3 = this.context.createGain();
        var filterGain = this.context.createGain();

        filterGain.gain.setValueAtTime(1, time);
        filterGain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

        osc3.type = "triangle";
        osc3.frequency.value = 100;

        gainOsc3.gain.value = 0;
        gainOsc3.gain.setValueAtTime(0, time);

        osc3.connect(gainOsc3);
        gainOsc3.connect(this.masterGain);

        osc3.onended = () => {
            gainOsc3.disconnect();
            gainOsc3 = null;
        };

        osc3.start(time);
        osc3.stop(time + 0.2);

        var node = this.context.createBufferSource(),
            buffer = this.context.createBuffer(1, 4096, this.context.sampleRate),
            data = buffer.getChannelData(0);

        var filter = this.context.createBiquadFilter();

        filter.type = "highpass";
        filter.frequency.setValueAtTime(100, time);
        filter.frequency.linearRampToValueAtTime(1000, time + 0.2);

        for (var i = 0; i < 4096; i++) {
            data[i] = Math.random();
        }

        node.buffer = buffer;
        node.loop = true;

        node.connect(filter);
        filter.connect(filterGain);
        filterGain.connect(this.masterGain);

        node.start(time);
        node.stop(time + 0.2);

        node.onended = () => {
            filterGain.disconnect();
            filterGain = null;
        };
    }
}

class HiHat {
    constructor(context, masterGain) {
        this.context = context;
        this.masterGain = masterGain;
    }

    trigger() {
        var time = this.context.currentTime;
        var gainOsc4 = this.context.createGain();
        var fundamental = 40;
        var ratios = [2, 3, 4.16, 5.43, 6.79, 8.21];
        var bandpass = this.context.createBiquadFilter();
        bandpass.type = "bandpass";
        bandpass.frequency.value = 10000;
        var highpass = this.context.createBiquadFilter();
        highpass.type = "highpass";
        highpass.frequency.value = 7000;
        ratios.forEach((ratio) => {
            var osc4 = this.context.createOscillator();
            osc4.type = "square";
            osc4.frequency.value = fundamental * ratio;
            osc4.connect(bandpass);
            osc4.start(time);
            osc4.stop(time + 0.05);

            osc4.onended = () => {
                if (gainOsc4) {
                    gainOsc4.disconnect();
                    gainOsc4 = null;
                }
            };
        });
        gainOsc4.gain.setValueAtTime(1, time);
        gainOsc4.gain.exponentialRampToValueAtTime(0.01, time + 0.05);
        bandpass.connect(highpass);
        highpass.connect(gainOsc4);


        gainOsc4.connect(this.masterGain);
    }
}

class Bass {
    constructor(context) {
        this.context = context;
        this.oscillator = null;
        this.gain = null;
    }

    trigger(note) {
        var time = this.context.currentTime;
        this.oscillator = this.context.createOscillator();
        this.gain = this.context.createGain();
        this.oscillator.connect(this.gain);
        this.gain.connect(this.context.destination)
        this.oscillator.type = "triangle";
        this.oscillator.frequency.setValueAtTime(note.frequency, time);
        this.gain.gain.setValueAtTime(1, time);
        this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.25);
        this.oscillator.start(time);
        this.oscillator.stop(time + 0.25);
    }
}

class Notes {
    static randomNote(octave) {
        return Notes.notes[Random.Int(octave * 7 - 7, octave * 7)];
    }

    static randomPentatonic(octave) {
        var scale = ["A" + octave, "C" + octave, "D" + octave, "E" + octave, "G" + octave];
        return Notes.findNote(Random.Value(scale));
    }

    static findNote(note) {
        for (var i = 0; i < Notes.notes.length; i++) {
            if (Notes.notes[i].note == note)
                return Notes.notes[i];
        }
        return Notes.notes[0];
    }

    static get notes() {
        return [
            { note: "C0", frequency: 16.35 },
            { note: "C#0", frequency: 17.32 },
            { note: "D0", frequency: 18.35 },
            { note: "D#0", frequency: 19.45 },
            { note: "E0", frequency: 20.60 },
            { note: "F0", frequency: 21.83 },
            { note: "F#0", frequency: 23.12 },
            { note: "G0", frequency: 24.50 },
            { note: "G#0", frequency: 25.96 },
            { note: "A0", frequency: 27.50 },
            { note: "A#0", frequency: 29.14 },
            { note: "B0", frequency: 30.87 },
            { note: "C1", frequency: 32.70 },
            { note: "C#1", frequency: 34.65 },
            { note: "D1", frequency: 36.71 },
            { note: "D#1", frequency: 38.89 },
            { note: "E1", frequency: 41.20 },
            { note: "F1", frequency: 43.65 },
            { note: "F#1", frequency: 46.25 },
            { note: "G1", frequency: 49.00 },
            { note: "G#1", frequency: 51.91 },
            { note: "A1", frequency: 55.00 },
            { note: "A#1", frequency: 58.27 },
            { note: "B1", frequency: 61.74 },
            { note: "C2", frequency: 65.41 },
            { note: "C#2", frequency: 69.30 },
            { note: "D2", frequency: 73.42 },
            { note: "D#2", frequency: 77.78 },
            { note: "E2", frequency: 82.41 },
            { note: "F2", frequency: 87.31 },
            { note: "F#2", frequency: 92.50 },
            { note: "G2", frequency: 98.00 },
            { note: "G#2", frequency: 103.83 },
            { note: "A2", frequency: 110.00 },
            { note: "A#2", frequency: 116.54 },
            { note: "B2", frequency: 123.47 },
            { note: "C3", frequency: 130.81 },
            { note: "C#3", frequency: 138.59 },
            { note: "D3", frequency: 146.83 },
            { note: "D#3", frequency: 155.56 },
            { note: "E3", frequency: 164.81 },
            { note: "F3", frequency: 174.61 },
            { note: "F#3", frequency: 185.00 },
            { note: "G3", frequency: 196.00 },
            { note: "G#3", frequency: 207.65 },
            { note: "A3", frequency: 220.00 },
            { note: "A#3", frequency: 233.08 },
            { note: "B3", frequency: 246.94 },
            { note: "C4", frequency: 261.63 },
            { note: "C#4", frequency: 277.18 },
            { note: "D4", frequency: 293.66 },
            { note: "D#4", frequency: 311.13 },
            { note: "E4", frequency: 329.63 },
            { note: "F4", frequency: 349.23 },
            { note: "F#4", frequency: 369.99 },
            { note: "G4", frequency: 392.00 },
            { note: "G#4", frequency: 415.30 },
            { note: "A4", frequency: 440.00 },
            { note: "A#4", frequency: 466.16 },
            { note: "B4", frequency: 493.88 },
            { note: "C5", frequency: 523.25 },
            { note: "C#5", frequency: 554.37 },
            { note: "D5", frequency: 587.33 },
            { note: "D#5", frequency: 622.25 },
            { note: "E5", frequency: 659.25 },
            { note: "F5", frequency: 698.46 },
            { note: "F#5", frequency: 739.99 },
            { note: "G5", frequency: 783.99 },
            { note: "G#5", frequency: 830.61 },
            { note: "A5", frequency: 880.00 },
            { note: "A#5", frequency: 932.33 },
            { note: "B5", frequency: 987.77 },
            { note: "C6", frequency: 1046.50 },
            { note: "C#6", frequency: 1108.73 },
            { note: "D6", frequency: 1174.66 },
            { note: "D#6", frequency: 1244.51 },
            { note: "E6", frequency: 1318.51 },
            { note: "F6", frequency: 1396.91 },
            { note: "F#6", frequency: 1479.98 },
            { note: "G6", frequency: 1567.98 },
            { note: "G#6", frequency: 1661.22 },
            { note: "A6", frequency: 1760.00 },
            { note: "A#6", frequency: 1864.66 },
            { note: "B6", frequency: 1975.53 },
            { note: "C7", frequency: 2093.00 },
            { note: "C#7", frequency: 2217.46 },
            { note: "D7", frequency: 2349.32 },
            { note: "D#7", frequency: 2489.02 },
            { note: "E7", frequency: 2637.02 },
            { note: "F7", frequency: 2793.83 },
            { note: "F#7", frequency: 2959.96 },
            { note: "G7", frequency: 3135.96 },
            { note: "G#7", frequency: 3322.44 },
            { note: "A7", frequency: 3520.00 },
            { note: "A#7", frequency: 3729.31 },
            { note: "B7", frequency: 3951.07 },
            { note: "C8", frequency: 4186.01 },
            { note: "C#8", frequency: 4434.92 },
            { note: "D8", frequency: 4698.63 },
            { note: "D#8", frequency: 4978.03 },
            { note: "E8", frequency: 5274.04 },
            { note: "F8", frequency: 5587.65 },
            { note: "F#8", frequency: 5919.91 },
            { note: "G8", frequency: 6271.93 },
            { note: "G#8", frequency: 6644.88 },
            { note: "A8", frequency: 7040.00 },
            { note: "A#8", frequency: 7458.62 },
            { note: "B8", frequency: 7902.13 }
        ];
    }
}