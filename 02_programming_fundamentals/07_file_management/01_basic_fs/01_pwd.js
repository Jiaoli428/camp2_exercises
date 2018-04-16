const path = require("path");

// Add a function `pwd` which takes no arguments and return the current folder name we are in
//
// Example
//
// pwd() # => "/Users/john/Workspace/my_folder"

module.exports = pwd;

// let __dirname;
//
// function pwd(){
//   console.log(__dirname);
// }
//
// pwd();


function pwd(){
console.log(path.resolve("."));
}
pwd();
