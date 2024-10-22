import { Layout, Menu, Avatar, Dropdown, Table, Button } from "antd";
import {
  DashboardOutlined,
  HomeOutlined,
  TableOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useLocalStorageState from "use-local-storage-state";
import UserContext from "./userContext";

const { Header, Sider, Content } = Layout;

export default function Greeting() {
  const [user, setUser] = useLocalStorageState("user", null); // Set default to null
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  
  const handleSignOut = () => {
    setUser(null); // Set user to null to clear it from localStorage
    setIsLogin(false);
  };

  const ordersData = [
    {
      key: "1",
      orderNumber: "001",
      customer: "John Doe",
      date: "2024-10-10",
      status: "Completed",
    },
    {
      key: "2",
      orderNumber: "002",
      customer: "Jane Smith",
      date: "2024-10-12",
      status: "Pending",
    },
    // More order data here
  ];

  const ordersColumns = [
    {
      title: "Order Number",
      dataIndex: "orderNumber",
      key: "orderNumber",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

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

  return (
    <UserContext.Provider value={user}>
      <Layout style={{ minHeight: "100vh" }}>
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
            <Menu.SubMenu key="6" icon={<AppstoreOutlined />} title="Bootstrap">
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

          {user ? (
            <>
              <h4>Email</h4>
              <p>{user.email}</p>
              <h3>Password</h3>
              <p>{user.password}</p>
              <h3>Date of Birth</h3>
              <p>{user.birthDate}</p>
              <h3>Gender</h3>
              <p>{user.gender}</p>
            </>
          ) : (
            <p>No user data available.</p>
          )}

          <h3>Orders</h3>
          <Table dataSource={ordersData} columns={ordersColumns} />
        </Layout>
      </Layout>
    </UserContext.Provider>
  );
}
