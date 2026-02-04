import React from 'react';

/**
 * APP.jsx - Main Portfolio Application Component
 * A simple React component showcasing Sandip Koli's professional profile
 */

const App = () => {
  const skills = {
    backend: ['C#', 'ASP.NET Core', 'MVC', 'Entity Framework', 'LINQ', 'REST API'],
    frontend: ['Angular', 'TypeScript', 'React', 'HTML', 'CSS', 'JavaScript'],
    database: ['SQL Server', 'MySQL', 'Stored Procedures'],
    devops: ['Azure', 'Docker', 'CI/CD', 'GitHub Actions']
  };

  const projects = [
    {
      name: 'AuthCred',
      description: 'Secure enterprise credit management platform',
      technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'JWT']
    },
    {
      name: 'Broker Sight',
      description: 'Real-time analytics and monitoring platform',
      technologies: ['ASP.NET MVC', 'Angular', 'React', 'SQL Server']
    },
    {
      name: 'HealthIQ 2.0',
      description: 'Comprehensive healthcare management system',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Bootstrap']
    }
  ];

  const experience = {
    years: '3+',
    currentRole: 'Full Stack Dot Net Developer',
    location: 'Pune, India'
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>SANDIP KOLI</h1>
        <h2 style={styles.title}>Full Stack Developer</h2>
        <p style={styles.tagline}>
          Building secure, scalable enterprise applications with .NET & Angular
        </p>
      </header>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Experience</h3>
        <div style={styles.experienceCard}>
          <p><strong>{experience.years}</strong> years of professional experience</p>
          <p><strong>Current Role:</strong> {experience.currentRole}</p>
          <p><strong>Location:</strong> {experience.location}</p>
        </div>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Technical Skills</h3>
        <div style={styles.skillsGrid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} style={styles.skillCategory}>
              <h4 style={styles.categoryTitle}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h4>
              <div style={styles.skillTags}>
                {items.map((skill, index) => (
                  <span key={index} style={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Featured Projects</h3>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <h4 style={styles.projectName}>{project.name}</h4>
            <p style={styles.projectDescription}>{project.description}</p>
            <div style={styles.techStack}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} style={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer style={styles.footer}>
        <p>📧 sandip.koli.in@gmail.com</p>
        <p>📱 9307880727</p>
      </footer>
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh'
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
    padding: '60px 20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  name: {
    fontSize: '3rem',
    margin: '0 0 10px 0',
    fontWeight: '900',
    letterSpacing: '2px'
  },
  title: {
    fontSize: '1.5rem',
    margin: '0 0 15px 0',
    fontWeight: '300',
    opacity: '0.95'
  },
  tagline: {
    fontSize: '1rem',
    margin: '0',
    opacity: '0.9',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  section: {
    marginBottom: '50px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '25px',
    color: '#2d3748',
    borderBottom: '3px solid #667eea',
    paddingBottom: '10px'
  },
  experienceCard: {
    padding: '20px',
    backgroundColor: '#f7fafc',
    borderRadius: '6px',
    borderLeft: '4px solid #667eea'
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  skillCategory: {
    padding: '20px',
    backgroundColor: '#f7fafc',
    borderRadius: '6px',
    border: '1px solid #e2e8f0'
  },
  categoryTitle: {
    fontSize: '1.1rem',
    marginBottom: '15px',
    color: '#667eea',
    fontWeight: '600'
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  skillTag: {
    padding: '6px 12px',
    backgroundColor: '#edf2f7',
    borderRadius: '4px',
    fontSize: '0.85rem',
    color: '#4a5568',
    border: '1px solid #cbd5e0'
  },
  projectCard: {
    marginBottom: '25px',
    padding: '20px',
    backgroundColor: '#f7fafc',
    borderRadius: '6px',
    borderLeft: '4px solid #764ba2'
  },
  projectName: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#2d3748'
  },
  projectDescription: {
    color: '#e97a0c',
    marginBottom: '15px',
    lineHeight: '1.6'
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  techBadge: {
    padding: '5px 10px',
    backgroundColor: '#764ba2',
    color: 'white',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  footer: {
    textAlign: 'center',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    color: '#4a5568'
  }
};

export default App;