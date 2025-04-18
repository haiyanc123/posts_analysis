import React from "react";
import PropTypes from "prop-types";

import { Table } from "antd";

const columns = [
  {
    title: "Text",
    key: "text",
    dataIndex: "text",
  },
  {
    title: "Social Media",
    key: "post_social_media",
    dataIndex: "post_social_media",
  },
  {
    title: "User Name",
    key: "post_username",
    dataIndex: "post_username",
  },
  {
    title: "Date Time",
    key: "post_time",
    dataIndex: "post_time",
  },
  {
    title: "Project List",
    key: "experiments",
    dataIndex: "experiments",
    render: (_, projectName) => (
      <span>
        {projectName.experiments.map((name, index, arr) => (
          <span key={name}>
            {name}
            {index !== arr.length - 1 && ", "}
          </span>
        ))}
      </span>
    ),
  },
];

function PostTable({ data }) {
  //Need to add data when fetching data
  return <Table columns={columns} dataSource={data} />;
}

PostTable.displayName = "post-table";

PostTable.prototype = {
  data: PropTypes.arrayOf({}),
};

PostTable.defaultProps = {
  data: [],
};

export default PostTable;
