function fizzBuzz(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 15 === 0) {
      list.push("FizzBuzz");
    } else if (list[i] % 3 === 0) {
      list.push("Fizz");
    } else if (list[i] % 5 === 0) {
      list.push("Buzz");
    } else {
      list.push(list);
    }
  }
  return list;
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(fizzBuzz(list));



module.exports = fizzBuzz;
