import React, { useEffect, useState } from 'react'

function App() {

  const [sec, setSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if(isRunning){
      timer = setInterval(()=>{
        setSec(prevSec => prevSec + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);
  
  const handleStop = ()=>{
    setIsRunning(false);
  }

  const handleStart = ()=>{
    setIsRunning(true);
  }

  const handleReset = ()=>{
    setSec(0);
    setIsRunning(false);
  }

  return (
    <div>
      <header>
        <div>
          <h1>{sec}</h1>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </header>
    </div>
  )
}

export default App
