import React, { useEffect, useState } from "react";
import { Layout, Menu, Card, Spin, message, Button, Table } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
const { Header, Content, Footer, Sider } = Layout;
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [accessToken, setAccessToken] = useLocalStorageState("accessToken", "");
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users/1", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!response.ok) throw new Error("Failed to fetch user data");
      const data = await response.json();
      setUserData([data]);
      setActiveTab("profile");
      setIsLogin(true);
    } catch (error) {
      message.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      if (!response.ok) throw new Error("Failed to fetch recipes");
      const data = await response.json();
      const formattedData = data.recipes.map((recipe) => ({
        key: recipe.id.toString(),
        name: recipe.name,
        ingredients: recipe.ingredients.join(", "),
      }));
      setRecipes(formattedData);
      setActiveTab("recipes");
    } catch (error) {
      message.error(`Error fetching recipes: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    setIsLogin(false);
    navigate("/");
    localStorage.removeItem("accessToken");
    setUserData(null);
  };

  const userColumns = [
    { title: "Username", dataIndex: "username", key: "username" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Full Name",
      key: "fullName",
      render: (record) => `${record.firstName} ${record.lastName}`,
    },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Birth Date", dataIndex: "birthDate", key: "birthDate" },
  ];

  const recipeColumns = [
    { title: "Recipe Name", dataIndex: "name", key: "name" },
    { title: "Ingredients", dataIndex: "ingredients", key: "ingredients" },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} />
      </Header>
      <Layout>
        <Sider width={220} theme="dark">
          <Menu mode="inline" theme="dark">
            <Menu.Item key="1" onClick={fetchUserData} icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="2" onClick={fetchRecipes}>
              Food Recipes
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => setActiveTab("settings")}
              icon={<SettingOutlined />}
            >
              Settings
            </Menu.Item>
            <Menu.Item key="4" icon={<LogoutOutlined />}>
              <Button type="link" onClick={handleSignOut}>
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
                <Table
                  dataSource={userData}
                  columns={userColumns}
                  rowKey="id"
                  pagination={false}
                />
              ) : (
                <p>No data available.</p>
              )}
            </Card>
          )}

          {activeTab === "recipes" && (
            <Card
              title="Food Recipes"
              style={{ maxWidth: 900, margin: "auto" }}
            >
              {loading ? (
                <div style={{ textAlign: "center" }}>
                  <Spin size="large" />
                </div>
              ) : recipes.length > 0 ? (
                <Table
                  dataSource={recipes}
                  columns={recipeColumns}
                  rowKey="key"
                  pagination={{ pageSize: 5 }}
                />
              ) : (
                <p>No recipes available.</p>
              )}
            </Card>
          )}

          {activeTab === "settings" && <h2>Settings Page</h2>}
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
