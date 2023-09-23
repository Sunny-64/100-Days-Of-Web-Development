import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [countdown, setCountdown] = useState(); 
  const timer = useRef(0); 

  useEffect(() => {
      const intervalId = setInterval(() => {
          timer.current = timer.current + 1; 
          setCountdown(timer.current)
      }, 1000)

      timer.current = intervalId; 
      return clearInterval(timer.current); 
  }, [])


  return (
    <div className="App">
          {countdown}
    </div>
  )
}

export default App
