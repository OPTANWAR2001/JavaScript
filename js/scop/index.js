let arr = [1, 2, 3, 4, 5, 6];

let newArr = arr.map((item) => item * 2);

console.log("newArr", newArr);

let evenNew = arr.filter((item) => item % 2 == 0);

console.log("evenNew", evenNew);

let sum = arr.reduce((acc, curr, i, arr) => acc + curr, 0);
console.log("sum", sum);
console.log("arr", arr);

let obj = [
  { name: "opt", age: 33 },
  { name: "rssb", age: 23 },
  { name: "hello", age: 43 },
  { name: "hi", age: 53 },
];

let names = [];
for (let i = 0; i < obj.length; i++) {
  names.push(obj[i].name.toUpperCase());
}

console.log("names", names);

// Constructor Funtion

function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

let myobj = new User("OP", "Tanwar", 22);

console.log(myobj.firstName);


(function(num){
  console.log('num+num', num+num)
})(5);