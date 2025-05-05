import React, { useState } from "react";
import { Button, Col, Flex, Input, notification, Radio, Row } from "antd";

function UpdateUser() {
  const [api, contextHolder] = notification.useNotification();
  const [userData, setUserData] = useState({
    userName: "",
    socialMedia: "",
    isVerified: null,
  });

  const [queryUserData, setQueryUserData] = useState(null);

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateUserData = () => {
    const payload = {
      username: userData.userName,
      social_media: userData.socialMedia,
      is_verified: userData.isVerified,
    };

    fetch("http://127.0.0.1:5000/user/update", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.success) {
          setQueryUserData(resp.data);
          api.success({
            message: "Updated User Verification Status",
          });
        } else {
          setQueryUserData(null);
          api.error({
            message: resp.error,
          });
        }
      });
  };

  return (
    <>
      {contextHolder}
      <div>
        <p>
          <b className={`${UpdateUser.displayName}-heading-para`}>
            Update User Verification Status
          </b>
        </p>
      </div>
      <div>
        <Row gutter={[24, 24]}>
          <Col>
            <Flex align="center">
              <label>
                User Name:{" "}
                <span className={`${UpdateUser.displayName}-required-star`}>
                  *
                </span>
              </label>
              <Input
                value={userData.userName}
                onChange={handleChangeInput}
                name="userName"
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Social Media:{" "}
                <span className={`${UpdateUser.displayName}-required-star`}>
                  *
                </span>
              </label>
              <Input
                name="socialMedia"
                onChange={handleChangeInput}
                value={userData.socialMedia}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Is Verified:{" "}
                <span className={`${UpdateUser.displayName}-required-star`}>
                  *
                </span>
              </label>
              <Radio.Group
                name="isVerified"
                onChange={handleChangeInput}
                value={userData.isVerified}
                options={[
                  {
                    label: "Yes",
                    value: 1,
                  },
                  {
                    label: "No",
                    value: 0,
                  },
                ]}
              />
            </Flex>
          </Col>
        </Row>
        <Flex justify="flex-end">
          <Button
            color="cyan"
            variant="solid"
            onClick={handleUpdateUserData}
            disabled={
              !(
                userData.isVerified !== null &&
                userData.userName &&
                userData.socialMedia
              )
            }
          >
            Confirm
          </Button>
        </Flex>
      </div>
    </>
  );
}

UpdateUser.displayName = "update-user";

export default UpdateUser;
