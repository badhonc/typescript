"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(4, 6));
console.log(add(4, 6, 3));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(8, 5));
console.log(sub(8, 5, 3));
const mul = function (num1, num2) {
    return num1 * num2;
};
console.log(mul(8, 5));
//rest parameter
function restadd(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b);
}
let numr = [2, 3, 4, 5, 6, 7, 8, 9];
console.log("Show rest parameter addition: " + restadd(1, 2, ...numr));
console.log("Show rest parameter addition: " + restadd(1, 2, ...[2, 3, 4, 5, 6, 7, 8]));
//types
function getItems(item) {
    return new Array().concat(item);
}
let concatres = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["as", "sa"]);
console.log(concatres, concatString);
