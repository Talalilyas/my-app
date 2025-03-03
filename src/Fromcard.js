import React, { useContext } from "react";
import { Button, Input, DatePicker, Form, Radio, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import UserContext from "./Usercontext";

export default function FromCard() {
  const { setUser, setSignup, setLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const handleFormSubmit = (values) => {
    setUser({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      birthDate: values.birthDate.format("YYYY-MM-DD"),
      gender: values.gender,
    });
    setSignup(true);
    setLogin(true);
    navigate("/profile");
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", padding: "20px" }}>
      <Col xs={24} sm={14} md={8} lg={6}>
        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            marginTop: "20px",
          }} >
          <h3>User Registration Form</h3>
          <Form onFinish={handleFormSubmit} layout="vertical">
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}>
              <Input placeholder="Enter your first name" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}>
              <Input placeholder="Enter your last name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}>
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}>
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            <Form.Item
              label="Birth Date"
              name="birthDate"
              rules={[
                { required: true, message: "Please select your birth date!" },
              ]}>
              <DatePicker
                style={{ width: "100%" }}
                format="YYYY-MM-DD"
                placeholder="Select your birth date"/>
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                { required: true, message: "Please select your gender!" },
              ]}>
              <Radio.Group>
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
                <Radio value="Other">Other</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
}
