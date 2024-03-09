let str = "Hello World";
let revStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  revStr += str[i];
}

console.log("revStr", revStr);
