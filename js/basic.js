// JSON

// Stringification: Converting a native object to a string so that it can be transmitted across the network

let Obj = {
  name: "OPT",
  age: 22,
};

let strObj = JSON.stringify(Obj);
console.log("string", strObj);

// Parsing: Converting a string to a native object JSON.parse();

let onjStr = JSON.parse(strObj);
console.log(onjStr);
