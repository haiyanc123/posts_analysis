import React from "react";
import ProjectContainer from "./ProjectContainer/ProjectContainer";

function ProjectPage() {
  return (
    <div>
      <h2>Project</h2>
      <hr></hr>
      <ProjectContainer />
    </div>
  );
}

ProjectPage.displayName = "project-page";

export default ProjectPage;
