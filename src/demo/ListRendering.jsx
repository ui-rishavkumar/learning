import React from 'react'

export default function ListRendering() {
    const names = ["rishav" , "kumar" ,"shrivastav"]
  return (
    <div>
        {names.map((item)=>{
            return(<h2>{item}</h2>)
           
        })}
    </div>
  )
}
