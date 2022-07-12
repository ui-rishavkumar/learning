import React, { useRef } from 'react'

export default function UseRefDemo() {
    let inputRef = useRef();
    const inputHanlder = () => {
        console.log("function call")
        inputRef.current.value="1000";
    }
  return (
    <div>
        <h1>useref demo</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={inputHanlder}>click me</button>
    </div>
  )
}
