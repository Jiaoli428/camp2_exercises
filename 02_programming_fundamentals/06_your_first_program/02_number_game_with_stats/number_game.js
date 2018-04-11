const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let randomNumberBetween1and100 = Math.floor(Math.random() * 100);
let i=1

function requestnumber () {
  // console.log(randomNumberBetween1and100);
    reader.question ("what is mystery number?\n", (number) => {
    if (isNaN(number)) {
      console.log("This was not a number");
      requestnumber();
      let i=1; i=i+1;
      console.log(i);
    } else if (number < 0 || number > 100){
      console.log("The number is between 1 and 100");
      requestnumber();
    } else if (number < randomNumberBetween1and100){
      console.log("Too low");
      requestnumber();
    } else if (number > randomNumberBetween1and100){
      console.log("Too high");
      requestnumber();
    } else if (parseInt(number,10) === randomNumberBetween1and100){
      console.log("You win!");
      reader.close();
    }
  });

  }

requestnumber();
