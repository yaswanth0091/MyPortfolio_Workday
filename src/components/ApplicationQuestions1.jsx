import { Code, Database, Cloud, Layers, GitBranch, Terminal } from 'lucide-react';

const ApplicationQuestions1 = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code,
      skills: ['C++', 'Java', 'Python', 'C','Basic of R']
    },
    {
      category: 'Web Development',
      icon: Layers,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Flask','PHP','MySQL']
    },
    {
      category: 'Cloud Tools & Technologies',
      icon: Cloud,
      skills: ['AWS', 'Azure', 'Git',]
    },
  
  ];

  const strengths = [
    'Problem-solving and analytical thinking',
    'Strong communication and collaboration skills',
    'Ability to learn new technologies quickly',
    'Attention to detail and code quality',
    'Team Collaboration and Agile methodologies',
    'Passion for building user-centric applications'
  ];

  return (
    <div className="application-questions">
      <h2 className="section-title">Skills & Strengths</h2>
      
      <div className="skills-section">
        <h3 className="subsection-title">Technical Skills</h3>
        <p className="section-description">
          Below is a comprehensive list of my technical skills across various domains. 
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="skill-category">
                <div className="category-header">
                  <IconComponent className="category-icon" />
                  <h4 className="category-title">{category.category}</h4>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="strengths-section">
        <h3 className="subsection-title">Core Strengths</h3>
        <ul className="strengths-list">
          {strengths.map((strength, index) => (
            <li key={index} className="strength-item">{strength}</li>
          ))}
        </ul>
      </div>
      
      <style jsx="true">{`
        .application-questions {
          width: 100%;
        }
        
        .skills-section {
          margin-bottom: 40px;
        }
        
        .subsection-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--workday-text);
          margin-bottom: 12px;
        }
        
        .section-description {
          font-size: 14px;
          color: var(--workday-text-light);
          margin-bottom: 24px;
          line-height: 1.6;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        
        .skill-category {
          padding: 20px;
          border: 1px solid var(--workday-border);
          border-radius: 4px;
          background-color: var(--workday-card);
        }
        
        .category-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        
        .category-icon {
          width: 20px;
          height: 20px;
          color: var(--workday-primary);
        }
        
        .category-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--workday-text);
        }
        
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .skill-item {
          padding: 6px 12px;
          background-color: var(--workday-bg);
          border: 1px solid var(--workday-border);
          border-radius: 12px;
          font-size: 13px;
          color: var(--workday-text);
          font-weight: 500;
        }
        
        .strengths-section {
          padding-top: 32px;
          border-top: 1px solid var(--workday-border);
        }
        
        .strengths-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .strength-item {
          font-size: 14px;
          color: var(--workday-text);
          padding-left: 24px;
          position: relative;
          line-height: 1.6;
        }
        
        .strength-item::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--workday-primary);
          font-weight: bold;
          font-size: 16px;
        }
        
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ApplicationQuestions1;
