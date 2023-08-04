import React from "react";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Button style={{ marginLeft: "10px" }}>
            <Link href="/">Home</Link>
          </Button>
          <Button style={{ marginLeft: "10px" }}>
            <Link href="/about">About</Link>
          </Button>
          <Button style={{ marginLeft: "10px" }}>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button style={{ marginLeft: "10px" }}>
            <Link href="/admin">Admin</Link>
          </Button>
          <Button style={{ marginLeft: "10px" }}>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        ></Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default RootLayout;
