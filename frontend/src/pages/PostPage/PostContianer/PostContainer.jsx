import { useState, useCallback } from "react";
import { Button, Col, Flex, Input, Radio, Row } from "antd";

import { postPageInputMappers } from "./helper.js";
import CustomTemplates from "../../../components/customTemplates/CustomTemplates.jsx";

function PostContainer() {
  //Creating State Data
  const [postData, setPostData] = useState({
    postId: "",
    userName: "",
    socialMedia: "",
    text: "",
    hasMultimedia: false,
    time: "",
    likesNum: "",
    dislikeNum: "",
    city: "",
    state: "",
    country: "",
    projectName: "",
  });

  //Handing Input Changes
  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name", name);
    console.log("value", value);
    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Mapping handleChangeInput function to mapper variable. Might not need this
  const postInputMappers = postPageInputMappers.map((item) => {
    const getValue = postData[item.name];
    return {
      ...item,
      onChange: handleChangeInput,
      value: getValue,
    };
  });

  //Rendering UI element
  return (
    <>
      <div>
        <p>
          <b className={`${PostContainer.displayName}-heading-para`}>
            Enter Post
          </b>
        </p>
      </div>
      <div>
        <Row gutter={[24, 24]}>
          <Col>
            <Flex align="center">
              <label>Post Id:</label>
              <Input
                value={postData.postId}
                onChange={handleChangeInput}
                name="postId"
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>User Name:</label>
              <Input
                name="userName"
                onChange={handleChangeInput}
                value={postData.userName}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Social Media:</label>
              <Input
                name="socialMedia"
                onChange={handleChangeInput}
                value={postData.socialMedia}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Text:</label>
              <Input
                name="text"
                onChange={handleChangeInput}
                value={postData.text}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Has Multimedia:</label>
              <Radio.Group
                name="hasMultimedia"
                onChange={handleChangeInput}
                value={postData.hasMultimedia}
                options={[
                  { label: "Yes", value: "yes" },
                  { label: "No", value: "no" },
                ]}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Time:</label>
              <Input
                name="time"
                onChange={handleChangeInput}
                value={postData.time}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Likes Number:</label>
              <Input
                name="likesNum"
                onChange={handleChangeInput}
                value={postData.likesNum}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Dislike Number:</label>
              <Input
                name="dislikeNum"
                onChange={handleChangeInput}
                value={postData.dislikeNum}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>City:</label>
              <Input
                name="city"
                onChange={handleChangeInput}
                value={postData.city}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>State:</label>
              <Input
                name="state"
                onChange={handleChangeInput}
                value={postData.state}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Country:</label>
              <Input
                name="country"
                onChange={handleChangeInput}
                value={postData.country}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Project Name:</label>
              <Input
                name="projectName"
                onChange={handleChangeInput}
                value={postData.projectName}
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

PostContainer.displayName = "post-container";

export default PostContainer;
