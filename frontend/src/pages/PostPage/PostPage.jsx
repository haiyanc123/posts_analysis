import React from "react";

import "./PostPage.css";
import PostContainer from "./PostContianer/PostContainer";
import QueryPost from "./QueryPost/QueryPost";
import PostTable from "./PostTable/PostTable";

function PostPage() {
  //Rendering UI element
  return (
    <div className={`${PostPage.displayName}-main-div`}>
      <h2 className={`${PostPage.displayName}-heading`}>POST</h2>
      <hr></hr>
      <PostContainer />
      <hr></hr>
      <QueryPost />
      <hr></hr>
      <PostTable />
    </div>
  );
}

PostPage.displayName = "post-page";

export default PostPage;
