import React, { useState } from "react";
import { backendProjects, frontendProjects, fullstackProjects } from "./my-projects";

export default function ProjectsList({ activeButton }) {
  const [showMore, setShowMore] = useState(backendProjects.map(() => false));

  function toggleShowMore(index) {
    const updated = [...showMore];
    updated[index] = !updated[index];
    setShowMore(updated);
  }

  return (
    <div className="projects-list">




      {(activeButton === "all" || activeButton === "backend") && backendProjects.map((project, index) => {
        return (
          <div
            className="outer-card"
            key={index}
          >
            <div className="inner-card">
              {project.status === "soon" && <div className="status-label">Coming Soon</div>}
              <img src={project.image} alt={project.name} />
              <h4 className="project-title">{project.name}</h4>

              <p className={`description short ${showMore[index] && "hide"}`}>
                {project.shortDescription}
              </p>

              <p className={`description ${!showMore[index] && "hide"}`}>
                {project.description}
              </p>

              <div className="card-footer">
                <div>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View project source code on GitHub"
                    aria-label="Open the GitHub repository for this project"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href={project.links.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View project documentation"
                    aria-label="Open the project documentation"
                  >
                    <i className="fa-regular fa-file"></i>
                  </a>
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

      {/* ========================================================== */}

      {(activeButton === "all" || activeButton === "frontend") && frontendProjects.map((project, index) => {
        index = index + 90;
        return (
          <div
            className="outer-card"
            key={index}
          >
            <div className="inner-card">
              {project.status === "soon" && <div className="status-label">Coming Soon</div>}
              <img src={project.image} alt={project.name} />
              <h4 className="project-title">{project.name}</h4>

              <p className={`description short ${showMore[index] && "hide"}`}>
                {project.shortDescription}
              </p>

              <p className={`description ${!showMore[index] && "hide"}`}>
                {project.description}
              </p>

              <div className="card-footer">
                <div>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View project source code on GitHub"
                    aria-label="Open the GitHub repository for this project"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View live project"
                    aria-label="Open the project"
                  >
                    <i className="fa-solid fa-link"></i>{" "}
                  </a>
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


      {/* ========================================================== */}


      {(activeButton === "all" || activeButton === "full-stack") && fullstackProjects.map((project, index) => {
        index = index + 200;
        return (
          <div
            className="outer-card only"
            key={index}
          >
            <div className="inner-card">
              {project.status === "soon" && <div className="status-label">Coming Soon</div>}
              <img src={project.image} alt={project.name} />
              <h4 className="project-title">{project.name}</h4>

              <p className={`description short ${showMore[index] && "hide"}`}>
                {project.shortDescription}
              </p>

              <p className={`description ${!showMore[index] && "hide"}`}>
                {project.description}
              </p>

              <div className="card-footer">
                <div>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View project source code on GitHub"
                    aria-label="Open the GitHub repository for this project"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View live project"
                    aria-label="Open the project"
                  >
                    <i className="fa-solid fa-link"></i>{" "}
                  </a>
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
