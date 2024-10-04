import { getObstacleEvents } from "./computer-vision";

interface AutonomousCar {
  isRunning?: boolean;
  respond: (events: Events) => void;
}

interface Events {
  [event: string]: boolean;
}

interface AutonomousCarProps {
  isRunning?: boolean;
}

class Car implements AutonomousCar {
  isRunning;
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
  }
  respond(events: Events) {
    if (!this.isRunning) {
      console.log("The car is off");
    }
  }
}

const autonomousCar = new Car({ isRunning: false });

autonomousCar.respond(getObstacleEvents());
