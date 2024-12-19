import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';
import profileImage from "./profile.jpg";
import leetcodeLogo from "./leet-logo2.png";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-image">
        <img src={profileImage} alt="Sravya Gandla" />
      </div>
      <div className="home-content">
        <h1 id="p2">Hello, I'm <span className="highlight">"Sravya Gandla"</span></h1>
        <p id="p1">And I'm good at "Front-end Development"<br />
         and "Machine Learning"</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sravya-gandla/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Sravya2134" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://leetcode.com/u/Sravya3Gandla/" target="_blank" rel="noopener noreferrer">
            <img src={leetcodeLogo} alt="LeetCode" style={{ width: '35px', height: '35px' }} />
          </a>
        </div>
        <a href="https://drive.google.com/file/d/1b4BHCZaH0VzyuXNIfc6hxoZ9hGaW1Sa0/view?usp=drive_link" download="Sravya Gandla_Resume.pdf" className="btn btn-resume">Download Resume</a>
      </div>
    </section>
  );
}

export default Home;
