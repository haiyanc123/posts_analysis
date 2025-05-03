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
    const { userName, socialMedia, time, text } = postData;

    return userName && socialMedia && time && text;
  };

  const handleSubmitButton = () => {
    let payload = {
      post_username: postData.userName,
      post_social_media: postData.socialMedia,
      post_time: `${postData.date} ${postData.time}`,
      text: postData.text,
      ...((postData.hasMultimedia === 0 || postData.hasMultimedia === 1) && {
        has_multimedia: postData.hasMultimedia,
      }),
      ...(postData.likesNum && { likes_num: postData.likesNum }),
      ...(postData.dislikeNum && { dislike_num: postData.dislikeNum }),
      ...(postData.city && { city: postData.city }),
      ...(postData.state && { state: postData.state }),
      ...(postData.country && { country: postData.country }),
    };

    fetch("http://127.0.0.1:5000/post/", {
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
            message: "Successfully Added Post To Database",
          });
        } else {
          api.error({
            message: resp.error,
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
                placeholder="Please do not enter &"
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
                placeholder="Please do not enter &"
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Text:
                <span className={`${PostContainer.displayName}-required-star`}>
                  *
                </span>
              </label>
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
