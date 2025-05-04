import React from "react";
import PropTypes from "prop-types";

import { Table } from "antd";

const columns = [
  {
    title: "Post Time",
    key: "post_time",
    dataIndex: "post_time",
    render: (_, postData) => (
      <span>{postData.post_time ? postData.post_time : "-"}</span>
    ),
  },
  {
    title: "Post Username",
    key: "post_username",
    dataIndex: "post_username",
    render: (_, postData) => (
      <span>{postData.post_username ? postData.post_username : "-"}</span>
    ),
  },
  {
    title: "Post Social Media",
    key: "post_social_media",
    dataIndex: "post_social_media",
    render: (_, postData) => (
      <span>
        {postData.post_social_media ? postData.post_social_media : "-"}
      </span>
    ),
  },
  {
    title: "text",
    key: "text",
    dataIndex: "text",
    render: (_, postData) => <span>{postData.text ? postData.text : "-"}</span>,
  },
  {
    title: "Has Multimedia",
    key: "has_multimedia",
    dataIndex: "has_multimedia",
    render: (_, projectName) => {
      let multimedia = "-";
      switch (projectName.has_multimedia) {
        case 1:
          multimedia = "Y";
          break;
        case 2:
          multimedia = "N";
          break;
        default:
      }

      return <span>{multimedia}</span>;
    },
  },
  {
    title: "Likes Num",
    key: "likes_num",
    dataIndex: "likes_num",
    render: (_, postData) => (
      <span>{postData.likes_num !== null ? postData.likes_num : "-"}</span>
    ),
  },
  {
    title: "Dislike Num",
    key: "dislike_num",
    dataIndex: "dislike_num",
    render: (_, postData) => (
      <span>{postData.dislike_num !== null ? postData.dislike_num : "-"}</span>
    ),
  },
  {
    title: "City",
    key: "city",
    dataIndex: "city",
    render: (_, postData) => <span>{postData.city ? postData.city : "-"}</span>,
  },
  {
    title: "State",
    key: "state",
    dataIndex: "state",
    render: (_, postData) => (
      <span>{postData.state ? postData.state : "-"}</span>
    ),
  },
  {
    title: "Country",
    key: "country",
    dataIndex: "country",
    render: (_, postData) => (
      <span>{postData.country ? postData.country : "-"}</span>
    ),
  },
  {
    title: "Associated Projects",
    key: "experiments",
    dataIndex: "experiments",
    render: (_, projectName) => {
      if (projectName.experiments.length === 0) {
        return "-";
      }
      return (
        <span>
          {projectName.experiments.map((name, index, arr) => (
            <span key={name}>
              {name}
              {index !== arr.length - 1 && ", "}
            </span>
          ))}
        </span>
      );
    },
  },
];

function PostTable({ data }) {
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
