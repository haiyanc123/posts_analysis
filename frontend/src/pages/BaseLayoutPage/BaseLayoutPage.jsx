import { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router";

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

function App() {
  const { Header, Sider, Content } = Layout;
  return (
    <Layout>
      <Header style={headerStyle}>
        <h1>Social Media Analysis System</h1>
      </Header>
      <Layout>
        <Sider style={siderStyle}>
          <p>Post</p>
          <p>Repost</p>
          <p>User</p>
        </Sider>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
