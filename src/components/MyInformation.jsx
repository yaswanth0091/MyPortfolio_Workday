import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const MyInformation = () => {
  return (
    <div className="my-information">
      <h2 className="section-title">My Information</h2>
      
      <div className="info-content">
        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdaLq3UtLfUYRW0AS5f98f6sWr6LOVyqHD-WyyE3GQ82Jwz-vANcgWDYTiWFJO1Tkkds&usqp=CAU" 
              alt="Yaswanth Kumar" 
              className="profile-image"
            />
          </div>
          
          <div className="profile-details">
            <h3 className="profile-name">Chekuri Yaswanth Kumar</h3>
            <p className="profile-role">Software Engineer</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>yaswanthkumarchekuri@gmail.com</span>
              </div>
              
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+91 9182067352</span>
              </div>
              
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>Mangalagiri, Andhra Pradesh, India</span>
              </div>
              
              
              <div className="contact-item">
                <Linkedin className="contact-icon" />
                <a href="https://www.linkedin.com/in/yaswanthkumarchekuri/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/yourprofile
                </a>
              </div>
              
              <div className="contact-item">
                <Github className="contact-icon" />
                <a href="https://github.com/yaswanth0091" target="_blank" rel="noopener noreferrer">
                  github.com/yourusername
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-section">
          <h4 className="subsection-title">About Me</h4>
          <p className="about-text">
            I am a passionate Software Engineer and AI Developer with expertise in building scalable 
            applications and implementing cutting-edge AI solutions. My experience spans across full-stack 
            development, machine learning, and cloud technologies. I thrive in collaborative environments 
            and am committed to delivering high-quality, innovative solutions.
          </p>
          <p className="about-text">
            Currently seeking opportunities to contribute to impactful projects and continue growing 
            as a technologist. Feel free to explore my experience, projects, and skills in the following sections.
          </p>
        </div>
      </div>
      
      <style jsx="true">{`
        .my-information {
          width: 100%;
        }
        
        .info-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        
        .profile-section {
          display: flex;
          gap: 32px;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--workday-border);
        }
        
        .profile-image-container {
          text-align: center;
        }
        
        .profile-image {
          width: 150px;
          height: 150px;
          border-radius: 4px;
          object-fit: cover;
          border: 2px solid var(--workday-border);
        }
        
        .image-note {
          margin-top: 8px;
          font-size: 11px;
          color: var(--workday-text-light);
          font-style: italic;
        }
        
        .profile-details {
          flex: 1;
        }
        
        .profile-name {
          font-size: 24px;
          font-weight: 600;
          color: var(--workday-text);
          margin-bottom: 4px;
        }
        
        .profile-role {
          font-size: 16px;
          color: var(--workday-text-light);
          margin-bottom: 24px;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: var(--workday-text);
          font-weight: 445;
        }
        
        .contact-icon {
          width: 18px;
          height: 18px;
          color: var(--workday-primary);
          flex-shrink: 0;
        }
        
        .contact-item a {
          color: var(--workday-primary);
          text-decoration: none;
          transition: opacity 0.2s;
        }
        
        .contact-item a:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
        
        .about-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .subsection-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--workday-text);
          margin-bottom: 8px;
        }
        
        .about-text {
          font-size: 16px;
          color: var(--workday-text);
          line-height: 1.8;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .profile-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .contact-info {
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default MyInformation;
