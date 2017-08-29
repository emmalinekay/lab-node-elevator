const Elevator = require('./elevator.js');
const Person = require('./person.js');



const myElevator = new Elevator();
const myPerson = new Person('Emma', 1, 6);


//starts the elevator

// console.log(myElevator);
myElevator.update();
myElevator.floorUp();
myElevator.floorDown();
myElevator.call(myPerson);
console.log('hi');







//For iteration 2: hardcode "floorUp()" and "floorDown()"
