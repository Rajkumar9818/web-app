import React, { useEffect, useState } from "react";
import {BiPluseMedical} from 'react-icons/bi'
import {FaMinus} from 'react-icons/fa'
import { IoIosAdd } from "react-icons/io";


const UseState = () => {
  const [count, setCount] = useState(0);

  // Here I use UseEffect to perform side effect
  useEffect(()=>{
    document.title=count
  })

  return (
    <>
      <div className="container">
        <wrapper>
          <div className="my-3">
            <button className="" onClick={()=>setCount(count + 1)}>
              <IoIosAdd className="icon" />
            </button>

            <h1>{count}</h1>

            <button className="" onClick={()=>count === 0 ? setCount(0): setCount(count-1)}>
              <FaMinus className="icon minus_icon" />
            </button>
          </div>
        </wrapper>
      </div>
    </>
  );
};

export default UseState;
