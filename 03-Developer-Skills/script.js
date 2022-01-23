"use strict";

// Coding Challenge - 1
function printForeCast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `...${arr[i]} C in ${i + 1} days`;
  }
  console.log(str);
}

printForeCast([17, 21, 23]);
printForeCast([12, 5, -5, 0, 4]);
