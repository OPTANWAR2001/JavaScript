let arr = [11, 2, 15, 3, 1, 6, 3, 9];

//! Find Max using for loop
let maxNum = 0;

for (let i = 0; i <= arr.length - 1; i++) {
  if (maxNum < arr[i]) {
    maxNum = arr[i];
  }
}

console.log("maxNum", maxNum);

//! Using Sort Method

let newArr = arr.sort((a, b) => a - b);
console.log("newArr", newArr[arr.length - 1]);

//Decending
let newArrs = arr.sort((a, b) => b - a);
console.log("newArrsss", newArrs[0]);

// ! using Math.max()

let maxNumber = Math.max(...arr);

console.log("maxNumber", maxNumber);
