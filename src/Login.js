import React, { useState } from "react";
import { Button, Input, Form, Row, Col, Card, message } from "antd";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [form] = Form.useForm();
  const navigate = useNavigate(); 

  const handleChange = (changedValues) => {
    const { name, value } = changedValues;

    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  };

 
  
   
    const handleSubmit = () => {
      const loginData = {
        username: "emilys", 
        password: "emilyspass", 
        expiresInMins: 30,
      };
    
      console.log("Request Body:", JSON.stringify(loginData)); 
    
      fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      })
        .then(async (res) => {
          const data = await res.json();
          console.log("Response Status:", res.status); 
          console.log("Response Data:", data); 
          if (!res.ok) throw new Error(data.message || "Invalid credentials");
          return data;
        })
        .then((data) => {
          message.success("Login successful!");
          localStorage.setItem("token", data.token);
          navigate("/greeting"); 
        })
        .catch((err) => {
          console.error("Error:", err.message);
          message.error(`Error: ${err.message}`);
        });
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
            {/* Email Input */}
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
