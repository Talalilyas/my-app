<<<<<<< Updated upstream
import { Layout, Menu, Avatar, Dropdown } from "antd";
=======
import { Layout, Menu, Avatar, Dropdown, Button, Table } from "antd";
>>>>>>> Stashed changes
import {
  DashboardOutlined,
  HomeOutlined,
  TableOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useLocalStorageState from "use-local-storage-state";
import UserContext from "./userContext";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

export default function Greeting() {
<<<<<<< Updated upstream
 
  const [user, setUser] = useLocalStorageState("user", null);

  console.log(user, "-------user----");

=======
  const [user, setUser] = useLocalStorageState("user", null);
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const [selectedKey, setSelectedKey] = useState("1"); // Track selected menu item

  const handleSignOut = () => {
    setUser(null);
    setIsLogin(false);
  };

>>>>>>> Stashed changes
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
        <a>Sign out</a>
      </Menu.Item>
    </Menu>
  );

  // Define user data for the table
  const userData = [
    {
      key: "1",
      attribute: "First Name",
      value: user?.firstName || "N/A",
    },
    {
      key: "2",
      attribute: "Last Name",
      value: user?.lastName || "N/A",
    },
    {
      key: "3",
      attribute: "Email",
      value: user?.email || "N/A",
    },
    {
      key: "4",
      attribute: "Date of Birth",
      value: user?.birthDate || "N/A",
    },
    {
      key: "5",
      attribute: "Gender",
      value: user?.gender || "N/A",
    },
  ];

  const userColumns = [
    {
      title: "User Data",
      dataIndex: "attribute",
      key: "attribute",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
  ];

  return (
    <UserContext.Provider value={user}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
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
              <Menu.Item key="7">
                User Data 
              </Menu.Item>
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
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "16px" }}>
<<<<<<< Updated upstream
            <h4>Email</h4>
            <p>{user.email}</p>
            <h3>password</h3>
            <p>{user.password}</p>
            <h3>Date of birth</h3>
            <p>{user.birthDate}</p>
            <h3>Gender</h3>
            <p>{user.gender}</p>
=======
           
            {selectedKey === "7" ? (
              <div>
                <h2>User Data</h2>
                <Table
                  dataSource={userData}
                  columns={userColumns}
                  pagination={false}
                />
              </div>
            ) : (
              <div>
               
              </div>
            )}
>>>>>>> Stashed changes
          </Content>
        </Layout>
      </Layout>
    </UserContext.Provider>
  );
}
