import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Movies from './components/Movies'
import Music from './components/Music'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import DataExplorer from './pages/DataExplorer'
import RemoteApi from './pages/RemoteApi'
import Gallery from './pages/Gallery'
import RenderTree from './pages/RenderTree'
import Bitacora from './pages/Bitacora'
import NotFound from './pages/NotFound'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={`App layout-with-sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-area">
        <Header onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <NavBar />
        {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}
        <main className="content-main" role="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/explorer" element={<DataExplorer />} />
            <Route path="/api" element={<RemoteApi />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/render-tree" element={<RenderTree />} />
            <Route path="/bitacora" element={<Bitacora />} />
            <Route path="/about" element={<section className="section"><About /></section>} />
            <Route path="/proyectos" element={<section className="section"><Projects /></section>} />
            <Route path="/contacto" element={<section className="section"><Contact /></section>} />
            <Route path="/peliculas" element={<section className="section"><Movies /></section>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  )
}

export default App
