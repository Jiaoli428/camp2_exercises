// See Sparta courses for the exercise summary

// Coffee Machine usage. Insert your code above this comment

// function createMachine () {

const machine = {
  litersOfCoffee: 0,
  expressoQuantity: 0.08,
  longCoffeeQuantity: 0.15,

  fillWithLitersOfCoffee: function(quantity) {
    this.litersOfCoffee += quantity;
  },

  expresso: function(){
    if(this.litersOfCoffee >= this.expressoQuantity){
      this.litersOfCoffee -= this.expressoQuantity;
      return true;
    } else {
      return false;
    }
  },

  longCoffee: function(){
    if (this.litersOfCoffee >= this.longCoffeeQuantity) {
      this.litersOfCoffee -= this.longCoffeeQuantity;
      return true;
    } else {
      return false;
    }
  },

};

// const machine = createMachine();
// comst machine2 = createMachine();

machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()); // => true
console.log(machine.litersOfCoffee); // => 9.92
console.log(machine.longCoffee()); // => true
console.log(machine.litersOfCoffee); // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee); // => 0.02
console.log(machine.expresso()); // => false

module.exports = machine;
