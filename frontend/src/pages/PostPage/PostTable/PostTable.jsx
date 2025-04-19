import React from "react";
import PropTypes from "prop-types";

import { Table } from "antd";

const columns = [
  {
    title: "Post Time",
    key: "post_time",
    dataIndex: "post_time",
  },
  {
    title: "Post Username",
    key: "post_username",
    dataIndex: "post_username",
  },
  {
    title: "Post Social Media",
    key: "post_social_media",
    dataIndex: "post_social_media",
  },
  {
    title: "text",
    key: "text",
    dataIndex: "text",
  },
  {
    title: "Has Multimedia",
    key: "has_multimedia",
    dataIndex: "has_multimedia",
    render: (_, projectName) => (
      <span>{projectName.has_multimedia === 1 ? "Y" : "N"}</span>
    ),
  },
  {
    title: "Likes Num",
    key: "likes_num",
    dataIndex: "likes_num",
  },
  {
    title: "Dislike Num",
    key: "dislike_num",
    dataIndex: "dislike_num",
  },
  {
    title: "City",
    key: "city",
    dataIndex: "city",
  },
  {
    title: "State",
    key: "state",
    dataIndex: "state",
  },
  {
    title: "Country",
    key: "country",
    dataIndex: "country",
  },
  {
    title: "Associated Projects",
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
