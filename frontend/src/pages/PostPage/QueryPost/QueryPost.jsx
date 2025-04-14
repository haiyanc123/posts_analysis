import { useState } from "react";
import { Button, Col, DatePicker, Flex, Input, Radio, Row } from "antd";

function QueryPost() {
  //Creating State Data
  const [queryData, setQueryData] = useState({
    socialMedia: "",
    userName: "",
    posterFirstName: "",
    posterLastName: "",
    fromDate: "",
    toDate: "",
  });

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

  //Rendering UI element
  return (
    <>
      <div>
        <p>
          <b className={`${QueryPost.displayName}-heading-para`}>Enter Post</b>
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
                value={queryData.fromData}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>To Date:</label>
              <DatePicker
                name="toDate"
                onChange={(date, value) => handleChangeData("toDate", value)}
                value={queryData.toDate}
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

QueryPost.displayName = "query-post";

export default QueryPost;
