import { useState } from "react";
import { Button, Flex, Layout } from "antd";
import { NavLink, Outlet } from "react-router";
//Layout CSS
const headerStyle = {
  backgroundColor: "#72cacc",
  color: "white",
  paddingLeft: "25px",
  height: "100px",
};

const siderStyle = {
  backgroundColor: "#f5f5f5",
  color: "black",
};

const contentStyle = {
  backgroundColor: "white",
};

const menuLinks = [
  {
    label: "Post",
    nav: "/post",
  },
  {
    label: "Project",
    nav: "/project",
  },
];

function SideMenuNav() {
  const navLinks = menuLinks.map((item) => (
    <Flex align="center" justify="space-around" key={item.label}>
      <Button type="text" size="large">
        <NavLink to={item.nav}>{item.label}</NavLink>
      </Button>
    </Flex>
  ));
  return navLinks;
}

function BaseLayoutPage() {
  const { Header, Sider, Content } = Layout;
  return (
    <Layout>
      <Header style={headerStyle}>
        <h1>Social Media Analysis System</h1>
      </Header>
      <Layout>
        <Sider style={siderStyle}>
          <SideMenuNav />
        </Sider>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default BaseLayoutPage;
