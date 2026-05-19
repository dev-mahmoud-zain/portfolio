import React, { useState } from "react";
import { backendProjects } from "./my-projects";

export default function ProjectsList() {
  const [showMore, setShowMore] = useState(backendProjects.map(() => false));

  function toggleShowMore(index) {
    const updated = [...showMore];
    updated[index] = !updated[index];
    setShowMore(updated);
  }

  return (
    <div className="projects-list">
      {backendProjects.map((project, index) => {
        return (
          <div
            className="outer-card"
            key={index}
          >
            <div className="inner-card">
              {project.status === "soon" && <div className="status-label">Coming Soon</div>}
              <img src={project.image} alt={project.name + " Backend Project"} />
              <h3 className="project-title">{project.name}</h3>

              <p className={`description short ${showMore[index] && "hide"}`}>
                {project.shortDescription}
              </p>

              <p className={`description ${!showMore[index] && "hide"}`}>
                {project.description}
              </p>

              <div className="card-footer">
                <div>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View project source code on GitHub"
                      aria-label="Open the GitHub repository for this project"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  )}
                  {project.links.documentation && (
                    <a
                      href={project.links.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View project documentation"
                      aria-label="Open the project documentation"
                    >
                      <i className="fa-regular fa-file"></i>
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View live project"
                      aria-label="Open the project"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  )}
                </div>

                <button onClick={() => toggleShowMore(index)}>
                  {showMore[index] ? "Less Info" : "More Info"}{" "}
                  <i
                    className={`fa-solid fa-angle-down ${showMore[index] && "up"
                      }`}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}