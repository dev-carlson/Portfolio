import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.facebook.com/carlson.roman" target="_blank">
          <AiFillFacebook />
        </a>
        <a
          href="https://github.com/bozbez/win-capture-audio/releases/"
          target="_blank"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/carl-son-roman-0ba75a267/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <p> &copy; 2023 N/A </p>
    </div>
  );
};

export default Footer;
