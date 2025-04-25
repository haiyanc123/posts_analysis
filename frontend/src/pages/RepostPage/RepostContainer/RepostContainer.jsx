import React, { useState } from "react";
import { Button, Input, DatePicker, notification, Row, Col, Flex } from "antd";

function RepostContainer() {
  const [api, contextHolder] = notification.useNotification();
  const [formData, setFormData] = useState({
    postDate: "",
    postUserName: "",
    postSocialMedia: "",
    repostDate: "",
    repostUserName: "",
    repostSocialMedia: "",
  });

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((pevState) => ({
      ...pevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Handle submission logic here
    api.success({
      message: "Repost Successful!",
      description: "Your repost details have been successfully saved.",
    });
  };

  const handleDisabledButton = () => {
    const {
      postDate,
      postUserName,
      postSocialMedia,
      repostDate,
      repostUserName,
      repostSocialMedia,
    } = formData;

    return (
      postDate &&
      postUserName &&
      postSocialMedia &&
      repostDate &&
      repostUserName &&
      repostSocialMedia
    );
  };

  return (
    <>
      {contextHolder}
      <div className={`${RepostContainer.displayName}-repost-container`}>
        <h2>Repost Information</h2>
        <Row gutter={[24, 24]}>
          <Col>
            <Flex align="center">
              <label>
                Post Time:
                <span
                  className={`${RepostContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <DatePicker
                name="postDate"
                onChange={(e, dateString) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    postDate: dateString,
                  }));
                }}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Post Username:{" "}
                <span
                  className={`${RepostContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <Input
                type="text"
                name="postUserName"
                value={formData.postUserName}
                onChange={handleChangeInput}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Post Social Media:{" "}
                <span
                  className={`${RepostContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <Input
                type="text"
                name="postSocialMedia"
                value={formData.postSocialMedia}
                onChange={handleChangeInput}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Repost Time:{" "}
                <span
                  className={`${RepostContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <DatePicker
                name="repostDate"
                onChange={(e, dateString) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    repostDate: dateString,
                  }));
                }}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Repost Username:{" "}
                <span
                  className={`${RepostContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <Input
                type="text"
                name="repostUserName"
                value={formData.repostUserName}
                onChange={handleChangeInput}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Repost Social Media:{" "}
                <span
                  className={`${RepostContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <Input
                type="text"
                name="repostSocialMedia"
                value={formData.repostSocialMedia}
                onChange={handleChangeInput}
              />
            </Flex>
          </Col>
        </Row>
        <Flex justify="flex-end">
          <Button
            color="cyan"
            variant="solid"
            disabled={!handleDisabledButton()}
            onClick={handleSubmit}
          >
            Confirmed
          </Button>
        </Flex>
      </div>
    </>
  );
}

RepostContainer.displayName = "repost-container";

export default RepostContainer;
