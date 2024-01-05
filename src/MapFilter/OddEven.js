import React from 'react'

const OddEven = () => {
    const arr = [0,2, 3, 7, 8, 10, 2, 9];
  function isOdd(x) {
    return x % 2;
  }
  const odd = arr.filter(isOdd);
  console.log('odd',odd);

  const isEven =(x)=>{
    return x % 2 === 0
  } 
  const even =arr.filter(isEven);
  console.log('even',even);
  return (
    <div>
      <h1>{even}</h1>
      <h1>{odd}</h1>
    </div>
  )
}

export default OddEven
