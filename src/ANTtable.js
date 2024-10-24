import { Layout, Menu, Avatar, Dropdown, Table, Button } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import useLocalStorageState from "use-local-storage-state";
import UserContext from "./userContext";
import Sider from "antd/es/layout/Sider";

export default function ANTtable() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <Menu.SubMenu key="6" icon={<AppstoreOutlined />} title="Bootstrap">
          <Menu.Item key="7">Item 1</Menu.Item>
          <Menu.Item key="8">Item 2</Menu.Item>
        </Menu.SubMenu>
      </Sider>
    </Layout>
  );
}
