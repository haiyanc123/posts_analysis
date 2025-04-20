import React, { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Flex,
  Input,
  notification,
  Row,
  TimePicker,
} from "antd";

function ResultContainer() {
  const [api, contextHolder] = notification.useNotification();

  const [resultData, setResultData] = useState({
    date: null,
    time: null,
    socialMedia: "",
    userName: "",
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
    const { date, time, projectName, fieldName, fieldValue } = resultData;
    return projectName && fieldName && fieldValue && date && time;
  };

  const handleSubmitData = () => {
    let payload = {
      field_name: resultData.fieldName,
      field_value: resultData.fieldValue,
      post_social_media: resultData.socialMedia,
      post_time: `${resultData.date} ${resultData.time}`,
      post_username: resultData.userName,
      proj_name: resultData.projectName,
    };

    fetch("http://127.0.0.1:5000/result/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    }).then((resp) => {
      if (resp.ok) {
        api.success({
          message: "Successfully Added Result To Database",
        });
      } else {
        api.error({
          message: "There was an error",
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
                Date:
                <span
                  className={`${ResultContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <DatePicker
                name="date"
                onChange={(e, dateString) => {
                  setResultData((prevState) => ({
                    ...prevState,
                    date: dateString,
                  }));
                }}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Time:
                <span
                  className={`${ResultContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <TimePicker
                name="time"
                onChange={(e, timeString) => {
                  setResultData((prevState) => ({
                    ...prevState,
                    time: timeString,
                  }));
                }}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Post User Name:
                <span
                  className={`${ResultContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <Input
                value={resultData.userName}
                onChange={handleChangeInput}
                name="userName"
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Post Social Media:
                <span
                  className={`${ResultContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <Input
                value={resultData.socialMedia}
                onChange={handleChangeInput}
                name="socialMedia"
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
