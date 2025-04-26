import { useEffect, useState } from "react";
import { Button, Col, DatePicker, Flex, Input, Row } from "antd";

import RepostTable from "../RepostTable/RepostTable";

function QueryRepost() {
  //Creating State Data
  const [queryData, setQueryData] = useState({
    postUserName: "",
    postSocialMedia: "",
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

  const handleSubmitButton = () => {
    fetch(
      `http://127.0.0.1:5000/repost/?post_social_media=${queryData.postSocialMedia}&post_username=${queryData.postUserName}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.success) {
          setData(resp.data);
        }
      });
  };

  //Rendering UI element
  return (
    <>
      <div>
        <p>
          <b className={`${QueryRepost.displayName}-heading-para`}>
            Query Repost
          </b>
        </p>
      </div>
      <div>
        <Row gutter={[24, 24]}>
          <Col>
            <Flex align="center">
              <label>
                Post User Name:
                <span className={`${QueryRepost.displayName}-required-star`}>
                  *
                </span>
              </label>
              <Input
                name="postUserName"
                onChange={handleChangeInput}
                value={queryData.postUserName}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>
                Post Social Media:
                <span className={`${QueryRepost.displayName}-required-star`}>
                  *
                </span>
              </label>
              <Input
                name="postSocialMedia"
                onChange={handleChangeInput}
                value={queryData.postSocialMedia}
              />
            </Flex>
          </Col>
        </Row>
        <Flex justify="flex-end">
          <Button
            color="cyan"
            variant="solid"
            onClick={handleSubmitButton}
            disabled={!(queryData.postSocialMedia && queryData.postUserName)}
          >
            Confirm
          </Button>
        </Flex>
      </div>
      <hr></hr>
      <RepostTable data={data} />
    </>
  );
}

QueryRepost.displayName = "query-repost";

export default QueryRepost;
