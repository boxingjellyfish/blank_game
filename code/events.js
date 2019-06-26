/*
* Handles event queue.
*/
class EventManager {
    constructor() {
        // shift - push
        this.queue = [];
        this.listeners = [];
    }

    register(event) {
        this.queue.push(event);
    }

    dispatch() {
        while (this.queue.length > 0) {
            var event = this.queue.shift();
            for (var i = 0; i < this.listeners.length; i++) {
                this.listeners[i].handle(event);
            }
        }
    }
}

/*
* Basic Event
*/
class Event {
    constructor(name, data = {}) {
        this.id = Random.UUID();
        this.name = name;
        this.data = data;
    }
}