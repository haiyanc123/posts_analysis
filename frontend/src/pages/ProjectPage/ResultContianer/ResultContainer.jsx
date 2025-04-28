import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Flex,
  Input,
  notification,
  Row,
  Select,
  TimePicker,
} from "antd";

function ResultContainer() {
  const [api, contextHolder] = notification.useNotification();

  const [resultData, setResultData] = useState({
    post: "",
    projectName: "",
    fieldName: "",
    fieldValue: "",
  });
  const [dropdownOptions, setDropdownOptions] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/post/dropdown", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.success) {
          const options = resp.data.map((item) => ({
            value: item,
            label: item,
          }));
          setDropdownOptions(options);
        }
      });
  }, []);

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setResultData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDisabled = () => {
    const { post, projectName, fieldName, fieldValue } = resultData;
    return projectName && fieldName && fieldValue && post;
  };

  const handleSubmitData = () => {
    let payload = {
      field_name: resultData.fieldName,
      field_value: resultData.fieldValue,
      post: resultData.post,
      proj_name: resultData.projectName,
    };

    fetch("http://127.0.0.1:5000/result/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.ok) {
          api.success({
            message: "Successfully Added Result To Database",
          });
        } else {
          api.error({
            message: resp.error,
          });
        }
      });
  };

  return (
    <>
      {contextHolder}
      <div>
        <p>
          <b>Enter Project Result Information</b>
        </p>
      </div>
      <div>
        <Row gutter={[24, 24]}>
          <Col>
            <Flex align="center">
              <label>
                Post:
                <span
                  className={`${ResultContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <Select
                options={dropdownOptions}
                onChange={(value) =>
                  setResultData((prevState) => ({
                    ...prevState,
                    post: value,
                  }))
                }
                style={{ width: "400px" }}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Project Name:
                <span
                  className={`${ResultContainer.displayName}-required-star`}
                >
                  *
                </span>
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
                Field Name:
                <span
                  className={`${ResultContainer.displayName}-required-star`}
                >
                  *
                </span>
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
                Field Value:
                <span
                  className={`${ResultContainer.displayName}-required-star`}
                >
                  *
                </span>
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
          <Button
            color="cyan"
            variant="solid"
            disabled={!handleDisabled()}
            onClick={handleSubmitData}
          >
            Confirm
          </Button>
        </Flex>
      </div>
    </>
  );
}

ResultContainer.displayName = "result-container";

export default ResultContainer;
