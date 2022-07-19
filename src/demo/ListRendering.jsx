import React from 'react'

export default function ListRendering() {
    const names = ["rishav" , "kumar" ,"shrivastav"]
  return (
    <div>
        {names.map((item,index)=>{
            return(<h2 key={index}>{item}</h2>)
           
        })}
    </div>
  )
}
