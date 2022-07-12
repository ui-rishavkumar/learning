import React, { useState } from "react";

const Form =()=>{
    const [name , setName] = useState("");
    const [number , setNumber] = useState("");
    const [tnc , setTnc] = useState(false);
    const getFormData = (e) =>{
        console.log(name,number,tnc)
        e.preventDefault()
    }
    return(
        <>
            <h1>form data</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter yor name" onChange={(e) => setName(e.target.value)}/><br />
                <select onChange={(e) => setNumber(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)}/><span>accept term and condition</span>
                <br />
                <button>submit</button>
            </form>
        </>
    )
}
export default Form;
