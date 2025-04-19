import React from "react";

import { Table } from "antd";

//TODO: fix this columns after looking at the response data. \
const columns = [
  {
    title: "Text",
    key: "text",
  },
  {
    title: "Field Name",
    key: "fieldName",
  },
  {
    title: "Field Value",
    key: "fieldValue",
  },
];

function ProjectTable() {
  //Need to add data when fetching data
  return <Table columns={columns} />;
}

ProjectTable.displayName = "project-table";

export default ProjectTable;
