import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import RegisterPage from './pages/registerPage';
import leftleg from './pages/leftleg'
import rightleg from './pages/rightleg'
import body from './pages/body'
import leftarm from './pages/leftarm'
import rightarm from './pages/rightarm'
import head from './pages/arm'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/leftleg" element={<leftleg />} />
        <Route path="/rightleg" element={<rightleg />} />
        <Route path="/body" element={<body />} />
        <Route path="/leftarm" element={<leftarm />} />
        <Route path="/rightarm" element={<rightarm />} />
        <Route path="/head" element={<head />} />


      </Routes>
    </Router>
  );
  
  /*return (
    <>
      <div>
        
      </div>
      <p className="text-red-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
}

export default App
