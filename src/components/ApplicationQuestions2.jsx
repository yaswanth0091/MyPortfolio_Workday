import { Award, TrendingUp } from 'lucide-react';

const ApplicationQuestions2 = () => {
  const certifications = [
    {
      id: 1,
      name: 'Microsoft Azure AI-900',
      issuer: 'Microsoft E-Train India',
      date: 'Aug 2024',
      credentialId: '5mhE-4wBC',
      description: 'Foundational certification validating knowledge of core AI concepts, machine learning workflows, and Azure’s AI services.'
    },
    {
      id: 2,
      name: 'MySQL Implementation Certified Associate',
      issuer: 'Oracle University',
      date: 'July 2025',
      credentialId: '101838479MYSQLIMPOCA',
      description: 'Professional certification showcasing expertise in MySQL setup, architecture, and essential SQL operations.'
    },
    /*
    {
      id: 3,
      name: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: 'Jun 2023',
      credentialId: 'MSFT-54321-09876',
      description: 'Certification for professionals who design, build, test, and maintain cloud applications on Microsoft Azure.'
    }*/
  ];

  const achievements = [
    'Participated in multiple hackathons, building scalable applications.',
    ' Co-author of an IEEE SENNET 2025 publication on AI-powered Business Intelligence dashboards'
  ];

  return (
    <div className="application-questions-2">
      <h2 className="section-title">Achievements & Certifications</h2>
      
      <div className="certifications-section">
        <div className="section-header">
          <Award className="section-icon" />
          <h3 className="subsection-title">Professional Certifications</h3>
        </div>
        
        <div className="certifications-list">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="cert-header">
                <h4 className="cert-name">{cert.name}</h4>
                <span className="cert-date">{cert.date}</span>
              </div>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-description">{cert.description}</p>
              <p className="cert-id">Credential ID: {cert.credentialId}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="achievements-section">
        <div className="section-header">
          <TrendingUp className="section-icon" />
          <h3 className="subsection-title">Key Achievements</h3>
        </div>
        
        <ul className="achievements-list">
          {achievements.map((achievement, index) => (
            <li key={index} className="achievement-item">{achievement}</li>
          ))}
        </ul>
      </div>
      
      <style jsx="true">{`
        .application-questions-2 {
          width: 100%;
        }
        
        .certifications-section,
        .achievements-section {
          margin-bottom: 40px;
        }
        
        .section-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .section-icon {
          width: 24px;
          height: 24px;
          color: var(--workday-primary);
        }
        
        .subsection-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--workday-text);
        }
        
        .certifications-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .certification-card {
          padding: 20px;
          border: 1px solid var(--workday-border);
          border-radius: 4px;
          background-color: var(--workday-card);
          transition: border-color 0.2s;
        }
        
        .certification-card:hover {
          border-color: var(--workday-primary);
        }
        
        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 8px;
        }
        
        .cert-name {
          font-size: 16px;
          font-weight: 600;
          color: var(--workday-text);
          flex: 1;
        }
        
        .cert-date {
          font-size: 13px;
          color: var(--workday-text-light);
          white-space: nowrap;
        }
        
        .cert-issuer {
          font-size: 14px;
          color: var(--workday-primary);
          font-weight: 500;
          margin-bottom: 12px;
        }
        
        .cert-description {
          font-size: 14px;
          color: var(--workday-text);
          line-height: 1.6;
          margin-bottom: 12px;
        }
        
        .cert-id {
          font-size: 12px;
          color: var(--workday-text-light);
          font-family: monospace;
        }
        
        .achievements-section {
          padding-top: 32px;
          border-top: 1px solid var(--workday-border);
        }
        
        .achievements-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        
        .achievement-item {
          font-size: 14px;
          color: var(--workday-text);
          padding-left: 28px;
          position: relative;
          line-height: 1.7;
        }
        
        .achievement-item::before {
          content: '★';
          position: absolute;
          left: 0;
          color: var(--workday-primary);
          font-size: 16px;
        }
        
        @media (max-width: 768px) {
          .cert-header {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default ApplicationQuestions2;
