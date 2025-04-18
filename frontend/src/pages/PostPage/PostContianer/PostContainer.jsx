import { useState, useCallback, useEffect } from "react";
import {
  Button,
  Col,
  DatePicker,
  Flex,
  Input,
  notification,
  Radio,
  Row,
  TimePicker,
} from "antd";

function PostContainer() {
  const [api, contextHolder] = notification.useNotification();

  //Creating State Data
  const [postData, setPostData] = useState({
    userName: "",
    socialMedia: "",
    text: "",
    hasMultimedia: null,
    date: "",
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

    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDisabledButton = () => {
    const { userName, socialMedia, time } = postData;

    return userName && socialMedia && time;
  };

  const handleSubmitButton = () => {
    let payload = {
      post_username: postData.userName,
      post_social_media: postData.socialMedia,
      post_time: `${postData.date} ${postData.time}`,
      text: postData.text,
      has_multimedia: postData.hasMultimedia ? postData.hasMultimedia : 0,
      likes_num: postData.likesNum ? Number(postData.likesNum) : 0,
      dislike_num: postData.dislikeNum ? Number(postData.dislikeNum) : 0,
      city: postData.city,
      state: postData.state,
      country: postData.country,
    };

    fetch("http://127.0.0.1:5000/post/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    }).then((resp) => {
      if (resp.ok) {
        api.success({
          message: "Successfully Added Post To Database",
        });
      } else {
        api.error({
          message: "There was an error",
        });
      }
    });
  };

  //Rendering UI element
  return (
    <>
      {contextHolder}
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
              <label>
                User Name:
                <span className={`${PostContainer.displayName}-required-star`}>
                  *
                </span>
              </label>
              <Input
                name="userName"
                onChange={handleChangeInput}
                value={postData.userName}
                required
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Social Media:
                <span className={`${PostContainer.displayName}-required-star`}>
                  *
                </span>
              </label>
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
                  { label: "Yes", value: 1 },
                  { label: "No", value: 0 },
                ]}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Date:
                <span className={`${PostContainer.displayName}-required-star`}>
                  *
                </span>
              </label>
              <DatePicker
                name="date"
                onChange={(e, dateString) => {
                  setPostData((prevState) => ({
                    ...prevState,
                    date: dateString,
                  }));
                }}
                // value={postData.date ? dayjs(postData.date) : ""}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Time:
                <span className={`${PostContainer.displayName}-required-star`}>
                  *
                </span>
              </label>
              <TimePicker
                name="time"
                onChange={(e, timeString) => {
                  setPostData((prevState) => ({
                    ...prevState,
                    time: timeString,
                  }));
                }}
                // value={postData.time ? dayjs(postData.time) : ""}
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
          <Button
            color="cyan"
            variant="solid"
            disabled={!handleDisabledButton()}
            onClick={handleSubmitButton}
          >
            Confirm
          </Button>
        </Flex>
      </div>
    </>
  );
}

PostContainer.displayName = "post-container";

export default PostContainer;
