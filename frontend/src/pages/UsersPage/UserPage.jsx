import React from "react";
import UserContainer from "./UserContainer/UserContainer";

import "./UserPage.css";

function UserPage() {
  return (
    <div className={`${UserPage.displayName}-main-div`}>
      <h2 className={`${UserPage.displayName}-heading`}>User</h2>
      <hr></hr>
      <UserContainer mode="enter" />
      <hr></hr>
      <UserContainer mode="query" />
    </div>
  );
}

UserPage.displayName = "user-page";

export default UserPage;
