// 1. Filter Method

let arr = [1, 2, 3, 4, 5, 6, 2, 3];

function filterArray(arr) {
  const filterArr = arr.filter((value, index) => arr.indexOf(value) === index);

  return filterArr;
}

console.log("filterArray", filterArray(arr));

// Get Removed Item

const getFilterItem = arr.filter(
  (value, index) => arr.indexOf(value) !== index
);

console.log("Removed Item", getFilterItem);

// 2 using the Set

let arr2 = [1, 2, 3, 4, 5, 3, 2];

const uniqeArr = [...new Set(arr2)];

console.log("uniqeArr", uniqeArr);

//3 using forEach method

let arr3 = [1, 2, 3, 4, 5, 6, 4, 3, 7, 8];

function foruniqe(arr) {
  let uniqe = [];

  arr.forEach((item) => {
    if (!uniqe.includes(item)) {
      uniqe.push(item);
    }
  });
  return uniqe;
}

console.log("foruniqe(arr):", foruniqe(arr3));

//4  For loop

let arr4 = ["a", "b", "c", "a", "e", "f", "b", "c"];

let myFun = (arr) => {
  let myUniqe = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (!myUniqe.includes(arr[i])) {
      myUniqe.push(arr[i]);
    }
  }

  console.log("myArray NEw: ", myUniqe);
};

myFun(arr4);

// Reverse a Array

let arr5 = [1, 2, 4, 5, 6];

console.log("Reverse Array : ", arr5.reverse());

// Find maximum Product

let descending = arr5.sort((a, b) => b - a);

let maxproduct = descending[0] * descending[1];

console.log("maxproduct", maxproduct);

// Reverse a String

let str = "madam";

let resStr = str.split("").reverse().join("");
console.log("Reverse String of Hello:", resStr);

console.log("Polindrom", str === resStr);

// Compare Two Objects

let person1 = { name: "OPT", age: 22 };
let person2 = {
  name: "OPT",
  age: 23,
};

let comObj = JSON.stringify(person1) === JSON.stringify(person2);

console.log("comObj", comObj);

// Square of all Array Element

let ar = [1, 2, 3, 4, 5];

let squareArray = ar.map((item) => item * item);

console.log("Square", squareArray);

// Sum of Array Element of the Array
let sumOfArray = ar.reduce((acc, curr, index, arr) => {
  return acc + curr;
}, 0);

console.log("sumOfArray", sumOfArray);
