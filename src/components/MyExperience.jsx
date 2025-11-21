import { ExternalLink, Github } from 'lucide-react';

const MyExperience = () => {
  const projects = [
    {
      id: 1,
      title: 'BEYOND THE CHART: AI-Powered Storytelling in Business Intelligence Dashboards',
      role: 'Full Stack Developer',
      duration: 'Jan 2024 - Present',
      description: 'Built an AI-powered BI dashboard combining LSTM forecasting, OCR, and NLP for automated insight generation. Developed three core modules for CSV-to-graphs, 30-day future prediction, and graph-to-text interpretation using generative AI. Implemented normalization, model training, and dynamic visualizations with Streamlit, TensorFlow/Keras, Pandas, and NumPy. Delivered a scalable end-to-end analytics tool that converts raw data and images into clear, actionable insights.',
      techStack: ['Python', 'TensorFlow/Keras (LSTM)', 'Pandas', 'NumPy', 'OCR','NLP','Gemini API','Matplotlib'],
      liveUrl: 'https://project1.example.com',
      githubUrl: 'https://github.com/yaswanth0091/BI_dashboard'
    },
    {
      id: 2,
      title: ' Lost & Found Web Application',
      role: 'AI/ML Engineer',
      duration: 'Jun 2023 - Dec 2023',
      description: 'Built a full-stack lost & found portal where users can report and track items with photos, item details, and contact information. Implemented Levenshtein distance–based similarity matching to automatically suggest potential matches between lost and found reports. Used SQLite for persistent storage and created a clean, responsive interface for effortless navigation and quick item discovery. Designed robust backend logic with automated scoring, date proximity, and location-based matching.',
      techStack: ['PHP', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Levenshtein Distance Algorithm'],
      liveUrl: 'https://project2.example.com',
      githubUrl: 'https://github.com/yaswanth0091/Lost-and-Found-with-Report-Matching'
    },
    {
      id: 3,
      title: 'FARM INTEL',
      role: 'Frontend Developer',
      duration: 'Mar 2023 - May 2023',
      description: 'Developed an intelligent agri-advisory platform that recommends the top 3 crops based on farmers’ location, soil NPK values, and real-time weather data. Built modules for soil input, lab locator, crop budgeting, and expert appointment booking, ensuring end-to-end decision support. Implemented a Random Forest–based crop prediction engine with Flask APIs and integrated weather forecasts for precision recommendations. Co-led the UI/UX design in Figma, delivering a clean, farmer-friendly interface with simple authentication.',
      techStack: ['Python', 'Pandas', 'SQLite ', 'OpenWeatherMap API','Figma','Random Forest Algorithm'],
      liveUrl: 'https://project3.example.com',
      githubUrl: 'https://github.com/yaswanth0091/Crop-Recommendation'
    },
    {
      id: 4,
      title: 'Instagram clone',
      role: 'Backend Developer',
      duration: 'Nov 2022 - Feb 2023',
      description: 'Developed a full-stack Instagram-style clone enabling users to sign up, log in, post images, view profiles and feeds, and like content. Integrated server-side logic to handle user authentication, file uploads, and dynamic content rendering. Designed a responsive UI for seamless mobile and desktop usage, enabling intuitive social media interactions. Built with a simple yet effective architecture to mirror key features of a mainstream photo-sharing platform.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      liveUrl: 'https://project4.example.com',
      githubUrl: 'https://github.com/yaswanth0091/Instagram_clone'
    },
    {
      id: 5,
      title: 'VIT Faculty Review Platform',
      role: 'Full Stack Developer',
      duration: 'Aug 2022 - Oct 2022',
      description: 'Ideated and designed a full-stack faculty review platform that helps VIT students make smarter course-registration decisions through structured, community-driven feedback. Implemented features such as dynamic faculty search, aggregated star ratings, and a complete review system with real-time updates. Designed an intuitive, responsive interface for seamless browsing and review submission. Delivered a centralized, persistent alternative to scattered informal student opinions.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB','Vercel (Frontend)','Render (Backend)'],
      liveUrl: 'https://project5.example.com',
      githubUrl: 'https://github.com/yaswanth0091/ffcs-guru'
    }
  ];

  return (
    <div className="my-experience">
      <h2 className="section-title">My Experience</h2>
      
      <div className="experience-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <div>
                <h3 className="project-title">{project.title}</h3>
               {/*} <p className="project-role">{project.role}</p> */}
              </div>
             {/* <span className="project-duration">{project.duration}</span> */}
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              {/* <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a> */}
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx="true">{`
        .my-experience {
          width: 100%;
        }
        
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .project-card {
          padding: 24px;
          border: 1px solid var(--workday-border);
          border-radius: 4px;
          background-color: var(--workday-card);
          transition: border-color 0.2s;
        }
        
        .project-card:hover {
          border-color: var(--workday-primary);
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          gap: 16px;
        }
        
        .project-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--workday-text);
          margin-bottom: 4px;
        }
        
        .project-role {
          font-size: 14px;
          color: var(--workday-primary);
          font-weight: 500;
        }
        
        .project-duration {
          font-size: 13px;
          color: var(--workday-text-light);
          white-space: nowrap;
        }
        
        .project-description {
          font-size: 14px;
          color: var(--workday-text);
          line-height: 1.7;
          margin-bottom: 16px;
        }
        
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }
        
        .tech-badge {
          padding: 4px 12px;
          background-color: var(--workday-bg);
          border: 1px solid var(--workday-border);
          border-radius: 12px;
          font-size: 12px;
          color: var(--workday-text);
          font-weight: 500;
        }
        
        .project-links {
          display: flex;
          gap: 16px;
        }
        
        .project-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--workday-primary);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: opacity 0.2s;
        }
        
        .project-link:hover {
          opacity: 0.8;
        }
        
        @media (max-width: 768px) {
          .project-header {
            flex-direction: column;
            gap: 8px;
          }
          
          .project-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default MyExperience;
