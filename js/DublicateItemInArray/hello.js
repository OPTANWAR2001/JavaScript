/* let arr = [1, 2, 3, 4, 3, 2, 6];

function newArr(arr) {
  let newArray = [];
  for (let i = 0; i <= arr.length-1; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  console.log("newArray", newArray);
}

newArr(arr);
 */

/* let arr= [1,2,3,4,5,6,3,4,32];

function myarr(arr){

  let newArray = [];
  for(let i=0; i<=arr.length-1; i++)
  {
    if(!newArray.includes(arr[i]))
    {
      newArray.push(arr[i]);
    }
  }
  console.log('newArray', newArray)
}


myarr(arr); */

let names = ["a", "b", "c", "b", "a", "d", "e"];

  let uniqArray = names.filter((value, index) => names.indexOf(value) === index);



console.log("uniqArray", uniqArray);
