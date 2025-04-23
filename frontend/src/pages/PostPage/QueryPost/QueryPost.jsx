import { useEffect, useState } from "react";
import { Button, Col, DatePicker, Flex, Input, Row, TimePicker } from "antd";

import PostTable from "../PostTable/PostTable";
import { createQueryUrl } from "./helper";

function QueryPost() {
  //Creating State Data
  const [queryData, setQueryData] = useState({
    socialMedia: "",
    userName: "",
    posterFirstName: "",
    posterLastName: "",
    fromDate: "",
    fromDateTime: "",
    toDate: "",
    toDateTime: "",
  });

  const [data, setData] = useState(null);

  //Handing Input Changes
  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQueryData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeData = (id, value) => {
    setQueryData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitButton = () => {
    const payload = {
      socialMedia: queryData.socialMedia,
      userName: queryData.userName,
      posterFirstName: queryData.posterFirstName,
      posterLastName: queryData.posterLastName,
      fromDate: queryData.fromDate
        ? `${queryData.fromDate} ${queryData.fromDateTime}`
        : "",
      toDate: queryData.toDate
        ? `${queryData.toDate} ${queryData.toDateTime}`
        : "",
    };

    const url = createQueryUrl(payload);
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

  useEffect(() => {
    handleSubmitButton();
  }, []);

  //Rendering UI element
  return (
    <>
      <div>
        <p>
          <b className={`${QueryPost.displayName}-heading-para`}>Query Post</b>
        </p>
      </div>
      <div>
        <Row gutter={[24, 24]}>
          <Col>
            <Flex align="center">
              <label>Social Media:</label>
              <Input
                value={queryData.socialMedia}
                onChange={handleChangeInput}
                name="socialMedia"
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>User Name:</label>
              <Input
                name="userName"
                onChange={handleChangeInput}
                value={queryData.userName}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Poster First Name:</label>
              <Input
                name="posterFirstName"
                onChange={handleChangeInput}
                value={queryData.posterFirstName}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Poster Last Name:</label>
              <Input
                name="posterLastName"
                onChange={handleChangeInput}
                value={queryData.posterLastName}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>From Date:</label>
              <DatePicker
                name="fromDate"
                onChange={(date, value) => handleChangeData("fromDate", value)}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>From Date Time:</label>
              <TimePicker
                name="fromDateTime"
                onChange={(date, value) =>
                  handleChangeData("fromDateTime", value)
                }
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>To Date:</label>
              <DatePicker
                name="toDate"
                onChange={(date, value) => handleChangeData("toDate", value)}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>To Date Time:</label>
              <TimePicker
                name="toDateTime"
                onChange={(date, value) =>
                  handleChangeData("toDateTime", value)
                }
              />
            </Flex>
          </Col>
        </Row>
        <Flex justify="flex-end">
          <Button color="cyan" variant="solid" onClick={handleSubmitButton}>
            Confirm
          </Button>
        </Flex>
      </div>
      <hr></hr>
      <PostTable data={data} />
    </>
  );
}

QueryPost.displayName = "query-post";

export default QueryPost;
