// call() method :   The call() method invokes a function with a given this value and arguments provided one by one

let obj = {
  name: "OP",
  age: 23,
};

function greeting(value1, value2) {
  console.log(
    `${value1} ${this.name} and i am a ${this.age} Year old ${value2}`
  );
}

greeting.call(obj, "I am call Method", "How are you?");

// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
let arr = ["I am apply Method", "What about you?"];
greeting.apply(obj, arr);

//Bind: returns a new function, allowing you to pass any number of arguments
const newFunc = greeting.bind(obj, "I am Bind method", "What are you doing?");
newFunc();
