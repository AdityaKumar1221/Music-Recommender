import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Model from './pages/Model.jsx'
import Recommendation from './pages/Recommendation.jsx'
import videoAi from "./assets/ai-video.mp4";

const App = () => {
  
  return (
    <div className='App'>
      <div className="overlay"></div>
      <video src={videoAi} autoPlay loop muted></video>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<Model />} />
        <Route path="/result" element={<Recommendation />} />
      </Routes>
    </div>
  );
}

export default App