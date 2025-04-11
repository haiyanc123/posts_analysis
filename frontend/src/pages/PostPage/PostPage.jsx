import { useState } from "react";
import { Flex } from "antd";

import "./PostPage.css";
import PostContainer from "./PostContianer/PostContainer";

function PostPage() {
  //Rendering UI element
  return (
    <div className={`${PostPage.displayName}-main-div`}>
      <h2 className={`${PostPage.displayName}-heading`}>POST</h2>
      <hr></hr>
      <PostContainer />
      <hr></hr>
    </div>
  );
}

PostPage.displayName = "post-page";

export default PostPage;
