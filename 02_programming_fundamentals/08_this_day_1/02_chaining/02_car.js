// See Sparta courses for the exercise summary
// Create an object car with four functions:
// start() will reset all the car data
// changeSpeed(speed) will change the km/h speed of the car
// drive(minutes) will make your car drive at the previously set speed for that amount of time in minutes
// showDistance() will print the distance you drove as the number of kilometers
// Take care to stock that data inside the object. For instance the code
// car.start().changeSpeed(130).drive(42).showDistance();
// should display 91 Km.

const car = {
  speed: 130,
  minutes: 42,
  counter: 0,

  start: function(){
    this.speed = 0; this.minutes = 0; this.counter = 0;
    return this;
  },
  changeSpeed: function(NewSpeed){
    this.speed = NewSpeed;
    return this;
  },
  drive: function(NewMinutes){
    this.minutes = NewMinutes;
    this.counter += this.speed * (this.minutes/60);
    return this;
  },
  showDistance: function(){
    console.log(`${this.counter} Km`);
  }
};
car.start().changeSpeed().drive().showDistance();


module.exports = car;
