import { Layout, Menu, Avatar, Dropdown } from "antd";
import {
  DashboardOutlined,
  HomeOutlined,
  TableOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useLocalStorageState from "use-local-storage-state";
import { useContext } from "react";
import UserContext from "./userContext";

const { Header, Sider, Content } = Layout;

export default function Greeting() {
  const [user, setuser] = useLocalStorageState("user", false);

  console.log(user, "-------user----");

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

  return (
    <UserContext.Provider value={user}>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sider collapsible>
          <div className="logo" style={{ padding: "10px", color: "white" }}>
            Menu
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
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
            <Menu.SubMenu
              key="6"
              icon={<AppstoreOutlined />}
              title="Bootstrap"
            >
              <Menu.Item key="7">Item 1</Menu.Item>
              <Menu.Item key="8">Item 2</Menu.Item>
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
          {/* Username and Dropdown */}
          <Dropdown overlay={menu} placement="bottomLeft">
            <div className="d-flex align-items-center text-white" style={{ padding: "10px" }}>
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
              <span className="d-none d-sm-inline mx-1">
                {user.firstName} {user.lastName}
              </span>
            </div>
          </Dropdown>
        </Sider>
        {/* Main Content */}
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "16px" }}>
            <div>User details and other content can go here.</div>
          </Content>
        </Layout>
      </Layout>
    </UserContext.Provider>
  );
}
