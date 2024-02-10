/* let arr = [1, 2, 3, 4, 5, 6, 7, 32, 22, 8, 33];

let accending = arr.sort((a, b) => a - b);
let decending = arr.sort((a, b) => b - a);
console.log("accending", accending);
console.log("decending", decending);

let max = Math.max(...arr);
let min = Math.min(...arr);
console.log("max", max);
console.log("min", min);

let checkArrayElemnent = arr.includes(23);
console.log("checkArrayElemnent", checkArrayElemnent);

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [1, 2, 3, 4, 6, 5, 7];

console.log("Comparison", arr1 === arr2);

let com =
  arr1.length === arr2.length &&
  arr1.sort().every((value, index) => value === arr2.sort()[index]);

console.log("com", com); */

for (var i = 0; i < 4; i++) {
  // global scope
  setTimeout(() => console.log(i));
}

/* for (let i = 0; i < 4; i++) {
  // block scope
  setTimeout(() => console.log(i));
}
 */