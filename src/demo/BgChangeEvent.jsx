import React, { useState } from 'react'

export default function BgChangeEvent() {
 const [color,setColor]=useState(false);

  return (
    <div style={{backgroundColor:color? 'green':'red' , height:"300px" , textAlign:"center"}}>

       <div>
       <button onClick={()=>setColor(!color)}>Change bg color</button>
       </div>
    </div>
  )
}
