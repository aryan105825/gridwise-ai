
import './App.css'
import Landing from './components/Landing'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
