import React, { useState } from 'react'

 const IncDec = () => {
    const [num , setNum]= useState(0)
    const setInc = () =>{
        setNum(num + 1)
        console.log(setNum)
    }
    const setDec = () =>{
        if (num > 0){
            setNum(num - 1)
        }
        else{
            setNum(0)
            alert("number is smaller than 0")
        }
    }
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={setInc}>inc</button>
        <button onClick={setDec}>dec</button>
    </div>
  )
}
export default IncDec;


