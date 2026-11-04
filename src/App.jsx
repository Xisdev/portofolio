import React from 'react';
import { portfolioData } from './data';
import './index.css'; // pastikan index.css di-import

// --- Components ---

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="tech-font text-glow navbar-logo">
        {`<${portfolioData.hero.name.split(' ')[0]} />`}
      </div>
      <div className="tech-font navbar-links">
        <a href="#about">About</a>
        <a href="#experience">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="grid-2 hero-grid">
        <div className="hero-text">
          <p className="tech-font" style={{ color: 'var(--primary-glow)', marginBottom: '1rem' }}>halo, saya</p>
          <h1 className="text-glow hero-title">{portfolioData.hero.name}</h1>
          <h2 className="hero-subtitle">{portfolioData.hero.role}</h2>
          <p className="hero-bio">{portfolioData.hero.bio}</p>
          <div className="hero-buttons">
            <a href="#experience" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img
              src={portfolioData.hero.profileImage}
              alt="Profile"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About & Skills</h2>
      <div className="grid-2">

        {/* Education & Experience */}
        <div>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary-glow)' }}>Education</h3>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            {portfolioData.education.map(edu => (
              <div key={edu.id}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{edu.degree}</h4>
                <div className="tech-font" style={{ fontSize: '0.9rem', color: 'var(--secondary-glow)', marginBottom: '0.8rem' }}>
                  {edu.university} | {edu.year}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{edu.details}</p>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Organization</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {portfolioData.organizations && portfolioData.organizations.map(org => (
              <div key={org.id} className="glass-panel" style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{org.title}</h4>
                <div className="tech-font" style={{ fontSize: '0.9rem', color: 'var(--accent-color)', marginBottom: '0.8rem' }}>
                  {org.company} | {org.period}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{org.description}</p>
              </div>
            ))}
          </div>

          <h3 id="experience" style={{ marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--primary-glow)' }}>Experience</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {portfolioData.experiences.map(exp => (
              <div key={exp.id} className="glass-panel" style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{exp.title}</h4>
                <div className="tech-font" style={{ fontSize: '0.9rem', color: 'var(--accent-color)', marginBottom: '0.8rem' }}>
                  {exp.company} | {exp.period}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{exp.description}</p>
                {exp.image && !exp.images && (
                  <img src={exp.image} alt={exp.title} style={{ marginTop: '1rem', width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                )}
                {exp.images && exp.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${exp.title} ${idx + 1}`} style={{ marginTop: '1rem', width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="glass-panel" style={{ height: '100%' }}>
            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>Technical Arsenal</h3>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Hardware & Embedded</h4>
              <div>
                {portfolioData.skills.hardware.map((skill, i) => (
                  <span key={i} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Software & Programming</h4>
              <div>
                {portfolioData.skills.software.map((skill, i) => (
                  <span key={i} className="tech-tag" style={{ borderColor: 'rgba(255,123,0,0.3)', color: 'var(--secondary-glow)', background: 'rgba(255,123,0,0.05)' }}>{skill}</span>
                ))}
              </div>
            </div>



            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>Certifications</h3>
            <ul style={{ listStyleType: 'square', paddingLeft: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              {portfolioData.certifications.map((cert, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

const Projects = () => {
  if (!portfolioData.projects || portfolioData.projects.length === 0) return null;

  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="grid-3">
        {portfolioData.projects.map(project => (
          <div key={project.id} className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
            />
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{project.title}</h3>
              <div style={{ marginBottom: '1rem' }}>
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}>{t}</span>
                ))}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.5rem 1rem', textAlign: 'center', width: '100%' }}>
                  View Project &gt;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const phoneLink = portfolioData.contact.phone.includes('wa.me') 
    ? (portfolioData.contact.phone.startsWith('http') ? portfolioData.contact.phone : `https://${portfolioData.contact.phone}`)
    : `tel:${portfolioData.contact.phone.replace(/\s+/g, '')}`;

  return (
    <section id="contact" style={{ textAlign: 'center', paddingBottom: '10rem' }}>
      <h2 className="section-title" style={{ justifyContent: 'center' }}>Contact Me</h2>

      <div className="glass-panel" style={{ display: 'inline-flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href={`mailto:${portfolioData.contact.email}`} className="btn">Email</a>
        <a href={phoneLink} target={portfolioData.contact.phone.includes('wa.me') ? "_blank" : undefined} rel="noopener noreferrer" className="btn btn-secondary">
          {portfolioData.contact.phone.includes('wa.me') ? 'WhatsApp' : 'Phone'}
        </a>
        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
        <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(0, 229, 255, 0.1)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
      <p className="tech-font">© {new Date().getFullYear()} {portfolioData.hero.name}. All Rights Reserved.</p>
      <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.5 }}>System built with React & Vite</p>
    </footer>
  );
};

// --- Main App ---

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
