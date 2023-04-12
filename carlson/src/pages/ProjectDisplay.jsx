import React from "react";
import { useParams } from "react-router-dom";
import {} from "../helpers/ProjectLists";
import { AiFillGithub } from "react-icons/ai";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>
        { project.name }
        <img src= { project.image }/>
        <AiFillGithub/>
      </h1>
    </div>
  );
}

export default ProjectDisplay;
