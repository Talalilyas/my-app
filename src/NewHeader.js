import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Button, Layout, Menu } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import Loginbutton from "./Loginbutton";

const { Header } = Layout;

export default function NewHeader() {
  const location = useLocation();
  if (location.pathname !== "/") {
    return null;
  }
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div
          className="logo"
          style={{ color: "white", fontSize: "20px" }}
        ></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <div style={{ float: "right" }}>
            <Link to="/NewHeader">
              <Button
                type="primary"
                icon={<PoweroffOutlined />}
                style={{ marginRight: "10px" }}
              >
                Login
              </Button>
              <Button
                type="primary"
                icon={<PoweroffOutlined />}
                style={{ marginRight: "10px" }}
              >
                <Loginbutton />
                Sginup
              </Button>
            </Link>
          </div>
        </Menu>
      </Header>
    </Layout>
  );
}
