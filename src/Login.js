import React, { useState } from "react";
import { Button, Input, Form, Row, Col, Card, message } from "antd";
import useLocalStorageState from "use-local-storage-state";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [isLogin, setLogin] = useLocalStorageState("Sginup", false); 
  const [users, setisUser] = useLocalStorageState("user", { username: "" }); 
  const [accessToken, setAccessToken] = useLocalStorageState("accessToken", ""); 

  const navigate = useNavigate();

  
  const handleSubmit = async () => {
    const loginData = {
      username: username, 
      password: password, 
      expiresInMins: 30,
    };

    console.log("Request Body:", JSON.stringify(loginData));

    try {
      const response = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error Details:", errorDetails);
        throw new Error(errorDetails.message || "Invalid credentials");
      }

      const data = await response.json();
      console.log("Response Data:", data);

      message.success("Login successful!");
      setAccessToken(data.token); 
      setisUser({ username }); 
      navigate("/Profile"); 
    } catch (err) {
      console.error("Error:", err.message);
      message.error(`Error: ${err.message}`);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={24} sm={18} md={12} lg={8}>
        <Card
          title="Login"
          bordered={false}
          style={{
            maxWidth: 400,
            margin: "auto",
            borderRadius: 8,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form
            layout="vertical"
            onFinish={handleSubmit} 
          >
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please enter your username!" },
                { type: "username" },
              ]}
            >
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter your email address"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
