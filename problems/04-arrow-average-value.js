/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

; // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

const func =  arrowAvgValue = (arr) => {
let sum = 0 
for (let num of arr){
  sum += num
}
return sum / arr.length
}
console.log((func)([10, 20]))







/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  module.exports = null;
}
