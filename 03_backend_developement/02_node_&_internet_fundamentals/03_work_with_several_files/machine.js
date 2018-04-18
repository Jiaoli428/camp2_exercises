const request = require("./container");

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
