let arr = ["a", "B", "c", "D", "E"];
//! USing length property
console.log("Using length property ", arr[arr.length - 1]); //! Using length property  E

//! using slice method

console.log("Using Slice()", arr.slice(-1));

//! suing Pop() method

console.log("Using Pop", arr.pop());


//!Using Reduce Method

let newArr = [1, 2, 3, 4, 5];
const lastEle = newArr.reduce((acc, curr) => curr);

console.log("Last Ele using Reduce Method", lastEle);

//! Using Reverse

let lastItem = newArr.reverse()[0];

console.log("lastItem", lastItem);
