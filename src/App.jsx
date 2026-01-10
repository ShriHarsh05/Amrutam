import { useState } from 'react'
import ConsumerPreJoin from './pages/ConsumerPreJoin.jsx'

import './App.css'
import DoctorCall from './pages/DoctorCall.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <DoctorCall/> */}
    <ConsumerPreJoin/>
    </>
  )
}

export default App
