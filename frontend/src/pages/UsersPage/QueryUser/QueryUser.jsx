import React, { useState } from "react";
import { Button, Col, Flex, Input, Row } from "antd";
import UserTable from "../UserTable/UserTable";

function QueryUser() {
  const [userData, setUserData] = useState({
    userName: "",
    socialMedia: "",
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

  const handleDisableButton = () => {
    const { userName, socialMedia } = userData;

    return userName && socialMedia;
  };

  const handleQueryUserData = () => {
    fetch(
      `http://127.0.0.1:5000/user/detail?username=${userData.userName}&social_media=${userData.socialMedia}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setQueryUserData([resp.data]));
  };

  return (
    <>
      <div>
        <p>
          <b className={`${UserContainer.displayName}-heading-para`}>
            Query User
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
        </Row>
        <Flex justify="flex-end">
          <Button
            color="cyan"
            variant="solid"
            disabled={!handleDisableButton()}
            onClick={handleQueryUserData}
          >
            Confirm
          </Button>
        </Flex>
        <hr></hr>
        <UserTable data={queryUserData} />
      </div>
    </>
  );
}

QueryUser.displayName = "user-container";

export default QueryUser;
