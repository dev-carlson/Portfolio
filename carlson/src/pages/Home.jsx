import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>
          Hi there! My name is Carl
        </h2>
        <div className="prompt">
          <p>
            As a Front-End website developer, I thrive on building beautiful and responsive
            websites that provide an enjoyable user experience.
          </p>
          <AiFillLinkedin />
          <AiOutlineMail />
          <AiFillGithub />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span> ReactJS, HTML, CSS, BootStrap, TailwindCSS</span>
          </li>

          <li className="item">
            <h2> Languages</h2>
            <span>JavaScript, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
