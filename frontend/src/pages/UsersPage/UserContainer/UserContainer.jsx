import React, { useState } from "react";
import {
  Button,
  Col,
  Flex,
  Input,
  InputNumber,
  notification,
  Radio,
  Row,
  Select,
} from "antd";

function UserContainer() {
  const [api, contextHolder] = notification.useNotification();

  const [userData, setUserData] = useState({
    userName: "",
    socialMedia: "",
    isVerified: null,
    firstName: "",
    lastName: "",
    birthCountry: "",
    residencyCountry: "",
    age: "",
    gender: null,
  });

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeAge = (value) => {
    setUserData((prevState) => ({
      ...prevState,
      age: value,
    }));
  };

  const handleChangeGender = (value) => {
    setUserData((prevState) => ({
      ...prevState,
      gender: value,
    }));
  };

  const handleDisableButton = () => {
    const { userName, socialMedia } = userData;

    return userName && socialMedia;
  };

  const handleEnterUserData = () => {
    const payload = {
      age: userData.age,
      birth_country: userData.birthCountry,
      first_name: userData.firstName,
      gender: userData.gender,
      is_verified: userData.isVerified,
      last_name: userData.lastName,
      residence_country: userData.residencyCountry,
      social_media: userData.socialMedia,
      username: userData.userName,
    };

    fetch("http://127.0.0.1:5000/user/", {
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

  return (
    <>
      {contextHolder}
      <div>
        <p>
          <b className={`${UserContainer.displayName}-heading-para`}>
            Enter User Information
          </b>
        </p>
      </div>
      <div>
        <Row gutter={[24, 24]}>
          <Col>
            <Flex align="center">
              <label>
                User Name:
                <span className={`${UserContainer.displayName}-required-star`}>
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
                Social Media:
                <span className={`${UserContainer.displayName}-required-star`}>
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
              <label>Is Verified:</label>
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
          <Col>
            <Flex align="center">
              <label>First Name:</label>
              <Input
                name="firstName"
                onChange={handleChangeInput}
                value={userData.firstName}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Last Name:</label>
              <Input
                name="lastName"
                onChange={handleChangeInput}
                value={userData.lastName}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Birth Country:</label>
              <Input
                name="birthCountry"
                onChange={handleChangeInput}
                value={userData.birthCountry}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Residency Country:</label>
              <Input
                name="residencyCountry"
                onChange={handleChangeInput}
                value={userData.residencyCountry}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Age:</label>
              <InputNumber
                name="age"
                onChange={handleChangeAge}
                value={userData.age}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Gender:</label>
              <Select
                name="gender"
                onChange={handleChangeGender}
                value={userData.gender}
                style={{ width: "140px" }}
                options={[
                  {
                    label: "Male",
                    value: 0,
                  },
                  {
                    label: "Female",
                    value: 1,
                  },
                  {
                    label: "Other",
                    value: 2,
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
            disabled={!handleDisableButton()}
            onClick={handleEnterUserData}
          >
            Confirm
          </Button>
        </Flex>
      </div>
    </>
  );
}

UserContainer.displayName = "user-container";

export default UserContainer;
