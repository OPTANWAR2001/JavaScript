// The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end of the array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,12,32];
// console.log(arr.slice(2, 5)); //[3, 4, 5];
// console.log(arr.slice(2)); //[ 3, 4, 5, 6, 7, 8, 9];
// console.log(); //[ 3, 4, 5, 6, 7, 8, 9];


// What is the purpose of the array splice method
/* The splice() method adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position/index for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array. */


/* let person = ["ram","raj","ramesh"];
let alphabet = ["a","b","c","d","e","f"];
let num = [1,2,4,5,6,7]; //num [1, 2, 11, 12,13,6,7]


let newPerson = person.splice(0,2);//
 */
/* 
console.log('newPerson', newPerson)// [ 'ram', 'raj' ]


let newAlphabet = alphabet.splice(2);

console.log('newAlphabet', newAlphabet)//newAlphabet [ 'c', 'd', 'e', 'f' ]

let newNum = num.splice(2,2,11,12,13);

console.log('newNum', newNum)
console.log('num', num)


console.log((typeof(NaN))); */


let name;
 console.log('name', name)
 console.log(typeof (name));