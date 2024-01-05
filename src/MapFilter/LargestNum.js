import React from 'react'

const LargestNum = () => {
    const arr = [3,7,99,10,5,82];
    function LargestNumber(){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }  
    } 
    return max; 
    }
    console.log('max',LargestNumber())
  return (
    <div>
    
    </div>
  )
}

export default LargestNum
