import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProAI from './pages/ProAI'
import AntiAI from './pages/AntiAI'
import CurrentTech from './pages/CurrentTech'
import Reflection from './pages/Reflection'

function App() {
  return (
    <Router basename="/PhiloIssuesWithAI">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pro-ai" element={<ProAI />} />
            <Route path="/anti-ai" element={<AntiAI />} />
            <Route path="/current-tech" element={<CurrentTech />} />
            <Route path="/reflection" element={<Reflection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

