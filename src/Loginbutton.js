import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import { PoweroffOutlined, UserAddOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function Loginbutton() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = () => {
    setIsLogin((prev) => !prev);
  };
  const handleFormSubmit = () =>
 {



 }
  if (location.pathname !== "/login") {
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
            <Button
              type="primary"
              icon={<PoweroffOutlined />}
              style={{ marginRight: "10px" }}
              onClick={() => navigate("/Login")}
            >
              Home
            </Button>
            <Button
              type="primary"
              icon={<UserAddOutlined />}
              style={{ marginRight: "10px" }}
              onClick={handleToggleForm}
            >
              {isLogin ? "Sign Up" : "Login"}
            </Button>
          </div>
        </Menu>
      </Header>
    </Layout>
  );
}
