import React, { useState } from "react"
const Hello=()=>{
    const [data , setData] = useState("anil");
    const click = () => {
        setData("rishav")
    }
    return<>
        <h1>{data}</h1>
        <button onClick={() => click()}>click me</button>
    </>
}
export default Hello;