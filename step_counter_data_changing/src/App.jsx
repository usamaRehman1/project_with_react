import { useState } from 'react'
import Step from "./component/step.jsx";
import Counter from './component/counter.jsx';
import DateMessage from './component/dateMessage.jsx';

function App() {
  const [count, setCount] = useState(0);

  const mainContainer = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }

  return (
    <div style={mainContainer}>
      <Step />
      <Counter />
      <DateMessage />
    </div>
  )
}

export default App

