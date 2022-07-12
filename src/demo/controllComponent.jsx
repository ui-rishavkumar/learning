import React, { useState } from 'react'

 const ControllComponent = () => {
    const [val , setVal] = useState("1");
  return (
    <>
        <h1>Controlled component</h1>
        <input type="text" value={val} onChange={(e)=> setVal(e.target.value)} />
    </>
  )
}
export default ControllComponent
