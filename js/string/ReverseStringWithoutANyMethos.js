let str = "Hello JavaScript";
let revStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  revStr += str[i];
}

console.log("revStr", revStr);

function add() {
  return function (a) {
    return function (b) {
      return function (c) {
        console.log("sum is", a + b + c);
      };
    };
  };
}
add()(2)(3)(5);
