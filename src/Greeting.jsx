import React, { useState, useEffect } from "react";
import { Layout, Menu, Avatar, Dropdown, Button, Col, Row } from "antd";
import {
  DashboardOutlined,
  HomeOutlined,
  TableOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useLocalStorageState from "use-local-storage-state";
import UserContext from "./Usercontext";
import DataTable from "./ DataTable";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function Greeting() {
  const [user, setUser] = useLocalStorageState("user", null);
  const [isLogin, setIsLogin] = useLocalStorageState("Sginup", false);
  const [selectedKey, setSelectedKey] = useState("1");
  const [vehicleData, setVehicleData] = useState([]);
  const [make, setMake] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json"
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.Results.map((item) => ({
          key: item.Mfr_ID.toString(),
          makeId: item.Mfr_ID,
          makeName: item.Mfr_CommonName || "N/A",
          country: item.Country || "N/A",
        }));
        setVehicleData(formattedData);
      })
      .catch((error) => console.error("Error fetching vehicle data:", error));
  }, []);

  useEffect(() => {
    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
      .then((response) => response.json())
      .then((data) => {
        const makeData = data.Results.map((item) => ({
          key: item.Make_ID.toString(),
          makeId1: item.Make_ID,
          makeName: item.Make_Name,
        }));
        setMake(makeData);
      })
      .catch((error) => console.error("Error fetching makes data:", error));
  }, []);

  const handleSignOut = () => {
    setUser(null);
    setIsLogin(false);
    navigate("/NewHeader");
  };

  const vehicleColumns = [
    { title: "Manufacturer ID", dataIndex: "makeId", key: "makeId" },
    { title: "Common Name", dataIndex: "makeName", key: "makeName" },
    { title: "Country", dataIndex: "country", key: "country" },
  ];

  const makeColumns = [
    { title: "ID", dataIndex: "makeId1", key: "makeId1" },
    { title: "Brand ", dataIndex: "makeName", key: "makeName" },
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
                  {user.email}
                </span>
              ) : (
                <span className="d-none d-sm-inline mx-1"></span>
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
                      <h2>Vehicle Manufacturers</h2>
                      <DataTable
                        dataSource={vehicleData}
                        columns={vehicleColumns}
                        pagination={{ pageSize: 50 }}
                        scroll={{ y: 895 * 10 }}
                      />
                    </div>
                  ) : (
                    <div>
                      <h2>Vehicle Makes</h2>
                      <DataTable dataSource={make} columns={makeColumns} />
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
