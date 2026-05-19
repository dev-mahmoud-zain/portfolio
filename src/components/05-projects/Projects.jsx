import "./projects.css";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="title">My Projects</h2>

      <div className="container">
        <ProjectsList />
      </div>
    </section>
  );
}
