import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import ACityInTune from './pages/A_City_in_Tune'
import LegaciesInExile from './pages/Legacies_in_Exile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/a-city-in-tune" element={<ACityInTune />} />
          <Route path="projects/legacies-in-exile" element={<LegaciesInExile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
