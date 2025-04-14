import React from "react";

import { columns } from "./helper";
import { Table } from "antd";

function PostTable() {
  //Need to add data when fetching data
  return <Table columns={columns} />;
}

PostTable.displayName = "post-table";

export default PostTable;
