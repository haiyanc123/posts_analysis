import { useState, useCallback } from "react";
import { Flex } from "antd";

import { postPageInputMappers } from "./helper.js";
import CustomTemplates from "../../components/customTemplates/CustomTemplates";
import "./PostPage.css";

function PostPage() {
  //Creating State Data
  const [postData, setPostData] = useState({
    postId: "",
    userName: "",
    socialMedia: "",
    text: "",
    hasMultimedia: false,
    time: "",
    likesNum: "",
    disLikeNum: "",
    city: "",
    state: "",
    country: "",
    projectName: "",
  });

  //Handing Input Changes
  const handleChangeInput = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    console.log(`Name: ${name}, Value: ${value}`);
    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Mapping handleChangeInput function to mapper variable
  const postInputMappers = postPageInputMappers.map((item) => {
    const getValue = postData[item.name];
    return {
      ...item,
      onChange: handleChangeInput,
      value: getValue,
    };
  });

  console.log("postInputMappers", postInputMappers);
  //Rendering UI element
  return (
    <>
      <h2 className={`${PostPage.displayName}-heading`}>POST</h2>
      <hr></hr>
      <Flex justify="space-between">
        <div>
          <p>
            <b className={`${PostPage.displayName}-heading-para`}>Enter Post</b>
          </p>
        </div>
        <div>
          <CustomTemplates mapper={postInputMappers} />
        </div>
      </Flex>
    </>
  );
}

PostPage.displayName = "post-page";

export default PostPage;
