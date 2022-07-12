import React, { useRef } from "react";

export default function UncontrollComponent() {
    let inputRef1 = useRef("");

    function formHandler(e){
        e.preventDefault()
        console.log("value is", inputRef1.current.value)
        let input2 = document.getElementById("input2").value;
        console.log(input2)
    }
  return (
    <>
      <h1>uncontrolled demo</h1>
      <form onSubmit={formHandler}>
        <input type="text" ref={inputRef1} /><br /> <br/>
        <input type="text" id="input2"/> <br /> <br/>
        <button>click me</button>
      </form>
    </>
  );
}
