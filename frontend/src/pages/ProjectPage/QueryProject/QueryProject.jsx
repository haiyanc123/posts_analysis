import React, { useState } from "react";
import { Button, Col, Flex, Input, Row } from "antd";

function QueryProject() {
  const [projectName, setProjectName] = useState("");

  return (
    <>
      <div>
        <p>
          <b>Query Project</b>
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
          <Button color="cyan" variant="solid" disabled={!projectName}>
            Confirm
          </Button>
        </Flex>
      </div>
    </>
  );
}

QueryProject.displayName = "query-project";

export default QueryProject;
