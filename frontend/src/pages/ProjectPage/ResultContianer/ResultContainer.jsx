import React, { useState } from "react";
import { Button, Col, Flex, Input, Row } from "antd";

function ResultContainer() {
  const [resultData, setResultData] = useState({
    projectName: "",
    fieldName: "",
    fieldValue: "",
  });

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setResultData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDisabled = () => {
    const { projectName, fieldName, fieldValue } = resultData;
    return projectName && fieldName && fieldValue;
  };

  return (
    <>
      <div>
        <p>
          <b>Enter Result</b>
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
                value={resultData.projectName}
                onChange={handleChangeInput}
                name="projectName"
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Field Name:<span className="required-star">*</span>
              </label>
              <Input
                value={resultData.fieldName}
                onChange={handleChangeInput}
                name="fieldName"
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Field Value:<span className="required-star">*</span>
              </label>
              <Input
                value={resultData.fieldValue}
                onChange={handleChangeInput}
                name="fieldValue"
              />
            </Flex>
          </Col>
        </Row>
        <Flex justify="flex-end">
          <Button color="cyan" variant="solid" disabled={!handleDisabled()}>
            Confirm
          </Button>
        </Flex>
      </div>
    </>
  );
}

ResultContainer.displayName = "result-container";

export default ResultContainer;
