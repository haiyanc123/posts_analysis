import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

const columns = [
  {
    title: "User Name",
    key: "username",
    dataIndex: "username",
  },
  {
    title: "Social Media",
    key: "social_media",
    dataIndex: "social_media",
  },
  {
    title: "Is Verified",
    key: "is_verified",
    dataIndex: "is_verified",
    render: (_, projectName) => (
      <span>{projectName.is_verified === 1 ? "Y" : "N"}</span>
    ),
  },
  {
    title: "First Name",
    key: "first_name",
    dataIndex: "first_name",
  },
  {
    title: "Last Name",
    key: "last_name",
    dataIndex: "last_name",
  },
  {
    title: "Birth Country",
    key: "birth_country",
    dataIndex: "birth_country",
  },
  {
    title: "Residence Country",
    key: "residence_country",
    dataIndex: "residence_country",
  },
  {
    title: "Age",
    key: "age",
    dataIndex: "age",
  },
  {
    title: "Gender",
    key: "gender",
    dataIndex: "gender",
    render: (_, projectName) => {
      let gender = "";
      switch (projectName.gender) {
        case 0:
          gender = "Male";
          break;
        case 1:
          gender = "Female";
          break;
        default:
          gender = "Other";
      }

      return <span>{gender}</span>;
    },
  },
];

function UserTable({ data }) {
  return <Table columns={columns} dataSource={data} />;
}

UserTable.prototype = {
  data: PropTypes.arrayOf({}),
};

UserTable.defaultProps = {
  data: [],
};

UserTable.displayName = "user-table";

export default UserTable;
