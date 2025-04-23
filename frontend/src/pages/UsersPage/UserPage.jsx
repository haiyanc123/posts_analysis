import React from "react";
import UserContainer from "./UserContainer/UserContainer";
import QueryUser from "./QueryUser/QueryUser";

import "./UserPage.css";

function UserPage() {
  return (
    <div className={`${UserPage.displayName}-main-div`}>
      <h2 className={`${UserPage.displayName}-heading`}>User</h2>
      <hr></hr>
      <UserContainer />
      <hr></hr>
      <QueryUser />
    </div>
  );
}

UserPage.displayName = "user-page";

export default UserPage;
