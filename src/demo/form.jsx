import React, { useState } from "react";

const Form =()=>{
    const [name , setName] = useState("");
    const [name2 , setName2] = useState("");
    const [number , setNumber] = useState("");
    const [tnc , setTnc] = useState(false);
    const [print , setPrint] = useState(false);
    const getFormData = (e) =>{
        if(name===""){
            alert("plz fill all the fields")
        }
        else if(name2===""){
            alert("plz fill all the fields")
        }
        else if(tnc === false){
            alert("please select the term and condition")
        }
        
        console.log(name,number,tnc)

        e.preventDefault()
    }
    return(
        <>
        <div style={{backgroundColor:'#eee' , maxWidth:"600px", margin:"0 auto" , textAlign:"center"}}>
            <h1>form data</h1>
            <form onSubmit={getFormData} style={{padding:"30px"}}>
                <input type="text" placeholder="enter yor name" style={{width:"100%" , boxSizing:"border-box",padding:"10px"}} onChange={(e) => setName(e.target.value)}/><br /><br />
                <input type="text" placeholder="enter yor name" style={{width:"100%" , boxSizing:"border-box",padding:"10px"}} onChange={(e) => setName2(e.target.value)}/><br /><br />
                <select onChange={(e) => setNumber(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <br /><br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)}/><span>accept term and condition</span>
                <br /><br />
                <button onClick={()=> setPrint(true)}>submit</button>
            </form>
            <h2>first name is   {print?name:null}</h2>
            <h2>last name is   {print?name2:null}</h2>
            <h2>number is   {print?number:null}</h2>
            </div>
        </>
    )
}
export default Form;
