import React from "react";
import QueryRepost from "./QueryRepost/QueryRepost"
import RepostContainer from "./RepostContainer/RepostContainer"
import RepostTable from "./RepostTable/RepostTable";

function RepostPage() {
  //Rendering UI element
  return (
    <div className={`${RepostPage.displayName}-main-div`}>
      <h2 className={`${RepostPage.displayName}-heading`}>REPOST</h2>
      <hr></hr>
      <RepostContainer />
      <hr></hr>
      <QueryRepost />
    </div>
  );
}

RepostPage.displayName = "post-page";

export default RepostPage;
