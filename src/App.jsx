import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Internship from './pages/Internship'
import Education from './pages/Education'
import Contact from './pages/Contact'
const App=()=>{
return(
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/About" element={<About />} />
<Route path="/Skills" element={<Skills />} />
<Route path="/Projects" element={<Projects />} />
<Route path="/Internship" element={<Internship />} />
<Route path="/Education" element={<Education />} />
<Route path="/Contact" element={<Contact />} />
</Routes>
</Router>
)
}
export default App
