import { useEffect, useState } from "react";
import { Button, Col, DatePicker, Flex, Input, notification, Row } from "antd";

import RepostTable from "../RepostTable/RepostTable";

import { createQueryUrl } from "./helper";

function QueryRepost() {
  const [api, contextHolder] = notification.useNotification();
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
    const url = createQueryUrl(queryData);
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.success) {
          if (resp.data.length > 0) {
            setData(resp.data);
          } else {
            setData(null);
          }
        } else {
          setData(null);
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
          <b className={`${QueryRepost.displayName}-heading-para`}>
            Query Repost
          </b>
        </p>
      </div>
      <div>
        <Row gutter={[24, 24]}>
          <Col>
            <Flex align="center">
              <label>Post User Name:</label>
              <Input
                name="postUserName"
                onChange={handleChangeInput}
                value={queryData.postUserName}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Post Social Media:</label>
              <Input
                name="postSocialMedia"
                onChange={handleChangeInput}
                value={queryData.postSocialMedia}
              />
            </Flex>
          </Col>
        </Row>
        <Flex justify="flex-end">
          <Button color="cyan" variant="solid" onClick={handleSubmitButton}>
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
