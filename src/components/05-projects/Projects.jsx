import { useState } from "react";
import Buttons from "./Buttons";
import "./projects.css";
import ProjectsList from "./ProjectsList";

export default function Projects() {


    const [activeButton, setActiveButton] = useState("all");



  return (
    <section id="projects" className="projects">
      <h2 className="title">My Projects</h2>

      <div className="container">
        <Buttons activeButton={activeButton} setActiveButton={setActiveButton} />

        <ProjectsList activeButton={activeButton} />
      </div>
    </section>
  );
}
