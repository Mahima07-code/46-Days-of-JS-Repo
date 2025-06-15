// ✅ Observer Pattern

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify(msg) {
    this.observers.forEach((obs) => obs(msg));
  }
}

const subject = new Subject();
subject.subscribe((data) => console.log(`Listener 1: ${data}`));
subject.subscribe((data) => console.log(`Listener 2: ${data}`));

subject.notify("Event Fired!"); 
