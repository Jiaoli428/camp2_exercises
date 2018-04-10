function requestnumber () {

  let mysterynumber = Math.floor(Math.random() * 100);
  const readline = require("readline");
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

    reader.question ("what is mystery number?\n", (number) => {
    if (isNaN(number)){
      console.log("This was not a number\n");
      requestnumber();
    } else if (number < 0 || number > 100){
      console.log("The number is between 1 and 100\n");
      requestnumber();
    } else if (number < mysterynumber){
      console.log("Too low\n");
      requestnumber();
    } else if (number > mysterynumber){
      console.log("Too high\n");
      requestnumber();
    } else if (parseInt(number,10) === mysterynumber){
      console.log("You win!");
      reader.close();
    }
  });
}

requestnumber();


// 1/ generate a random nb (1-100); => make it work!!!
// 2/ how to get an input? number, string; => make it correct!!!
// 3/ and loop until win condition;
// 4/ make it works with the rules
