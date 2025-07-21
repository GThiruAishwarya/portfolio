import React from 'react'
import profileImg from '../assets/profile.jpg'
import resumePDF from'../assets/resume_with_experiences_(2)_ai_ats-t2%20(1).pdf'
const App=()=>{
return(
<section style={styles.container}>
<div style={styles.left}>
<img src={profileImg} alt="My profile" />
</div>

<div style={styles.right}>
<h2 style={styles.right}>About Me</h2>
<p> I’m a passionate full stack developer experienced in building responsive web apps using ReactJS, NodeJS, Spring Boot, and more.</p>
<a href={resumePDF} target="_blank" rel="noopener noreferrer">
<button style={styles.button}>View Projects</button>
</a>
</div>
</section>
  )
}
const styles = {
  container: {
    display: 'flex',
    padding: '40px',
    alignItems: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    backgroundColor: '#f4f4f4',
  },
  left: {
    flex: '1',
    textAlign: 'center',
  },
  image: {
    width: '250px',
    borderRadius: '10px',
  },
  right: {
    flex: '2',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#222',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
}

export default About
