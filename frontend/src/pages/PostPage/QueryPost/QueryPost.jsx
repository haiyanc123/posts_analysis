import { useEffect, useState } from "react";
import { Button, Col, DatePicker, Flex, Input, Row } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import PostTable from "../PostTable/PostTable";
import { createQueryUrl } from "./helper";

import { getDate } from "../../../helper/getDate";

function QueryPost() {
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";

  //Creating State Data
  const [queryData, setQueryData] = useState({
    socialMedia: "",
    userName: "",
    posterFirstName: "",
    posterLastName: "",
    fromDate: "",
    toDate: "",
  });

  const [data, setData] = useState(null);
  const { RangePicker } = DatePicker;

  //Handing Input Changes
  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQueryData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeData = (id, value) => {
    setQueryData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitButton = () => {
    const payload = {
      socialMedia: queryData.socialMedia,
      userName: queryData.userName,
      posterFirstName: queryData.posterFirstName,
      posterLastName: queryData.posterLastName,
      fromDate: queryData.fromDate,
      toDate: queryData.toDate,
    };

    const url = createQueryUrl(payload);
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.data.length > 0) {
          setData(resp.data);
        } else {
          setData(null);
        }
      });
  };

  useEffect(() => {
    handleSubmitButton();
  }, []);

  //Rendering UI element
  return (
    <>
      <div>
        <p>
          <b className={`${QueryPost.displayName}-heading-para`}>Query Post</b>
        </p>
      </div>
      <div>
        <Row gutter={[24, 24]}>
          <Col>
            <Flex align="center">
              <label>Social Media:</label>
              <Input
                value={queryData.socialMedia}
                onChange={handleChangeInput}
                name="socialMedia"
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>User Name:</label>
              <Input
                name="userName"
                onChange={handleChangeInput}
                value={queryData.userName}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Poster First Name:</label>
              <Input
                name="posterFirstName"
                onChange={handleChangeInput}
                value={queryData.posterFirstName}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>Poster Last Name:</label>
              <Input
                name="posterLastName"
                onChange={handleChangeInput}
                value={queryData.posterLastName}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>From Date:</label>
              <DatePicker
                showTime={{ format: "HH:mm:ss" }}
                format="YYYY-MM-DD HH:mm:ss"
                onChange={(value, dateString) => {
                  setQueryData((prevState) => ({
                    ...prevState,
                    fromDate: dateString,
                  }));
                }}
                onOk={(value, dateString) => {
                  setQueryData((prevState) => ({
                    ...prevState,
                    fromDate: dateString,
                  }));
                }}
                maxDate={dayjs(getDate(), dateFormat)}
              />
            </Flex>
          </Col>
          <Col>
            <Flex align="center">
              <label>To Date:</label>
              <DatePicker
                showTime={{ format: "HH:mm:ss" }}
                format="YYYY-MM-DD HH:mm:ss"
                onChange={(value, dateString) => {
                  setQueryData((prevState) => ({
                    ...prevState,
                    toDate: dateString,
                  }));
                }}
                onOk={(value, dateString) => {
                  setQueryData((prevState) => ({
                    ...prevState,
                    toDate: dateString,
                  }));
                }}
                maxDate={dayjs(getDate(), dateFormat)}
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
      <PostTable data={data} />
    </>
  );
}

QueryPost.displayName = "query-post";

export default QueryPost;
