import { useState } from 'react';
import './App.css';
import TopNavigation from './components/TopNavigation';
import ProgressStepper from './components/ProgressStepper';
import MyInformation from './components/MyInformation';
import MyExperience from './components/MyExperience';
import ApplicationQuestions1 from './components/ApplicationQuestions1';
import ApplicationQuestions2 from './components/ApplicationQuestions2';
import VoluntaryDisclosures from './components/VoluntaryDisclosures';
import Review from './components/Review';
import { Button } from './components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const steps = [
    { id: 0, label: 'My Information', component: MyInformation },
    { id: 1, label: 'My Experience', component: MyExperience },
    { id: 2, label: 'Application Questions 1 of 2', component: ApplicationQuestions1 },
    { id: 3, label: 'Application Questions 2 of 2', component: ApplicationQuestions2 },
    { id: 4, label: 'Voluntary Disclosures', component: VoluntaryDisclosures },
    { id: 5, label: 'Review', component: Review }
  ];

  const CurrentStepComponent = steps[currentStep].component;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleStepClick = (stepId) => {
    setCurrentStep(stepId);
    window.scrollTo(0, 0);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="workday-app">
        <TopNavigation darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <div className="workday-container">
          <div className="workday-sidebar"></div>
          
          <div className="workday-content">
            <div className="workday-card">
              <div className="workday-header">
                <h1 className="workday-title">Yaswanth Kumar</h1>
                <p className="workday-subtitle">Portfolio</p>
              </div>

              <ProgressStepper 
                steps={steps} 
                currentStep={currentStep} 
                onStepClick={handleStepClick}
              />

              <div className="workday-step-content">
                <CurrentStepComponent />
              </div>

              <div className="workday-navigation">
                {currentStep > 0 && (
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="nav-button"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back
                  </Button>
                )}
                
                <div className="flex-grow"></div>
                
                {currentStep < steps.length - 1 && (
                  <Button
                    onClick={handleNext}
                    className="nav-button nav-button-primary"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          </div>
          
          <div className="workday-sidebar"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
