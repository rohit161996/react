import React from 'react'
import {useState} from "react";

function App() {
  const[str, setStr] = useState("Rohit")

  const changestring = ()=>{
    setStr("Ramchandani")
  }
  
  const[val, setval] = useState(22)
  
  const add = ()=>{
    setval(val + 1)
  }

  const sub = ()=>{
    setval(val - 1)
  }

  const[isOn, setisOn] = useState(false)
  
  const lighton = ()=>{
    setisOn(!isOn)
  }

  return (
    <div>
      <h1>My age - {val}</h1>
      <div className="flex">
          <button onClick={add}> +1 </button>
          <button onClick={sub}> -1</button>
      </div>

      <h1>Name - {str}</h1>
      <div>
        <button onClick={changestring}>Change String</button>
      </div>

      <h1>Light - {isOn ? "ON": "OFF"}</h1>
      <div>
        <button onClick={lighton}>{isOn ? "OFF":"ON"}</button>
      </div>
    </div>
  )
}

export default App
