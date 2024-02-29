console.log("Start");

let promise = new Promise((resolve, reject) => {
  const result = true;

  if (result) {
    resolve("Promise are resolved");
  } else {
    reject(new Error("Promise are failed"));
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Finish");
