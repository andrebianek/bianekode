import React from "react";
import profilePic from "../assets/images/profile-pic.jpg";
import "./About.css";

function About() {
  return (
    <div className="container">
      <h1 className="about-title">About</h1>
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="about-profile" />
        <p>
          Hi! I'm Andre, currently
          working as a Data Analyst for{" "}
          <a
            href="https://www.lseg.com/en/data-analytics"
            target="_blank"
            rel="noopener noreferrer"
          >
            LSEG Data & Analytics
          </a>
          . 
          </p>
          <p>
          I'm studying Computer Science at {" "}
          <a
            href="https://vistula.edu.pl/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vistula University
          </a>{" "}
          in Warsaw, Poland.
        </p>
        <p>
          My biggest hobbies are martial arts and gaming.
        </p>
        <p>
          This website was made with  {" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://particles.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-tsparticles
          </a>
          , and{" "}
          <a
            href="https://reactrouter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-router-dom
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
