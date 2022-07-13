import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const ProjectList = projects.map(project=>{
    return(
    <ProjectItem {...project} key={project.id}/>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      {ProjectList}
     
      </div>
    </div>
  );
  
}

export default ProjectList;
