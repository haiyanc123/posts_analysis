import { useEffect, useState } from "react";
import { Button, Col, DatePicker, Flex, Input, Row } from "antd";

import RepostTable from "../RepostTable/RepostTable";

import { createQueryUrl } from "./helper";

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
          setData(resp.data);
        } else {
          setData(null);
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
