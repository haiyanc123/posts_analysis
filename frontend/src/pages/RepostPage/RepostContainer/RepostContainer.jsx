import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  DatePicker,
  notification,
  Row,
  Col,
  Flex,
  TimePicker,
  Select,
} from "antd";

function RepostContainer() {
  const [api, contextHolder] = notification.useNotification();
  const [formData, setFormData] = useState({
    post: "",
    repostDate: "",
    repostTime: "",
    repostUserName: "",
    repostSocialMedia: "",
  });

  const [dropdownOptions, setDropdownOptions] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/post/dropdown", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.success) {
          const options = resp.data.map((item) => ({
            value: item,
            label: item,
          }));
          setDropdownOptions(options);
        }
      });
  }, []);

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((pevState) => ({
      ...pevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    const payload = {
      post: formData.post,
      repo_social_media: formData.repostSocialMedia,
      repo_username: formData.repostUserName,
      repo_time: `${formData.repostDate} ${formData.repostTime}`,
    };
    fetch("http://127.0.0.1:5000/repost/", {
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
            message: "Successfully Repost User To Database",
          });
        } else {
          api.error({
            message: resp.error,
          });
        }
      });
  };

  const handleDisabledButton = () => {
    const { post, repostDate, repostTime, repostUserName, repostSocialMedia } =
      formData;

    return (
      post && repostDate && repostTime && repostUserName && repostSocialMedia
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
                Post:
                <span
                  className={`${RepostContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <Select
                options={dropdownOptions}
                onChange={(value) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    post: value,
                  }))
                }
                style={{ width: "400px" }}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Repost Date:
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
                Repost Time:
                <span
                  className={`${RepostContainer.displayName}-required-star`}
                >
                  *
                </span>
              </label>
              <TimePicker
                name="repostTime"
                onChange={(e, dateString) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    repostTime: dateString,
                  }));
                }}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Repost Username:
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
                Repost Social Media:
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
