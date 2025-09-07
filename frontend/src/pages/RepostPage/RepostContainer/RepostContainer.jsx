import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  DatePicker,
  notification,
  Row,
  Col,
  Flex,
  Select,
} from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { getDate } from "../../../helper/getDate";

function RepostContainer() {
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";

  const [api, contextHolder] = notification.useNotification();
  const [formData, setFormData] = useState({
    post: "",
    repostDate: "",
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
      repo_time: formData.repostDate,
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
    const { post, repostDate, repostUserName, repostSocialMedia } = formData;

    return post && repostDate && repostUserName && repostSocialMedia;
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
                showTime={{ format: "HH:mm:ss" }}
                format="YYYY-MM-DD HH:mm:ss"
                name="repostDate"
                onChange={(e, dateString) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    repostDate: dateString,
                  }));
                }}
                onOk={(e, dateString) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    repostDate: dateString,
                  }));
                }}
                maxDate={dayjs(getDate(), dateFormat)}
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
            Confirm
          </Button>
        </Flex>
      </div>
    </>
  );
}

RepostContainer.displayName = "repost-container";

export default RepostContainer;
