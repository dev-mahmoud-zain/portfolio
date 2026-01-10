import React from "react";
import "./skills.css";
export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="title">Skills</h2>
      <div className="cards">
        <div className="outer-card">
          <div className="inner-card">
            <h3>Backend</h3>
            <h4>Node.js</h4>
            <h4>Express.js</h4>
            <h4>MongoDB</h4>
            <h4>RESTful APIs</h4>
            <h4>Authentication & Authorization (JWT, Roles)</h4>
            <h4>API Validation & Error Handling</h4>
          </div>
        </div>
        <div className="outer-card">
          <div className="inner-card">
            <h3>Frontend</h3>
            <h4>React.js</h4>
            <h4>JavaScript (ES6+)</h4>
            <h4>HTML5</h4>
            <h4>CSS3</h4>
            <h4>Responsive Design</h4>
            <h4>Component-based Architecture</h4>
          </div>
        </div>
        <div className="outer-card">
          <div className="inner-card">
            <h3>Security & Performance</h3>
            <h4>JWT Authentication</h4>
            <h4>Password Hashing (bcrypt)</h4>
            <h4>CORS & Security Headers</h4>
            <h4>Rate Limiting</h4>
            <h4>Input Sanitization</h4>
            <h4>Performance Optimization</h4>
          </div>
        </div>
        <div className="outer-card">
          <div className="inner-card">
            <h3>Tools</h3>
            <h4>Git & GitHub</h4>
            <h4>Postman</h4>
            <h4>VS Code</h4>
            <h4>NPM</h4>
            <h4>Environment Setup</h4>
            <h4>Debugging & Logging</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
