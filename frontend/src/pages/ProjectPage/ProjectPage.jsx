import React from "react";

import ProjectContainer from "./ProjectContainer/ProjectContainer";
import ResultContainer from "./ResultContianer/ResultContainer";
import QueryProject from "./QueryProject/QueryProject";
import "./ProjectPage.css";

function ProjectPage() {
  return (
    <div className={`${ProjectPage.displayName}-main-div`}>
      <h2 className={`${ProjectPage.displayName}-heading`}>Project</h2>
      <hr></hr>
      <ProjectContainer />
      <hr></hr>
      <ResultContainer />
      <hr></hr>
      <QueryProject />
    </div>
  );
}

ProjectPage.displayName = "project-page";

export default ProjectPage;
