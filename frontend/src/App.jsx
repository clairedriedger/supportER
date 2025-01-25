import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import RegisterPage from './pages/registerPage';
import LeftLeg from './pages/leftleg';
import RightLeg from './pages/rightleg';
import Torso from './pages/torso';
import LeftArm from './pages/leftarm';
import RightArm from './pages/rightarm';
import Head from './pages/head';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/leftleg" element={<LeftLeg />} />
        <Route path="/rightleg" element={<RightLeg />} />
        <Route path="/torso" element={<Torso />} />
        <Route path="/leftarm" element={<LeftArm />} />
        <Route path="/rightarm" element={<RightArm />} />
        <Route path="/head" element={<Head />} />


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
