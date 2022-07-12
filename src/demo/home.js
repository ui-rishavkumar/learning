import React,{useState} from "react";
const Home = ()=>{
    const [val, setVal]=useState();
    return <div>
    <h1> hello  {val}</h1>
    <input type="text"  onChange={(e)=>setVal(e.target.value)}/>

    </div>
}
export default Home;

 