import { useState, useCallback } from "react";
import { Button, Col, Flex, Input, Radio, Row } from "antd";

import CustomTemplates from "../../../components/customTemplates/CustomTemplates.jsx";

function ProjectContainer() {
  //Creating State Data
  const [projectData, setProjectData] = useState({
    projectName: "",
    manager: "",
    institute: "",
    end_date: "",
    start_date: "",
  });

  //Handing Input Changes
  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("e", e)
    console.log("name", name)
    console.log("value", value)

    setProjectData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  //Rendering UI element
  return (
    <>
      <div>
        <p>
          <b className={`${ProjectContainer.displayName}-heading-para`}>
            Enter Project
          </b>
        </p>
      </div>
      <div>
        <Row gutter={[24, 24]}>
          <Col>
            <Flex align="center">
              <label>Project Name:</label>
              <Input
                value={projectData.projectName}
                onChange={handleChangeInput}
                name="projectName"
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>institute:</label>
              <Input
                name="institute"
                onChange={handleChangeInput}
                value={projectData.institute}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Start Date:</label>
              <Input
                name="start_date"
                onChange={handleChangeInput}
                value={projectData.start_date}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>End Date:</label>
              <Input
                name="end_date"
                onChange={handleChangeInput}
                value={projectData.end_date}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>manager:</label>
              <Input
                name="manager"
                onChange={handleChangeInput}
                value={projectData.manager}
              />
            </Flex>
          </Col>
        </Row>
        <Flex justify="flex-end">
          <Button color="cyan" variant="solid">
            Confirm
          </Button>
        </Flex>
      </div>
    </>
  );
}

ProjectContainer.displayName = "post-container";

export default ProjectContainer;
