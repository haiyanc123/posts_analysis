import React from "react";
import QueryRepost from "./QueryRepost/QueryRepost";
import RepostContainer from "./RepostContainer/RepostContainer";
import "./RepostPage.css";

function RepostPage() {
  //Rendering UI element
  return (
    <div className={`${RepostPage.displayName}-main-div`}>
      <h2 className={`${RepostPage.displayName}-heading`}>Repost</h2>
      <hr></hr>
      <RepostContainer />
      <hr></hr>
      <QueryRepost />
    </div>
  );
}

RepostPage.displayName = "repost-page";

export default RepostPage;
