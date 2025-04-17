import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  FileDoneOutlined,
  SmileOutlined,
  FormOutlined,
} from "@ant-design/icons";
import useLocalStorageState from "use-local-storage-state";

const { Header, Content, Footer, Sider } = Layout;

export default function Dashboard() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);

  const handleSignOut = () => {
    setIsLogin(false);
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["dashboard"]}>
          <Menu.Item key="dashboard">Dashboard</Menu.Item>
        </Menu>
      </Header>

      <Layout>
        <Sider width={220} theme="dark">
          <Menu mode="inline" theme="dark" defaultSelectedKeys={["profile"]}>
            <Menu.Item key="profile" icon={<UserOutlined />} onClick={() => navigate("profile")}>
              Profile
            </Menu.Item>
            <Menu.Item key="grade" icon={<FileDoneOutlined />} onClick={() => navigate("grade")}>
              Grade
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />} onClick={() => navigate("settings")}>
              Settings
            </Menu.Item>
            <Menu.Item key="quotes" icon={<SmileOutlined />} onClick={() => navigate("quotes")}>
              Quotes
            </Menu.Item>
            <Menu.Item key="result-form" icon={<FormOutlined />} onClick={() => navigate("result-form")}>
              Student Result Form
            </Menu.Item>
            <Menu.Item key="signout" icon={<LogoutOutlined />}>
              <Button type="link" onClick={handleSignOut} style={{ color: "#fff" }}>
                Sign Out
              </Button>
            </Menu.Item>
          </Menu>
        </Sider>

        <Content style={{ margin: "20px", padding: 24, background: "#fff" }}>
          <Outlet />
        </Content>
      </Layout>

      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
