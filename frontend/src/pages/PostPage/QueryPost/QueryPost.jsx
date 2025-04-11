import { useState } from "react";
import { Button, Col, DatePicker, Flex, Input, Radio, Row } from "antd";

function QueryPost() {
  //Creating State Data
  const [queryData, setQueryData] = useState({
    socialMedia: "",
    userName: "",
    posterName: "",
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
              <label>Poster Name:</label>
              <Input
                name="posterName"
                onChange={handleChangeInput}
                value={queryData.posterName}
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
