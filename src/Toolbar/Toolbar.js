import React from "react";
import "./toolbar.css";
import webDev from "../assets/icons/webDev.png";
import ResumeIcon from "../assets/icons/resume_icon.png";
import Resume from "../assets/docs/Resume.pdf";

const Toolbar = (props) => {
  const downloadResume = () => {
    window.location =
      "C:/Users/dineshkumar/portfolioDk2912-main/src/assets/docs/Resume.pdf";
  };
  return (
    <header className="toolbar_header">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <div style={{ padding: "1rem", display: "flex" }}>
            <img width="50px" height="50px" src={webDev}></img>
            <div
              style={{
                fontFamily: "Work Sans, sans-serif",
                fontSize: "30px",
                fontWeight: "400",
                color: "white",
                paddingTop: "0.8rem",
                paddingLeft: "1rem",
              }}
            >
              Dinesh kumar
            </div>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="toolbar_navigationItems">
          <a
            href={Resume}
            download="Dinesh's Resume"
            target="_blank"
            title="Dinesh's Resume"
          >
            <div
              style={{
                padding: "1rem",
                fontWeight: "700",
                fontSize: "18px",
                fontFamily: "Work Sans, sans-serif",
              }}
              onClick={() => downloadResume()}
            >
              <img
                alt="Resume"
                width="50px"
                height="50px"
                src={ResumeIcon}
              ></img>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
