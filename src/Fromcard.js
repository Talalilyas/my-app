import React from "react";
import { Form, Input, Select, Button, DatePicker, Radio, Row, Col, Card } from "antd";

const { Option } = Select;

export default function SignupForm() {
  const monthOptions = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
  ];

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "100vh", backgroundColor: "#ffffff" }} // White background
    >
      <Col>
        <Card style={{ width: 400, padding: 30 }}>
          <h3 style={{ textAlign: "center" }}>Sign up</h3>
          <p style={{ textAlign: "center", marginBottom: 20 }}>It's quick and easy</p>

          <Form layout="vertical">
            <Form.Item label="First Name">
              <Input placeholder="First Name" />
            </Form.Item>

            <Form.Item label="Last Name">
              <Input placeholder="Last Name" />
            </Form.Item>

            <Form.Item label="Email">
              <Input placeholder="Email Address" />
            </Form.Item>

            <Form.Item label="Password">
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item label="Date of Birth">
              <Select placeholder="Select Month" style={{ marginBottom: "10px" }}>
                {/* {monthOptions.map(option => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option> */}
                {/* ))} */}
              </Select>

              <DatePicker picker="year" placeholder="Select Year" style={{ marginBottom: "10px", width: "100%" }} />
              <DatePicker picker="day" placeholder="Select Day" style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item label="Gender">
              <Radio.Group style={{ display: "flex", justifyContent: "space-between" }}>
                <Radio value="Female">Female</Radio>
                <Radio value="Male">Male</Radio>
                <Radio value="Custom">Custom</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item>
              <Button type="primary" block>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
