import React, { useState } from "react";
import { Layout, Menu, Avatar, Dropdown, Button, Col, Row } from "antd";
import {
  DashboardOutlined,
  HomeOutlined,
  TableOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useLocalStorageState from "use-local-storage-state";
import UserContext from "./userContext";
import DataTable from "./ DataTable";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function Greeting() {
  const [user, setUser] = useLocalStorageState("user", null);
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const [selectedKey, setSelectedKey] = useState("1");
  const Navigate = useNavigate();

  const handleSignOut = () => {
    setUser(null);
    setIsLogin(false);
    Navigate("./NewHeader");
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a>New project...</a>
      </Menu.Item>
      <Menu.Item>
        <a>Settings</a>
      </Menu.Item>
      <Menu.Item>
        <a>Profile</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Button type="link" onClick={handleSignOut}>
          Sign out
        </Button>
      </Menu.Item>
    </Menu>
  );

  const userData = [
    { key: "1", attribute: "First Name", data: user?.firstName || "N/A" },
    { key: "2", attribute: "Last Name", data: user?.lastName || "N/A" },
    { key: "3", attribute: "Email", data: user?.email || "N/A" },
    { key: "4", attribute: "Date of Birth", data: user?.birthDate || "N/A" },
    { key: "5", attribute: "Gender", data: user?.gender || "N/A" },
  ];

  const userColumns = [
    { title: "User Data", dataIndex: "attribute", key: "attribute" },
    { title: "Data", dataIndex: "data", key: "data" },
  ];

  const dataSource = [
    { key: "1", name: "Mike", age: 32, address: "10 Downing Street" },
    { key: "2", name: "John", age: 42, address: "10 Downing Street" },
  ];

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Address", dataIndex: "address", key: "address" },
  ];

  return (
    <UserContext.Provider value={user}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible breakpoint="lg">
          <div className="logo" style={{ padding: "10px", color: "white" }}>
            Menu
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={(e) => setSelectedKey(e.key)}
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.SubMenu
              key="2"
              icon={<DashboardOutlined />}
              title="Dashboard"
            >
              <Menu.Item key="3">Item 1</Menu.Item>
              <Menu.Item key="4">Item 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="5" icon={<TableOutlined />}>
              Orders
            </Menu.Item>
            <Menu.SubMenu key="6" icon={<AppstoreOutlined />} title="Bootstrap">
              <Menu.Item key="7">User Data</Menu.Item>
              <Menu.Item key="8">This is a table</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="9" icon={<AppstoreOutlined />} title="Products">
              <Menu.Item key="10">Product 1</Menu.Item>
              <Menu.Item key="11">Product 2</Menu.Item>
              <Menu.Item key="12">Product 3</Menu.Item>
              <Menu.Item key="13">Product 4</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="14" icon={<UserOutlined />}>
              Customers
            </Menu.Item>
          </Menu>

          <Dropdown overlay={menu} placement="bottomLeft">
            <div
              className="d-flex align-items-center text-white"
              style={{ padding: "10px" }}
            >
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
              {user ? (
                <span className="d-none d-sm-inline mx-1">
                  {user.firstName} {user.lastName}
                </span>
              ) : (
                <span className="d-none d-sm-inline mx-1">Guest</span>
              )}
            </div>
          </Dropdown>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" />
          <Content>
            {selectedKey === "7" || selectedKey === "8" ? (
              <Row
                justify="center"
                align="middle"
                style={{ padding: "20px 10px", minHeight: "100vh" }}
              >
                <Col xs={24} sm={20} md={16} lg={12}>
                
                  {selectedKey === "7" ? (
                    <div>
                      <h2>User Data</h2>
                      <DataTable dataSource={userData} columns={userColumns} />
                    </div>
                  ) : (
                    <div>
                      <h3>Another table</h3>
                      <DataTable dataSource={dataSource} columns={columns} />
                    </div>
                  )}
                </Col>
              </Row>
            ) : (
              <div></div>
            )}
          </Content>
        </Layout>
      </Layout>
    </UserContext.Provider>
  );
}
