import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ConsumerPreJoin from './pages/ConsumerPreJoin.jsx'
import DoctorCall from './pages/DoctorCall.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConsumerPreJoin />} />
        <Route path="/doctor" element={<DoctorCall />} />
      </Routes>
    </Router>
  )
}

export default App
