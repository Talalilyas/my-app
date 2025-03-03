import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Button, Flex, Layout, Menu } from "antd";
import { PoweroffOutlined, UserAddOutlined } from "@ant-design/icons";
const { Header } = Layout;
export default function Loginbutton() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const handleToggleForm = () => {
    setIsLogin((prev) => !prev);
  };
  const handleFormSubmit = () => {};
  if (location.pathname !== "/Fromcard") {
    return null;
  }
  return (
    <Flex wrap gap="small">
      <Link to="/Loginbutton">
        <Button type="primary" danger>
          Primary
        </Button>
      </Link>
    </Flex>
  );
}
