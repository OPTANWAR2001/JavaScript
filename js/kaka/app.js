//! 1. Write a JavaScript function to calculate the sum of two numbers.

function sumOfTwo(a, b) {
  console.log("Sum of a and b is : ", a + b);
}

sumOfTwo(5, 6); //11

//! 2. Write a JavaScript program to find the maximum number in an array.

let arr = [11, 2, 4, 55, 3, 44, 32, 45, 65, 34, 87];

console.log(Math.max(...arr)); //87
console.log(Math.min(...arr)); //2

//! Another Way using sort method

let newArr = arr.sort((a, b) => b - a);
console.log("Maximum number in arr", newArr[0]);
console.log("Minimum number in arr", newArr[newArr.length - 1]);

//! 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

let str = "madam";

let newStr = str.split("").reverse().join("");

if (str === newStr) {
  console.log(`The word ${str} is palindrome`);
} else {
  console.log(`The word ${str} is not palindrome`);
}

//! 4. Write a JavaScript program to reverse a given string.

let string = "Hello";

let revString = string.split("").reverse().join("");
console.log("Reverse String", revString);

//! 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

let evenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = evenArr.filter((num) => {
  return num % 2 === 0;
});

console.log("even", even);

//! Other  way of doing it:
let newEven = [];
for (let i = 0; i <= evenArr.length - 1; i++) {
  if (evenArr[i] % 2 !== 0) {
    newEven.push(evenArr[i]);
  }
}

console.log("Odd array", newEven);

//!6. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

let capitalize = "radhaswami";

let camel = capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
let camelOther = capitalize[0].toUpperCase() + capitalize.slice(1);

console.log("camel", camel);
console.log("camelOther", camelOther);

//!7. Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.

let arr1 = [1, 4, 32, 2];
let arr2 = [3, 22, 44, 36];

let sortArr = [...arr1, ...arr2].sort((a, b) => a - b);
console.log("sortArr", sortArr);

//!8  Implement a function to find the sum of all the numbers in an array.

let arr3 = [1, 2, 3, 4, 5];

let sumOfArr = arr3.reduce((acc, curr) => acc + curr, 0);

console.log("sumOfArr", sumOfArr);

//!9  Write a functions that finds the longest word in a sentence.

let sentence = "hi, my name is omprakash tanwar";

function logestWord(sentence) {
  let word = "";

  let words = sentence.split(" ");

  for (let i = 0; i <= words.length - 1; i++) {
    if (word.length < words[i].length) {
      word = words[i];
    }
  }

  console.log("Longest Word:", word);
}

logestWord(sentence);





