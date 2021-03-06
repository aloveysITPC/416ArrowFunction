import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

function square(x) {
  return x * x;
}

// can also be written  - using an anonymous function
var numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.map(function (x) {
  return x * x;
});

console.log(newNumbers);

// can also be written
const sqaureNumbers = numbers.map((x) => {
  return x * x;
});

console.log(sqaureNumbers);

// can also be written
const timesNumbers = numbers.map((x) => {
  return x * x;
});

console.log(timesNumbers);

//within a single statement can also be written

const simpleSquare = numbers.map((x) => x * x);
console.log(simpleSquare);

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
