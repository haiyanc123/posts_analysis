import React, { useState } from "react";
import { Button, Col, Flex, Input, Row } from "antd";

import ProjectTable from "../ProjectTable/ProjectTable";

function QueryProject() {
  const [projectName, setProjectName] = useState("");
  const [postData, setPostData] = useState(null);
  const [percentageData, setPercentageData] = useState(null);

  const handleSubmitButton = () => {
    const url = `http://127.0.0.1:5000/result/?proj_name=${projectName}`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.data.length > 0) {
          setPostData(resp.data[0].posts);
          setPercentageData(resp.data[0].coverage);
        } else {
          setPostData(null);
          setPercentageData(null);
        }
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
                <span className={`${QueryProject.displayName}-required-star`}>
                  *
                </span>
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
      <ProjectTable postData={postData} percentageData={percentageData} />
    </>
  );
}

QueryProject.displayName = "query-project";

export default QueryProject;
