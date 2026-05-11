import { useState } from 'react'
import './App.css'

const data = [
  "Step 1: Learn React",
  "Step 2: Earn From Development",
  "Step 3: Invest Your Income"
]

const circleStyle = {
  backgroundColor: "lightBlue",
  padding: "15px 20px",
  borderRadius: "100%",
  fontWeight: "bolder",
  fontSize: "larger",
}

function App() {
  const [step, setStep] = useState(0)

  const nextNumberHandler = () => {
    setStep(s => (s + 1) % 3)
  }

  const previousNumberHandler = () => {
    setStep(s => (s - 1 + 3) % 3)
  }

  return (
    <div id='main-conatiner'>
      <div id='numbers'>
        <p style={{
          ...circleStyle,
          backgroundColor: step == 0 ? "rgb(82, 82, 244)" : "lightblue",
        }}>1</p>
        <p style={{
          ...circleStyle,
          backgroundColor: step == 1 ? "rgb(82, 82, 244)" : "lightblue",
        }}>2</p>
        <p style={{
          ...circleStyle,
          backgroundColor: step == 2 ? "rgb(82, 82, 244)" : "lightblue",
        }}>3</p>
      </div>
      <h2>{data[step]}</h2>
      <div id='btns'>
        <button onClick={previousNumberHandler}>Previous</button>
        <button onClick={nextNumberHandler}>Next</button>
      </div>
    </div >
  )
}

export default App