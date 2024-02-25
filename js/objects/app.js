console.log("Hello Object");

let obj = {
  name: "omprakash",
  age: 23,
  weight: 56,
  "my hobbies": ["cricket", "football"], // space between property name
};

console.log("obj.name:  ", obj.name);

delete obj.weight;
console.log('obj["my hobbies"]', obj["my hobbies"]);

delete obj["my hobbies"];
console.log("obj", obj);

// add dynamic property and its value in objects
const property = "name";
const names = "omprakash";

let newObj = {
  [property]: names, //wrap inside square bracket
};

console.log(newObj);

// how to iterate the object by the help of the for in loop

let iterate = {
  firstName: "Omprakash",
  lastName: "Tanwar",
  age: 23,
};

for (key in iterate) {
  console.log(key, ":-", iterate[key]);
}
// find all key

console.log(Object.keys(iterate)); //['firstName', 'lastName', 'age']
console.log(Object.values(iterate)); // ['Omprakash', 'Tanwar', 23]

// this keyword

let calculator = {
  read() {
    this.a = 9
    this.b = 4
  },

  sum() {
    console.log("Addition ", this.a + this.b);
  },
  mul() {
    console.log("Addition ", this.a * this.b);
  },
};

calculator.read();
calculator.sum();
calculator.mul();
