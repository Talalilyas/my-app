import React, { useState } from "react";
import {
  Layout,
  Menu,
  Card,
  Spin,
  message,
  Descriptions,
  Button,
  Col,
  Divider,
  Row,
  Flex,
} from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";

const { Header, Content, Footer, Sider } = Layout;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useLocalStorageState("accessToken", "");
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const navigate = useNavigate();
  
  const fetchUserData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users/1", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!response.ok) throw new Error("Failed to fetch user data");
      const data = await response.json();
      setUserData(data);
      setActiveTab("profile");
      setIsLogin(true);
    } catch (error) {
      message.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSignOuts = () => {
    setIsLogin(false);
    navigate("/");
    localStorage.removeItem("accessToken");
    setUserData(null);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{ flex: 2, minWidth: 0 , justifyContent: "center",alignItems:"center"}}
        />
      </Header>
      <Layout>
        <Sider width={220} theme="dark">
          <Menu mode="inline" theme="dark">
            <Menu.Item key="1" onClick={fetchUserData} icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="2 "  icon={<UserOutlined />}>
              Profile 2
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => setActiveTab("settings")}
              icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
            <Menu.Item key="3" icon={<LogoutOutlined />}>
              <Button type="link" onClick={handleSignOuts}>
                Sign out
              </Button>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ margin: "20px", padding: 24, background: "#fff" }}>
          {activeTab === "dashboard" && <h2>Welcome, Good Evening!</h2>}

          {activeTab === "profile" && (
            <Card
              title="User Profile"
              style={{ maxWidth: 800, margin: "auto" }}
            >
              {loading ? (
                <div style={{ textAlign: "center" }}>
                  <Spin size="large" />
                </div>
              ) : userData ? (
                <Descriptions bordered column={1}>
                  <Descriptions.Item label="Username">
                    {userData.username}
                  </Descriptions.Item>
                  <Descriptions.Item label="Email">
                    {userData.email}
                  </Descriptions.Item>
                  <Descriptions.Item label="Full Name">
                    {userData.firstName} {userData.lastName}
                  </Descriptions.Item>
                  <Descriptions.Item label="Phone">
                    {userData.phone}
                  </Descriptions.Item>
                  <Descriptions.Item label="Birth Date">
                    {userData.birthDate}
                  </Descriptions.Item>
                </Descriptions>
              ) : (
                <p>No data available.</p>
              )}
            </Card>
          )}
          {activeTab === "settings" && <h2></h2>}
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
