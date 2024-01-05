import React from 'react'

const Example1 = () => {
    function x(){
        var i=3;
        setTimeout (function(){
            console.log(i);
        },4000)
        console.log("it will print before 4 sec")
    }
    x();
  return (
    <div>
      <h1>
        setTimeout
      </h1>
    </div>
  )
}

export default Example1
