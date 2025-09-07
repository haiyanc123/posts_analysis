import { useState } from "react";
import { Button, Col, DatePicker, Flex, Input, notification, Row } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { getDate } from "../../../helper/getDate";

function ProjectContainer() {
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";

  //Creating State Data
  const [api, contextHolder] = notification.useNotification();
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

    setProjectData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitData = () => {
    let payload = {
      proj_name: projectData.projectName,
      institute: projectData.institute,
      manager: projectData.manager,
      start_date: projectData.start_date,
      end_date: projectData.end_date,
    };

    fetch("http://127.0.0.1:5000/project/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.success) {
          api.success({
            message: "Successfully Added Project To Database",
          });
        } else {
          api.error({
            message: resp.error,
          });
        }
      });
  };

  const handleDisabled = () => {
    const { projectName, manager, institute, end_date, start_date } =
      projectData;

    return projectName && manager && institute && end_date && start_date;
  };

  //Rendering UI element
  return (
    <>
      {contextHolder}
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
              <label>
                Project Name:
                <span
                  className={`${ProjectContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
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
              <span className={`${ProjectContainer.displayName}-required-star`}>
                *
              </span>
              <Input
                name="institute"
                onChange={handleChangeInput}
                value={projectData.institute}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Start Date:
                <span
                  className={`${ProjectContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <DatePicker
                name="start_date"
                onChange={(e, dateString) => {
                  setProjectData((prevState) => ({
                    ...prevState,
                    start_date: dateString,
                  }));
                }}
                maxDate={dayjs(getDate(), dateFormat)}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                End Date:
                <span
                  className={`${ProjectContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <DatePicker
                name="end_date"
                onChange={(e, dateString) => {
                  setProjectData((prevState) => ({
                    ...prevState,
                    end_date: dateString,
                  }));
                }}
                maxDate={dayjs(getDate(), dateFormat)}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Manager:
                <span
                  className={`${ProjectContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <Input
                name="manager"
                onChange={handleChangeInput}
                value={projectData.manager}
              />
            </Flex>
          </Col>
        </Row>
        <Flex justify="flex-end">
          <Button
            color="cyan"
            variant="solid"
            onClick={handleSubmitData}
            disabled={!handleDisabled()}
          >
            Confirm
          </Button>
        </Flex>
      </div>
    </>
  );
}

ProjectContainer.displayName = "post-container";

export default ProjectContainer;
