import React, { useEffect, useState } from 'react'

function App() {
  // 1. Code writing area
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const inter = setInterval(() => {
      setSec(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(inter);
    }
  }, // Bounding the variables 
  [])

  return (
    <div>{sec}</div>
  )
}

export default App
