import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileLines } from "react-icons/fa6";
import './App.css'; 

// --- TYPES ---

interface Social {
  label: string;
  url: string;
  icon: React.ReactNode;
}

interface Experience {
  company: string;
  role: string;
  date: string;
  description: string;
}

interface Project {
  name: string;
  link: string;
  date: string; 
  description: string;
}

interface Profile {
  name: string;
  title: string;
  bio: string;
  socials: Social[];
}

// --- YOUR DATA ---

const PROFILE: Profile = {
  name: "Terrance Wong",
  title: "Computer Engineering @ UC Riverside",
  bio: "placeholder",
  socials: [
    { 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/terryzhw/",
      icon: <FaLinkedin size={20} />
    },
    { 
      label: "GitHub", 
      url: "https://github.com/terryzhw",
      icon: <FaGithub size={20} />
    },
    { 
      label: "Email", 
      url: "mailto:terrancezhw@gmail.com",
      icon: <FaEnvelope size={20} />
    },
    { 
      label: "Resume", 
      url: "/resume.pdf",
      icon: <FaFileLines size={20} />
    }
  ]
};

const EXPERIENCE: Experience[] = [
  {
    company: "placeholder",
    role: "placeholder",
    date: "20XX - 20XX",
    description: "placeholder"
  }
];

const PROJECTS: Project[] = [
  {
    name: "placeholder",
    link: "placeholder",
    date: "20XX - 20XX",
    description: "placeholder"
  }
];

// --- COMPONENTS ---

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="section-title">{children}</h2>
);

const ExperienceItem: React.FC<{ data: Experience }> = ({ data }) => (
  <div className="item-row">
    <div className="item-header">
      <h3 className="item-title">{data.company}</h3>
      <span className="item-date">{data.date}</span>
    </div>
    <div className="item-role">{data.role}</div>
    <p className="item-desc">{data.description}</p>
  </div>
);

const ProjectItem: React.FC<{ data: Project }> = ({ data }) => (
  <div className="item-row">
    <div className="item-header">
      <a 
        href={data.link} 
        className="project-link" 
        target="_blank" 
        rel="noreferrer"
      >
        {data.name} ↗
      </a>
      <span className="item-date">{data.date}</span>
    </div>
    <p className="item-desc">{data.description}</p>
  </div>
);

// --- MAIN APP ---

const App: React.FC = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="name">{PROFILE.name}</h1>
        
        {/* Social Icons Row */}
        <div className="links social-icons">
          {PROFILE.socials.map((social) => (
            <a 
              key={social.label} 
              href={social.url} 
              target="_blank" 
              rel="noreferrer"
              aria-label={social.label} // Keeps it accessible for screen readers
              className="icon-link"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="bio">{PROFILE.bio}</p>
      </header>

      {/* Experience Section */}
      <section>
        <SectionTitle>Experience</SectionTitle>
        {EXPERIENCE.map((job, i) => (
          <ExperienceItem key={i} data={job} />
        ))}
      </section>

      {/* Projects Section */}
      <section>
        <SectionTitle>Projects</SectionTitle>
        {PROJECTS.map((proj, i) => (
          <ProjectItem key={i} data={proj} />
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
      </footer>
    </div>
  );
};

export default App;