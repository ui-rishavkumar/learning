import React, { useState } from "react";

const Input =() =>{
    const [data , setData] = useState(null);
    const [print , setPrint] = useState(false);
    function getData(val){
        console.log(val.target.value)
        setData(val.target.value)
    }
    return(
        <>
            <h1>{
                print?data:null
            }</h1>
            <input type="text" onChange={getData} />
            <button onClick={()=> setPrint(true)}>print data</button>
        </>
    )
}
export default Input;