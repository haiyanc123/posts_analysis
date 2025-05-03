import React from "react";
import PropTypes from "prop-types";

import { Table } from "antd";

const listColumn = [
  {
    title: "Post time",
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
    key: "post_socialmedia",
    dataIndex: "post_social_media",
  },
  {
    title: "Repost Time",
    key: "repo_time",
    dataIndex: "repo_time",
  },
  {
    title: "Repost Username",
    key: "repo_username",
    dataIndex: "repo_username",
  },
  {
    title: "Repost Social Media",
    key: "repo_social_media",
    dataIndex: "repo_social_media",
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
