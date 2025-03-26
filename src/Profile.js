import React, { useState } from "react";
import { Layout, Menu, Card, Spin, message, Button } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Foodrecipe from "./Foodrecipe";
import Userdata from "./Userdata";
import Qoutes from "./Qutes";

const { Header, Content, Footer, Sider } = Layout;
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [qoute, setqoutes] = useState([]);
  const [accessToken] = useLocalStorageState("accessToken", "");
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
    } catch (error) {
      message.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);

      console.log(isLogin)
    }
  };
  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/recipes?sortBy=name&order=asc");
      if (!response.ok) throw new Error("Failed to fetch recipes");
      const data = await response.json();
      const formattedData = data.recipes.map((recipe) => ({
        key: recipe.id.toString(),
        name: recipe.name,
        ingredients: recipe.ingredients,
      }));
      setRecipes(formattedData);
      setActiveTab("recipes");
    } catch (error) {
      message.error(`Error fetching recipes: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  const fetchImage = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/quotes");
      if (!response.ok) throw new Error("Failed to fetch quotes");
      const data = await response.json();
      const formattedData = data.quotes.map((quote) => ({
        key: quote.id.toString(),
        quote: quote.quote,
        author: quote.author,
      }));
      setqoutes(formattedData);
      setActiveTab("qoute");
    } catch (error) {
      message.error(`Error fetching quotes: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  const handleSignOut = () => {
    setIsLogin(false);
    navigate("/");
    localStorage.removeItem("accessToken");
    setUserData([]);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} />
      </Header>
      <Layout>
        <Sider width={220} theme="dark">
          <Menu mode="inline" theme="dark">
            <Menu.Item key="1" onClick={fetchUserData} icon={<UserOutlined />}>Profile</Menu.Item>
            <Menu.Item key="2" onClick={fetchRecipes}>Food Recipes</Menu.Item>
            <Menu.Item key="3" onClick={() => setActiveTab("settings")} icon={<SettingOutlined />}>Settings</Menu.Item>
            <Menu.Item key="4" onClick={fetchImage}>Quotes</Menu.Item>
            <Menu.Item key="5" icon={<LogoutOutlined />}>
              <Button type="link" onClick={handleSignOut}>Sign out</Button>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ margin: "20px", padding: 24, background: "#fff" }}>
          {activeTab === "dashboard" && <h2>Welcome, Good Evening!</h2>}
          {activeTab === "settings" && <h2>Settings Page</h2>}
          {activeTab === "recipes" && (
            <Card title="Food Recipes" style={{ maxWidth: 900, margin: "auto" }}>
              {loading ? <Spin size="large" /> : recipes.length > 10 ? (
                <Foodrecipe dataSource={recipes} columns={[{ title: "Recipe Name", dataIndex: "name", key: "name" }, { title: "Ingredients", dataIndex: "ingredients", key: "ingredients" }]} pagination={{ pageSize: 5 }} />
              ) : <p>No recipes available.</p>}
            </Card>)}
          {activeTab === "profile" && (
            <Card title="User Profile" style={{ maxWidth: 900, margin: "auto" }}>
              {loading ? <Spin size="large" /> : userData.length > 0 ? (
                <Userdata dataSource={userData} columns={[{ title: "Username", dataIndex: "username", key: "username" }, { title: "Email", dataIndex: "email", key: "email" }, { title: "Full Name", key: "fullName", render: (record) => `${record.firstName} ${record.lastName}` }, { title: "Phone", dataIndex: "phone", key: "phone" }, { title: "Birth Date", dataIndex: "birthDate", key: "birthDate" }]} />
              ) : <p>No user data available.</p>}
            </Card>)}
          {activeTab === "qoute" && (
            <Card title="Quotes" style={{ maxWidth: 1000, margin: "auto" }}>
              {loading ? <Spin size="large" /> : qoute.length > 0 ? (
                <Qoutes dataSource={qoute} columns={[{ title: "Quote", dataIndex: "quote", key: "quote" }, { title: "Author", dataIndex: "author", key: "author" }]}  pagination={{ pageSize: 9 }}/>
              ) : <p>No quotes available.</p>}
            </Card>)}
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
    </Layout>);
}
