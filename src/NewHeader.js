import React from "react";
import { Link } from "react-router-dom";
import { Button, Layout, Menu } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function NewHeader() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <div style={{ float: "right" }}>
            <Link to="/Loginbutton/Login">
              <Button
                type="primary"
                icon={<PoweroffOutlined />}
                style={{ marginRight: "10px" }}>
                Login
              </Button>
            </Link>
            <Link to="/Sginup">
              <Button
                type="primary"
                icon={<PoweroffOutlined />}
                style={{ marginRight: "10px" }}>
                Signup
              </Button>
            </Link>
          </div>
        </Menu>
      </Header>
    </Layout>
  );
}
