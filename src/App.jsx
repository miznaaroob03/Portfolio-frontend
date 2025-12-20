import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Portfolio() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: sData } = await supabase.from('skills').select('*');
      const { data: pData } = await supabase.from('projects').select('*');
      setSkills(sData || []);
      setProjects(pData || []);
    };
    fetchData();
  }, []);

  return (
    <div className="portfolio-container">
      {/* NAVIGATION BAR */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#hero">Name</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <header id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Mizna Aroob</h1>
            <p className="experience">
              Full-Stack Developer specializing in AI-integrated web solutions. 
            </p>
            <div className="contact-info">
              <a href="mailto:mizaroob@email.com" className="btn primary">Email Me</a>
              <a href="tel:+123456789" className="btn secondary">Call Me</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/Miz.jpg" alt="Miz Portfolio" />
          </div>
        </div>
      </header>

      {/* 2. ABOUT & SKILLS */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="description">
          <p>
            As a forward-thinking Web Developer, I leverage cutting-edge <strong>AI technologies</strong> to accelerate development. 
            My expertise lies in combining <strong>React</strong> and <strong>Supabase</strong> with AI-driven automation.
          </p>
        </div>
        
        <h3 id="skills">Technical Skills</h3>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.id} className="skill-card">
              <h4>{skill.name}</h4>
              <span>{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <h2>Recent Projects</h2>
        <div className="project-description-list">
          {projects.map(proj => (
            <div key={proj.id} className="project-detail-item">
              <div className="project-header">
                <h4>{proj.title}</h4>
                <div className="project-line"></div>
              </div>
              <p className="project-explanation">{proj.description}</p>
              <div className="project-footer-row">
                <div className="project-tech-stack">
                  <span>Built with React, Supabase & AI Integration</span>
                </div>
                {proj.link && (
                  <a 
                    href={proj.link.startsWith('http') ? proj.link : `https://${proj.link}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="view-link"
                  >
                    View Project ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. COPYRIGHT FOOTER */}
      <footer className="portfolio-footer">
        <hr />
        <p>&copy; {new Date().getFullYear()} Mizna Aroob. All rights reserved.</p>
        <p style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 'bold' }}>
          Built with React, Supabase & AI Integration
        </p>
      </footer>
    </div>
  );
} // <--- This closes the Portfolio function

export default Portfolio; // <--- This must be outside the function

