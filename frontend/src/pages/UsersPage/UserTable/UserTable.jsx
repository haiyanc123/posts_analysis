import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

const columns = [
  {
    title: "User Name",
    key: "username",
    dataIndex: "username",
    render: (_, userData) => (
      <span>{userData.username ? userData.username : "-"}</span>
    ),
  },
  {
    title: "Social Media",
    key: "social_media",
    dataIndex: "social_media",
    render: (_, userData) => (
      <span>{userData.social_media ? userData.social_media : "-"}</span>
    ),
  },
  {
    title: "Is Verified",
    key: "is_verified",
    dataIndex: "is_verified",
    render: (_, userData) => {
      let verifiedText = "-";
      switch (userData.is_verified) {
        case 0:
          verifiedText = "N";
          break;
        case 1:
          verifiedText = "Y";
          break;
        default:
      }

      return <span>{verifiedText}</span>;
    },
  },
  {
    title: "First Name",
    key: "first_name",
    dataIndex: "first_name",
    render: (_, userData) => (
      <span>{userData.first_name ? userData.first_name : "-"}</span>
    ),
  },
  {
    title: "Last Name",
    key: "last_name",
    dataIndex: "last_name",
    render: (_, userData) => (
      <span>{userData.last_name ? userData.last_name : "-"}</span>
    ),
  },
  {
    title: "Birth Country",
    key: "birth_country",
    dataIndex: "birth_country",
    render: (_, userData) => (
      <span>{userData.birth_country ? userData.birth_country : "-"}</span>
    ),
  },
  {
    title: "Residence Country",
    key: "residence_country",
    dataIndex: "residence_country",
    render: (_, userData) => (
      <span>
        {userData.residence_country ? userData.residence_country : "-"}
      </span>
    ),
  },
  {
    title: "Age",
    key: "age",
    dataIndex: "age",
    render: (_, userData) => <span>{userData.age ? userData.age : "-"}</span>,
  },
  {
    title: "Gender",
    key: "gender",
    dataIndex: "gender",
    render: (_, userData) => {
      let gender = "-";
      switch (userData.gender) {
        case 0:
          gender = "Male";
          break;
        case 1:
          gender = "Female";
          break;
        case 2:
          gender = "Other";
          break;
        default:
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
