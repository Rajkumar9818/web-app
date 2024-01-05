import React, { useCallback, useEffect, useState } from 'react'

const Project1 = () => {
    const [length,setLength] = useState(8)
    const [charAllowed ,setCharAllowed] = useState(false)
    const [numAllowed , setNumAllowed] = useState(false)
    const[password,setPassword]= useState('')
    const passwordGenerater = useCallback (()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm'
    if(numAllowed) str += '1234567890'
    if(charAllowed) str += '!@#$%^&*()'

    for (let i = 1; i <=length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
        
    }
    setPassword(pass)
    },[length,charAllowed,numAllowed,setPassword])

    useEffect (()=>{
                passwordGenerater()
    },[length,numAllowed,charAllowed,setPassword])
  return (
    <>  
    <div className='flex item-center'>

    <form className='raj'>

     
      <div>
        <input  
        id="loginPassword"
        value={password}
        placeholder='Password'
        readOnly


        />
<button> Copy</button>
      </div>
     <div>
        <input
        type='range'
        min={1}
        max={10}
        onChange={(e)=>{setLength(e.target.value)}}
        className='curser-pointer'
        />
        <label htmlFor="">Length : {length}</label>
     </div>
     <div>
        <input
        type='checkbox'
        defaultChecked ={charAllowed}
        id='charInput'
        onChange={()=>{
            setCharAllowed((prev)=> !prev)
        }}

        />
        <label>Character</label>

        <input
        type='checkbox'
        defaultChecked ={numAllowed}
        id='numInput'
        onChange={()=>{
            setCharAllowed((prev)=> !prev)
        }}

        />
        <label>Number</label>
     </div>
    </form>
  </div>   
    </>
  )
}

export default Project1
