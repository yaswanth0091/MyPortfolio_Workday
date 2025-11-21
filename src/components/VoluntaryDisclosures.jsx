import { Heart, BookOpen, Music, Dumbbell, Camera, Plane } from 'lucide-react';

const VoluntaryDisclosures = () => {
  const hobbies = [
   /* {
      icon: BookOpen,
      title: 'Reading',
      description: 'Enjoy reading technical books, science fiction novels, and articles about emerging technologies.'
    },*/
    {
      icon: Music,
      title: 'Music',
      description: 'Enjoy listening to various music genres.'
    },
    {
      icon: Dumbbell,
      title: 'Fitness',
      description: 'Regular gym workouts and running to maintain physical and mental well-being.'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Passionate about landscape photography. Love capturing moments and stories.'
    },
    /*{
      icon: Plane,
      title: 'Travel',
      description: 'Exploring new places, experiencing different cultures, and trying local cuisines.'
    },*/
    {
      icon: Heart,
      title: 'Community Service',
      description: 'Volunteer at multiple blood donation camps.'
    }
  ];

  const interests = [
    'Artificial Intelligence and Machine Learning',
    'Hackathons and Coding Competitions',
    'Solvinfg Real-world Problems with Technology',
    'Cloud Computing and DevOps',
    'Sustainable Technology'
  ];

  return (
    <div className="voluntary-disclosures">
      <h2 className="section-title">Hobbies & Interests</h2>
      
      <p className="intro-text">
        Beyond my professional work, I maintain a balanced lifestyle with diverse interests 
        that contribute to my creativity and problem-solving abilities.
      </p>
      
      <div className="hobbies-section">
        <h3 className="subsection-title">Personal Hobbies</h3>
        
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <div key={index} className="hobby-card">
                <div className="hobby-icon-container">
                  <IconComponent className="hobby-icon" />
                </div>
                <h4 className="hobby-title">{hobby.title}</h4>
                <p className="hobby-description">{hobby.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="interests-section">
        <h3 className="subsection-title">Professional Interests</h3>
        
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-tag">
              {interest}
            </div>
          ))}
        </div>
      </div>
      
      <style jsx="true">{`
        .voluntary-disclosures {
          width: 100%;
        }
        
        .intro-text {
          font-size: 14px;
          color: var(--workday-text);
          line-height: 1.7;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--workday-border);
        }
        
        .hobbies-section {
          margin-bottom: 40px;
        }
        
        .subsection-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--workday-text);
          margin-bottom: 20px;
        }
        
        .hobbies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }
        
        .hobby-card {
          padding: 20px;
          border: 1px solid var(--workday-border);
          border-radius: 4px;
          background-color: var(--workday-card);
          transition: border-color 0.2s, transform 0.2s;
          text-align: center;
        }
        
        .hobby-card:hover {
          border-color: var(--workday-primary);
          transform: translateY(-2px);
        }
        
        .hobby-icon-container {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--workday-bg);
          border-radius: 50%;
        }
        
        .hobby-icon {
          width: 28px;
          height: 28px;
          color: var(--workday-primary);
        }
        
        .hobby-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--workday-text);
          margin-bottom: 8px;
        }
        
        .hobby-description {
          font-size: 13px;
          color: var(--workday-text-light);
          line-height: 1.6;
        }
        
        .interests-section {
          padding-top: 32px;
          border-top: 1px solid var(--workday-border);
        }
        
        .interests-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        
        .interest-tag {
          padding: 10px 20px;
          background-color: var(--workday-bg);
          border: 1px solid var(--workday-border);
          border-radius: 20px;
          font-size: 14px;
          color: var(--workday-text);
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .interest-tag:hover {
          background-color: var(--workday-hover);
        }
        
        @media (max-width: 768px) {
          .hobbies-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default VoluntaryDisclosures;
