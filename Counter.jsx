import React, { useState, useEffect } from 'react';

/**
 * Counter.jsx - Interactive Counter Component
 * Demonstrates React Hooks (useState, useEffect) for state management
 * Features: Experience counter, project counter, and technology counter
 */

const Counter = () => {
  // State management using useState hook
  const [experienceYears, setExperienceYears] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [technologiesUsed, setTechnologiesUsed] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Target values
  const targets = {
    experience: 3,
    projects: 10,
    technologies: 15
  };

  // Animated counter effect using useEffect hook
  useEffect(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      
      // Animate experience counter
      const experienceInterval = setInterval(() => {
        setExperienceYears(prev => {
          if (prev >= targets.experience) {
            clearInterval(experienceInterval);
            return targets.experience;
          }
          return prev + 1;
        });
      }, 300);

      // Animate projects counter
      const projectsInterval = setInterval(() => {
        setProjectsCompleted(prev => {
          if (prev >= targets.projects) {
            clearInterval(projectsInterval);
            return targets.projects;
          }
          return prev + 1;
        });
      }, 150);

      // Animate technologies counter
      const techInterval = setInterval(() => {
        setTechnologiesUsed(prev => {
          if (prev >= targets.technologies) {
            clearInterval(techInterval);
            return targets.technologies;
          }
          return prev + 1;
        });
      }, 100);

      return () => {
        clearInterval(experienceInterval);
        clearInterval(projectsInterval);
        clearInterval(techInterval);
      };
    }
  }, [isAnimating]);

  // Reset counter function
  const handleReset = () => {
    setExperienceYears(0);
    setProjectsCompleted(0);
    setTechnologiesUsed(0);
    setIsAnimating(false);
  };

  // Increment functions
  const incrementExperience = () => {
    setExperienceYears(prev => Math.min(prev + 1, 10));
  };

  const incrementProjects = () => {
    setProjectsCompleted(prev => prev + 1);
  };

  const incrementTechnologies = () => {
    setTechnologiesUsed(prev => prev + 1);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Portfolio Statistics Counter</h2>
        <p style={styles.subtitle}>Interactive counter demonstrating React Hooks</p>
      </div>

      <div style={styles.statsGrid}>
        {/* Experience Counter */}
        <div style={styles.statCard}>
          <div style={styles.iconCircle}>💼</div>
          <h3 style={styles.statNumber}>{experienceYears}+</h3>
          <p style={styles.statLabel}>Years Experience</p>
          <button 
            style={styles.incrementBtn} 
            onClick={incrementExperience}
          >
            + Add Year
          </button>
        </div>

        {/* Projects Counter */}
        <div style={styles.statCard}>
          <div style={styles.iconCircle}>🚀</div>
          <h3 style={styles.statNumber}>{projectsCompleted}+</h3>
          <p style={styles.statLabel}>Projects Completed</p>
          <button 
            style={styles.incrementBtn} 
            onClick={incrementProjects}
          >
            + Add Project
          </button>
        </div>

        {/* Technologies Counter */}
        <div style={styles.statCard}>
          <div style={styles.iconCircle}>⚡</div>
          <h3 style={styles.statNumber}>{technologiesUsed}+</h3>
          <p style={styles.statLabel}>Technologies Used</p>
          <button 
            style={styles.incrementBtn} 
            onClick={incrementTechnologies}
          >
            + Add Technology
          </button>
        </div>
      </div>

      <div style={styles.controls}>
        <button 
          style={styles.resetBtn} 
          onClick={handleReset}
        >
          🔄 Reset All Counters
        </button>
      </div>

      <div style={styles.infoBox}>
        <h4 style={styles.infoTitle}>About This Component:</h4>
        <ul style={styles.infoList}>
          <li><strong>useState:</strong> Managing counter states for experience, projects, and technologies</li>
          <li><strong>useEffect:</strong> Automatic animation when component mounts</li>
          <li><strong>Event Handlers:</strong> Increment and reset functionality</li>
          <li><strong>Conditional Rendering:</strong> Dynamic updates based on state changes</li>
        </ul>
      </div>

      <div style={styles.developerInfo}>
        <h4 style={styles.developerTitle}>Developer Info</h4>
        <p><strong>Name:</strong> Sandip Koli</p>
        <p><strong>Role:</strong> Full Stack Developer</p>
        <p><strong>Specialization:</strong> ASP.NET Core, Angular, React</p>
        <p><strong>Email:</strong> sandip.koli.in@gmail.com</p>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#f0f4f8',
    minHeight: '100vh'
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px'
  },
  title: {
    fontSize: '2.5rem',
    color: '#1a202c',
    marginBottom: '10px',
    fontWeight: '700'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#718096',
    margin: '0'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginBottom: '40px'
  },
  statCard: {
    backgroundColor: 'white',
    padding: '40px 30px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  },
  iconCircle: {
    width: '70px',
    height: '70px',
    margin: '0 auto 20px',
    backgroundColor: '#667eea',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem'
  },
  statNumber: {
    fontSize: '3.5rem',
    color: '#667eea',
    margin: '15px 0',
    fontWeight: '800',
    lineHeight: '1'
  },
  statLabel: {
    fontSize: '1rem',
    color: '#4a5568',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600',
    marginBottom: '20px'
  },
  incrementBtn: {
    padding: '10px 20px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
    marginTop: '10px'
  },
  controls: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  resetBtn: {
    padding: '15px 40px',
    backgroundColor: '#fc8181',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '700',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 15px rgba(252, 129, 129, 0.3)'
  },
  infoBox: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    marginBottom: '30px'
  },
  infoTitle: {
    fontSize: '1.5rem',
    color: '#2d3748',
    marginBottom: '20px',
    fontWeight: '700'
  },
  infoList: {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  },
  developerInfo: {
    backgroundColor: '#667eea',
    color: 'white',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
  },
  developerTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    fontWeight: '700'
  }
};

export default Counter;