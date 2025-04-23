import { useEffect, useState } from "react";
import { Button, Col, DatePicker, Flex, Input, Row } from "antd";

import RepostTable from "../RepostTable/RepostTable";

function QueryRepost() {
  //Creating State Data
  const [queryData, setQueryData] = useState({
    postTime: "",
    postToTime: "",
    postUserName: "",
    postSocialMedia: "",
    repostFromTime: "",
    repostToTime: "",
    repostUsername:"",
    repostSocialMedia:"",
    
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
    // const url = createQueryUrl(queryData);
    // fetch(url, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   method: "GET",
    // })
    //   .then((resp) => resp.json())
    //   .then((resp) => {
    //     setData(resp.data);
    //   });
  };

  useEffect(() => {
    handleSubmitButton();
  }, []);

  console.log("queryData", queryData)
  //Rendering UI element
  return (
    <>
      <div>
        <p>
          <b className={`${QueryRepost.displayName}-heading-para`}>Query Post</b>
        </p>
      </div>
      <div>
        <Row gutter={[24, 24]}>
          <Col>
            <Flex align="center">
              <label>Social Media:</label>
              <DatePicker
                onChange={handleChangeInput}
                name="postTime"
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>User Name:</label>
              <DatePicker
                name="postToTime"
                onChange={handleChangeInput}
                />
                </Flex>
              </Col> 
          <Col>
            <Flex align="center">
              <label>User Name:</label>
              <Input
                name="postUserName"
                onChange={handleChangeInput}
                value={queryData.userName}

              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Poster First Name:</label>
              <Input
                name="posterSocialMedia"
                onChange={handleChangeInput}
                value={queryData.posterFirstName}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Social Media:</label>
              <DatePicker
                onChange={handleChangeInput}
                name="repostFromTime"
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Social Media:</label>
              <DatePicker
                onChange={handleChangeInput}
                name="repostToTime"
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Poster Last Name:</label>
              <Input
                name="repostUserName"
                onChange={handleChangeInput}
                value={queryData.posterLastName}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Poster Last Name:</label>
              <Input
                name="repostSocialMedia"
                onChange={handleChangeInput}
                value={queryData.posterLastName}
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
      <RepostTable data={data} />
    </>
  );
}

QueryRepost.displayName = "query-post";

export default QueryRepost;
