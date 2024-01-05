import React from 'react'

const Map = () => {
    const arr =[5,2,4,6];
    function binary(x){
        return x.toString(2);
    }
    const output = arr.map(binary);
    console.log(output);
  return (
    <div>
      
    </div>
  )
}

export default Map
