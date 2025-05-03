import React from "react";
import PropTypes from "prop-types";

import { Table } from "antd";

const listColumn = [
  {
    title: "Post time",
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
    key: "post_socialmedia",
    dataIndex: "post_socialmedia",
    render: (_, postData) => (
      <span>{postData.post_socialmedia ? postData.post_socialmedia : "-"}</span>
    ),
  },
  {
    title: "Text",
    key: "text",
    dataIndex: "text",
    render: (_, postData) => <span>{postData.text ? postData.text : "-"}</span>,
  },
  {
    title: "Field Value",
    key: "fieldValue",
    render: (_, projectName) => (
      <span>
        {projectName.fileds.map((name, index, arr) => (
          <span key={name}>
            {name.field_value}
            {index !== arr.length - 1 && ", "}
          </span>
        ))}
      </span>
    ),
  },
  {
    title: "Field Name",
    key: "fieldName",
    render: (_, projectName) => (
      <span>
        {projectName.fileds.map((name, index, arr) => (
          <span key={name}>
            {name.field_name}
            {index !== arr.length - 1 && ", "}
          </span>
        ))}
      </span>
    ),
  },
];

const percentageColumn = [
  {
    title: "Field Name",
    key: "fieldName",
    dataIndex: "field_name",
    render: (_, data) => <span>{data.field_name ? data.field_name : "-"}</span>,
  },
  {
    title: "Field Value",
    key: "fieldValue",
    dataIndex: "field_value",
    render: (_, data) => (
      <span>{data.field_value ? data.field_value : "-"}</span>
    ),
  },
  {
    title: "Post Count",
    key: "count",
    dataIndex: "count",
    render: (_, data) => <span>{data.count ? data.count : "-"}</span>,
  },
  {
    title: "Post Percentage",
    key: "coverage",
    dataIndex: "coverage",
    render: (_, data) => <span>{`${data.coverage}%`}</span>,
  },
];

function ProjectTable({ postData, percentageData }) {
  //Need to add data when fetching data
  return (
    <>
      <div>
        <h2>Post List With Project Name</h2>
      </div>
      <Table columns={listColumn} dataSource={postData} />
      <div>
        <h2>Post Percentage</h2>
      </div>
      <Table columns={percentageColumn} dataSource={percentageData} />
    </>
  );
}

ProjectTable.displayName = "project-table";

ProjectTable.prototype = {
  postData: PropTypes.arrayOf({}),
  percentageData: PropTypes.arrayOf({}),
};

ProjectTable.defaultProps = {
  postData: [],
  percentageData: [],
};

export default ProjectTable;
