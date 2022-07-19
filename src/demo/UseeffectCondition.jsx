import React, { useEffect, useState } from 'react'

export const UseeffectCondition = () => {
    const [count , setCount] = useState(0);
    const [data , setData] = useState (100);
    useEffect(()=>{
        console.log("count")
    },[data])
  return (
    <div>
        <h2>{count}</h2>
        <h3>{data}</h3>
        <button onClick={()=>setCount(count + 1)}>update count</button>
        <button onClick={()=>setData( data + 10)}>update data</button>
    </div>
  )
}
export default UseeffectCondition;
