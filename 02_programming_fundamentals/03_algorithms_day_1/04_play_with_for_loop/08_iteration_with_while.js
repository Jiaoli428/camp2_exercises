// ## Iteration on arrays using while
//
// -  Create an array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each values of the table.
let i=0;
let litteralDigits = ["zero","one","two","three","four","five","six","seven","eight","nine"];
while (i<litteralDigits.length){
  console.log(litteralDigits[i]);
  i++;
}
