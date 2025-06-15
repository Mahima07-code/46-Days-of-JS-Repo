// ✅ Command Pattern

class Light {
  turnOn() {
    console.log("Light is ON");
  }
  turnOff() {
    console.log("Light is OFF");
  }
}

function LightOnCommand(light) {
  return function () {
    light.turnOn();
  };
}

const livingRoomLight = new Light();
const switchOn = LightOnCommand(livingRoomLight);
switchOn(); // Light is ON
