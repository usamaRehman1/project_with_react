import { useState } from 'react'
import RangeSelector from './component/rangeSelector'
import CounterWithRange from './component/counter'
import MessageOfDate from './component/dateMessage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='mainContainer'>
      <RangeSelector />
      <CounterWithRange />
      <MessageOfDate />
    </div>
  )
}

export default App
