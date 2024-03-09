let arr = [1, 2, 3, 4, 3, 5, 3, 6, 2];
//! Using Filter Method
// Remove Duplicate Element in arr
let uniqeArr = arr.filter((ele, index) => arr.indexOf(ele) === index);

console.log("uniqeArr", uniqeArr); //uniqeArr [ 1, 2, 3, 4, 5, 6 ]

// Print Duplicate Items

let duplicateItem = arr.filter((ele, i) => arr.indexOf(ele) !== i);

console.log("duplicate", duplicateItem); //duplicate [ 3, 3, 2 ]

//!Using Set() Method

let uniqeItemArr = [...new Set(arr)];
console.log("uniqeItemArr", uniqeItemArr); //uniqeItemArr [ 1, 2, 3, 4, 5, 6 ]

//! Using for loop

let newUniqArr = [];
for (let i = 0; i <= arr.length - 1; i++) {
  if (!newUniqArr.includes(arr[i])) {
    newUniqArr.push(arr[i]);
  }
}
console.log("newUniqArr", newUniqArr); //newUniqArr [ 1, 2, 3, 4, 5, 6 ]

//! Using For Each Method
let NewArrr = [];
let NewArr = arr.forEach((ele, ind) => {
  if (arr.indexOf(ele) === ind) {
    NewArrr.push(ele);
  }
});

console.log("NewArrr", NewArrr);
