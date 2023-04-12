import React from "react";
import "../styles/projects.css";
import ProjectItem from "../components/ProjectItem";
import ProjectLists from "../helpers/ProjectLists"

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectLists.map((project) => {
          return <ProjectItem name={project.name} image={project.image}/>
        })}
      </div>
    </div>
  );
}

export default Projects;
