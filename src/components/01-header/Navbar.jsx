import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">My Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}