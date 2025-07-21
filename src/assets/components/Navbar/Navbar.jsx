import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
const Navbar=()=>{
return(
<nav className="navbar">
<div className="nav-logo">
<Link to="/">My Portfolio</Link>
</div>
<ul className="navbar-links">
<li><Link for="/">Home</Link></li>
<li><Link for="/about">About</Link></li>
<li><Link for="/projects">Projects</Link></li>
<li><Link for="/skills">Skills</Link></li>
<li><Link for="/experiences">Work Experience</Link></li>
<li><Link for="/testimonials">Testimonials</Link></li>
<li><Link for="/contact">Contact</Link></li>
<li><Link for="/resume">Resume</Link></li>
</ul>
<div className="navbar-toggle"><ThemeToggle/></div>
</nav>
  )
}
export default Navbar
