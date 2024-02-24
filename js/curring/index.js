// Normal Function

function sum(a, b, c) {
  console.log("a+b+c", a + b + c);
}
sum(1, 2, 3);

// Curring Function

function fun(a) {
  return function (b) {
    return function (c) {
      return function () {
        return a + b + c;
      };
    };
  };
}

console.log(fun(2)(1)(5)());

// Infinite Curring

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(1)(2)(4)(4)(4)(3)(3)());
