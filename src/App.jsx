import React from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPages/LandingPage'
import Home from './components/Home/Home'
import Gallery from './components/Gallery/GalleryPage';
import News from './components/News/NewsPage';
import Teams from './components/Teams/TeamsPage';
import PointsTable from './components/PointsTable/PointsTable'
import TeamDetails from './components/Teams/teamDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/points-table" element={<PointsTable />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teamDetails/:season/:teamIndex" element={<TeamDetails />} />
      </Routes>
    </Router>
  )
}

export default App
