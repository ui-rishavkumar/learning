import React, { useState } from "react";

const Game = () => {
    const mrr = ["hello" , "rishav" , "hii"];
    const state = useState();
    const [count , setCount] = useState(0);
    const [dota , setData] = useState(mrr);
     
   console.log(mrr);
    const incNum = () => {
        
        setData(dota + items.mrr)
        setCount(count + 1);
    
    }
    return( 
    <>
        <p>{dota}</p>
        <h1> {count} </h1>
        <button onClick={incNum}>click me</button>
    </>
    );
   
};

export default Game;