class Elevator {
  constructor(){
    this.floor      = 0; //floor where elevator currently is
    this.MAXFLOOR   = 10; //top floor of the building (max value of "this.floor")
    this.direction = 'up'; //current diraction that the elevator is moving in. ('up' or 'down')
    this.requests   = []; //array of numbers of the floors which elevator must stop. can be people waiting for elevator or those on the elevator
    this.waitingList = []; //array of person objects that represent people waiting to be picked up
    this.passengers = []; //array of person objects that represents people on the elevator waiting to be dropped off
  }

  start() {  //begin a set interval that calls "update()" every second
    this.cow = setInterval(() => {
      this.update();
    }, 1000);
  }
  stop() { //cancel set interval by start.
    clearInterval(this.cow);
  }

  update() { //for now, will only call "log()"
      this.log();
  }

  log() {
    //displays the direction and current floor
    var direction = `direction: ${this.direction} | floor: ${this.floor}`;
    console.log(direction);
  }

  _passengersLeave(myPerson) {
      this.passengers.push(myPerson);
      this.requests.push(myPerson.destinationFloor);

      let indexOfPerson = this.passengers.indexOf(myPerson);
      if (indexOfPerson > -1) {
        console.log(`${myPerson.name} has left the elevator`);
        this.passengers.splice(indexOfPerson, 1);
      }
  }

  _passengersEnter(myPerson) {
      this.passengers.forEach ()
  }

  floorUp() {
    if (this.floor < 10) {
      this.floor +=1;
      this.log();
    } else {
    this.log();
    }
  }

  floorDown() {
    if (this.floor >= 0) {
      this.floor -=1;
      this.log();
    } else {
    this.log();
    }
  }

  call(myPerson) {
    this.waitingList.push(myPerson);
    this.requests.push(myPerson.originFloor);
  }


}

module.exports = Elevator;
