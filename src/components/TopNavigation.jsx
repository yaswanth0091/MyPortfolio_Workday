import { Settings, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

const TopNavigation = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="top-navigation">
      {/* Top slim bar: settings + email on right */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-left" />
          <div className="top-bar-right">
            <span className="nav-email">yaswanthkumarchekuri@gmail.com</span>

            <Button
              variant="ghost"
              size="icon"
              className="nav-icon-button"
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode && setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
            </Button>

            <Button variant="ghost" size="icon" className="nav-icon-button" aria-label="Settings">
              <Settings className="icon" />
            </Button>
          </div>
        </div>
      </div>

      {/* Secondary row: nav links below the top bar */}
      <div className="sub-nav">
        <div className="sub-nav-content">
          <div className="sub-nav-left" />
          <div className="sub-nav-right">
            <a href="#" className="nav-link" title="yes searching for a job">Search for Jobs</a>
            <a href="#" className="nav-link" title="shared my hometown info below check it pls">Candidate Home</a>
            <a href="#" className="nav-link" title="yes i want job alerts">Job Alerts</a>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .top-navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          width: 100%;
        }

        .top-bar {
          background: var(--workday-card);
          border-bottom: 1px solid var(--workday-border);
          height: 44px; /* slim top bar */
          display: flex;
          align-items: center;
        }

        .top-bar-content {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sub-nav {
          background: var(--workday-card);
          border-bottom: 1px solid var(--workday-border);
          height: 56px; /* secondary nav height */
          display: flex;
          align-items: center;
        }

        .sub-nav-content {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sub-nav-right {
          display: flex;
          gap: 28px;
          align-items: center;
          margin-left: auto;
        }

        .nav-link {
          color: var(--workday-text);
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
        }

        .nav-link:hover {
          color: var(--workday-primary);
        }

        .nav-email {
          color: var(--workday-text-light);
          font-size: 16px;
          white-space: nowrap;
          font-weight: 600;
        }

        .nav-icon-button {
          color: var(--workday-text-light);
          padding: 6px;
        }

        .icon {
          width: 18px;
          height: 18px;
        }

        @media (max-width: 900px) {
          .sub-nav-right {
            display: none; /* hide links on smaller screens */
          }

          .nav-email {
            display: none; /* hide email on smaller screens */
          }
        }

        /* add spacing to avoid content under fixed nav */
        body > .app-padding-fix {
          padding-top: 100px; /* top-bar + sub-nav height (44 + 56) = 100 */
        }
      `}</style>
    </nav>
  );
};

export default TopNavigation;
 