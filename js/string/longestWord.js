// Longest World in  a sentance

/* let sentance = "Hello my name is Omprakash Tanwar I am a front end dev";

function longest(sen) {
  let word = sen.split(" ");

  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > newWord.length) {
      newWord = word[i];
    }
  }
  return newWord;
}

let ans = longest(sentance);
console.log("ans", ans);
 */

//2 Reverse a String

let str = "Hello";

function revStr(word) {
  let rev = word.split("").reverse().join("");

  console.log("rev", rev);
}
revStr(str);

let arr = [1, 2, 3, 4, 5];

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let total = sum(arr);
console.log("total", total);
