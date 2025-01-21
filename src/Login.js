import React, { useState } from "react";
import { Button, Input, Form, Row, Col, Card, message } from "antd";
import useLocalStorageState from "use-local-storage-state";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setLogin] = useLocalStorageState("Sginup", false);
  const [users, setisUser] = useLocalStorageState("user", {
    email: "",
  });

  const handleChange = (changedValues) => {
    const { name, value } = changedValues;

    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    setLogin(true);
    const loginData = {
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 30,
       lastName: 'Owais'
    };
    console.log(loginData, "---hey----");
    console.log("Request Body:", JSON.stringify(loginData));

    try {
      const response = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json",'Authorization': 'Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3Mzc0NjY3MzQsImV4cCI6MTczNzQ2ODUzNH0.EbSSpXOs-PlwmSpjLuEk-8v-pL4jnvU1JzOIgbAKowU"',}
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error(response.statusText || "Invalid credentials");
      }

      const data = await response.json();
      console.log("Response Status:", response.status);
      console.log("Response Data:", data);

      message.success("Login successful!");
      localStorage.setItem("accessToken", data.token);
      navigate("/");
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
            form={form}
            layout="vertical"
            onValuesChange={(_, allValues) => handleChange(allValues)}
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please enter your email address!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                value={email}
                onChange={(e) =>
                  handleChange({ name: "email", value: e.target.value })
                }
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  handleChange({ name: "password", value: e.target.value })
                }
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