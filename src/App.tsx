import './App.css'
import Dashboard from '@/screens/dashboard'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to='/dashboard' />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
