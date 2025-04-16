import React from "react";

import { columns } from "./helper";
import { Table } from "antd";

function ProjectTable() {
  //Need to add data when fetching data
  return <Table columns={columns} />;
}

ProjectTable.displayName = "project-table";

export default ProjectTable;
