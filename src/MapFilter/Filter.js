import React from "react";

const Filter = () => {
 const arr = [8,5,0,80,6]

  //Find the max value in the array

  function findMax() {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  console.log("max", findMax());

  //Find the sum of the array
  const findSum = () => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };
  console.log("sum", findSum());

  return <div></div>;
};

export default Filter;
