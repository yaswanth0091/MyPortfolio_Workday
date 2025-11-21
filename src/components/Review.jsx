import { Download, Mail, Phone, Linkedin, Github, MapPin, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const Review = () => {
  const handleDownloadResume = () => {
  const driveUrl = "https://drive.google.com/uc?export=download&id=1PXJRD4DZKQiaUHRmZS2FSN7MeliTh_ZP";
  window.open(driveUrl, "_blank");
};


  return (
    <div className="review">
      <h2 className="section-title">Review</h2>
      
      <p className="review-intro">
        Thank you for reviewing my portfolio! Below is a comprehensive summary of my profile, 
        experience, skills, and interests. Feel free to download my resume or reach out to me 
        directly using the contact information provided.
      </p>
      
      <div className="review-section">
        <div className="review-header">
          <CheckCircle className="review-icon" />
          <h3 className="review-section-title">Personal Information</h3>
        </div>
        <div className="review-content">
          <p><strong>Name:</strong> Chekuri Yaswanth Kumar</p>
          <p><strong>Role:</strong> Software Engineer</p>
          <div className="contact-summary">
            <div className="contact-item-review">
              <Mail className="contact-icon-small" />
              <span>yaswanthkumarcheuri@gmail.com</span>
            </div>
            <div className="contact-item-review">
              <Phone className="contact-icon-small" />
              <span>+91 918206+7352</span>
            </div>
            <div className="contact-item-review">
              <MapPin className="contact-icon-small" />
              <span>Mangalagiri, Andhra Pradesh, India</span>
            </div>
            <div className="contact-item-review">
              <Linkedin className="contact-icon-small" />
              <a href="https://www.linkedin.com/in/yaswanthkumarchekuri/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </div>
            <div className="contact-item-review">
              <Github className="contact-icon-small" />
              <a href="https://github.com/yaswanth0091" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="review-section">
        <div className="review-header">
          <CheckCircle className="review-icon" />
          <h3 className="review-section-title">Experience Summary</h3>
        </div>
        <div className="review-content">
          <p>5 diverse projects showcasing full-stack development, AI/ML engineering, and modern web technologies.</p>
          <ul className="summary-list">
            <li>AI-powered BI Dashboard with LSTM forecasting, OCR, NLP, and automated insight generation.</li>
            <li>Lost & Found web app with similarity matching using Levenshtein distance and SQLite backend.</li>
            <li>Farm Intel: Crop recommendation engine using Random Forest, weather API, and farmer-friendly UI.</li>
            <li>Instagram clone with authentication, image posting, feeds, likes, and responsive UI.</li>
            <li>VIT Faculty Review Platform with dynamic search, real-time reviews, and full-stack deployment.</li>
          </ul>
        </div>
      </div>
      
      <div className="review-section">
        <div className="review-header">
          <CheckCircle className="review-icon" />
          <h3 className="review-section-title">Key Skills</h3>
        </div>
        <div className="review-content">
          <p><strong>Programming Languages:</strong> C++, Java, Python, C, Basics of R</p>
          <p><strong>Web Development:</strong> HTML5, CSS3, JavaScript, Flask, PHP, MySQL</p>
          <p><strong>Cloud Tools & Technologies:</strong> AWS, Azure, Git</p>
        </div>
      </div>
      
      <div className="review-section">
        <div className="review-header">
          <CheckCircle className="review-icon" />
          <h3 className="review-section-title">Certifications</h3>
        </div>
        <div className="review-content">
          <ul className="summary-list">
            <li>Microsoft Azure AI-900 (Aug 2024)</li>
            <li>MySQL Implementation Certified Associate (Jul 2025)</li>
          </ul>
        </div>
      </div>
      
      <div className="review-section">
        <div className="review-header">
          <CheckCircle className="review-icon" />
          <h3 className="review-section-title">Interests</h3>
        </div>
        <div className="review-content">
          <p><strong>Personal Hobbies:</strong> Music, Fitness, Photography, Community Service</p>
          <p><strong>Details:</strong> Enjoy music across genres, regular gym workouts and running, landscape photography, and volunteering at blood donation camps.</p>
          <p><strong>Professional Interests:</strong> Artificial Intelligence, Machine Learning, Hackathons, Solving real-world tech problems, Cloud Computing, DevOps, Sustainable Technology</p>
        </div>
      </div>
      
      <div className="resume-download">
        <Button 
          onClick={handleDownloadResume}
          className="download-button"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </Button>
        <p className="download-note">
          Click to download my complete resume in PDF format
        </p>
      </div>
      
      <div className="thank-you">
        <p>Thank you for taking the time to review my portfolio. I look forward to connecting with you!</p>
      </div>
      
      <style jsx="true">{`
        .review {
          width: 100%;
        }
        
        .review-intro {
          font-size: 14px;
          color: var(--workday-text);
          line-height: 1.7;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--workday-border);
        }
        
        .review-section {
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--workday-border);
        }
        
        .review-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        
        .review-icon {
          width: 22px;
          height: 22px;
          color: var(--workday-primary);
        }
        
        .review-section-title {
          font-size: 17px;
          font-weight: 600;
          color: var(--workday-text);
        }
        
        .review-content {
          padding-left: 32px;
        }
        
        .review-content p {
          font-size: 14px;
          color: var(--workday-text);
          line-height: 1.7;
          margin-bottom: 12px;
        }
        
        .review-content strong {
          font-weight: 600;
          color: var(--workday-text);
        }
        
        .contact-summary {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 16px;
        }
        
        .contact-item-review {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--workday-text);
        }
        
        .contact-icon-small {
          width: 16px;
          height: 16px;
          color: var(--workday-primary);
        }
        
        .contact-item-review a {
          color: var(--workday-primary);
          text-decoration: none;
        }
        
        .contact-item-review a:hover {
          text-decoration: underline;
        }
        
        .summary-list {
          margin-top: 12px;
          padding-left: 20px;
        }
        
        .summary-list li {
          font-size: 14px;
          color: var(--workday-text);
          line-height: 1.8;
          margin-bottom: 8px;
        }
        
        .resume-download {
          margin: 40px 0;
          padding: 32px;
          background-color: var(--workday-bg);
          border: 1px solid var(--workday-border);
          border-radius: 4px;
          text-align: center;
        }
        
        .download-button {
          background-color: var(--workday-primary);
          color: white;
          padding: 12px 32px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          transition: background-color 0.2s;
        }
        
        .download-button:hover {
          background-color: #005BB5;
        }
        
        .download-note {
          margin-top: 12px;
          font-size: 13px;
          color: var(--workday-text-light);
        }
        
        .thank-you {
          text-align: center;
          padding: 24px;
          font-size: 15px;
          color: var(--workday-text);
          font-weight: 500;
          background-color: var(--workday-hover);
          border-radius: 4px;
        }
        
        @media (max-width: 768px) {
          .review-content {
            padding-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Review;
