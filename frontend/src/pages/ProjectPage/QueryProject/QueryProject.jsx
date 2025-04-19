import React, { useState } from "react";
import { Button, Col, Flex, Input, Row } from "antd";

import ProjectTable from "../ProjectTable/ProjectTable";

function QueryProject() {
  const [projectName, setProjectName] = useState("");
  const [data, setData] = useState(null);

  const handleSubmitButton = () => {
    const url = `http://127.0.0.1:5000/project/?proj_name=${projectName}`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp.data);
      });
  };

  return (
    <>
      <div>
        <p>
          <b>Query Project And Result</b>
        </p>
      </div>
      <div>
        <Row gutter={[24, 24]}>
          <Col>
            <Flex align="center">
              <label>
                Project Name:
                <span className="required-star">*</span>
              </label>
              <Input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                name="projectName"
              />
            </Flex>
          </Col>
        </Row>
        <Flex justify="flex-end">
          <Button
            color="cyan"
            variant="solid"
            disabled={!projectName}
            onClick={handleSubmitButton}
          >
            Confirm
          </Button>
        </Flex>
      </div>
      <hr></hr>
      <ProjectTable data={data} />
    </>
  );
}

QueryProject.displayName = "query-project";

export default QueryProject;
