// ## Decreasing Iteration on arrays
//
// -  Using `length`, write on `stdout` each values of the `litteralDigits` array, descending.

let litteralDigits = ["zero","one","two","three","four","five","six","seven","eight","nine"];
for (let i= litteralDigits.length-1;i>=0; i--){
  console.log(litteralDigits[i]);
}
