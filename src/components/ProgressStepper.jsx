import { Check } from 'lucide-react';

const ProgressStepper = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="progress-stepper">
      {steps.map((step, index) => (
        <div key={step.id} className="stepper-item-wrapper">
          <div 
            className="stepper-item"
            onClick={() => onStepClick(step.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="stepper-circle-wrapper">
              <div className={`stepper-circle ${
                index < currentStep ? 'completed' : 
                index === currentStep ? 'active' : 'inactive'
              }`}>
                {index < currentStep ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <span className="stepper-number">{index === currentStep ? '' : ''}</span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`stepper-line ${
                  index < currentStep ? 'completed' : 'inactive'
                }`}></div>
              )}
            </div>
            <div className="stepper-label">{step.label}</div>
          </div>
        </div>
      ))}
      
      <style jsx="true">{`
        .progress-stepper {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 40px;
          padding: 0 20px;
        }
        
        .stepper-item-wrapper {
          flex: 1;
          min-width: 0;
        }
        
        .stepper-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .stepper-circle-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center; /* center the circle in the step area */
          width: 100%;
          margin-bottom: 12px;
        }
        
        .stepper-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          background-color: var(--workday-card);
          transition: all 0.3s;
        }
        
        .stepper-circle.active {
          background-color: var(--workday-primary);
          border: 3px solid var(--workday-primary);
        }
        
        .stepper-circle.completed {
          background-color: var(--workday-primary);
          border: 3px solid var(--workday-primary);
        }
        
        .stepper-circle.inactive {
          background-color: var(--workday-card);
          border: 3px solid #D0D0D0;
        }
        
        .stepper-number {
          font-size: 14px;
          font-weight: 600;
          color: var(--workday-text-light);
        }
        
        .stepper-line {
          position: absolute;
          left: 50%; /* start from center of this step */
          right: -50%;
          top: 50%;
          height: 3px;
          transform: translateY(-50%);
          z-index: 1;
        }
        
        .stepper-line.completed {
          background-color: var(--workday-primary);
        }
        
        .stepper-line.inactive {
          background-color: #D0D0D0;
        }
        
        .stepper-label {
          font-size: 13px;
          color: var(--workday-text);
          text-align: center;
          font-weight: 500;
          line-height: 1.3;
          max-width: 120px;
        }
        
        @media (max-width: 768px) {
          .progress-stepper {
            padding: 0;
            overflow-x: auto;
          }
          
          .stepper-label {
            font-size: 11px;
            max-width: 80px;
          }
          
          .stepper-circle {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProgressStepper;
