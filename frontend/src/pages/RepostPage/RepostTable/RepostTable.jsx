import React from "react";
import PropTypes from "prop-types";

import { Table } from "antd";

const listColumn = [
  {
    title: "Post time",
    key: "post_time",
    dataIndex: "post_time",
    render: (_, repostData) => (
      <span>{repostData.post_time ? repostData.post_time : "-"}</span>
    ),
  },
  {
    title: "Post Username",
    key: "post_username",
    dataIndex: "post_username",
    render: (_, repostData) => (
      <span>{repostData.post_username ? repostData.post_username : "-"}</span>
    ),
  },
  {
    title: "Post Social Media",
    key: "post_socialmedia",
    dataIndex: "post_social_media",
    render: (_, repostData) => (
      <span>
        {repostData.post_social_media ? repostData.post_social_media : "-"}
      </span>
    ),
  },
  {
    title: "Repost Time",
    key: "repo_time",
    dataIndex: "repo_time",
    render: (_, repostData) => (
      <span>{repostData.repo_time ? repostData.repo_time : "-"}</span>
    ),
  },
  {
    title: "Repost Username",
    key: "repo_username",
    dataIndex: "repo_username",
    render: (_, repostData) => (
      <span>{repostData.repo_username ? repostData.repo_username : "-"}</span>
    ),
  },
  {
    title: "Repost Social Media",
    key: "repo_social_media",
    dataIndex: "repo_social_media",
    render: (_, repostData) => (
      <span>
        {repostData.repo_social_media ? repostData.repo_social_media : "-"}
      </span>
    ),
  },
];

function RepostTable({ data }) {
  //Need to add data when fetching data
  return (
    <>
      <div>
        <h2>Repost List</h2>
      </div>
      <Table columns={listColumn} dataSource={data} />
    </>
  );
}

RepostTable.displayName = "repost-table";

RepostTable.prototype = {
  data: PropTypes.arrayOf({}),
};

RepostTable.defaultProps = {
  data: [],
};

export default RepostTable;
