import React from "react";
import { Form, Input, Button, DatePicker, Radio, Row, Col, Card } from "antd";

export default function SignupForm() {
  return (
    <Row justify="center" align="middle" style={{ backgroundColor: "#ffffff" }}>
      <Col>
        <Card style={{ width: 420, padding: 30 }}>
          <h3 style={{ textAlign: "center" }}>Sign up</h3>
          <p style={{ textAlign: "center", marginBottom: 20 }}>
            It's quick and easy
          </p>
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
              <DatePicker
                picker="day"
                placeholder="Select Day"
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Form.Item label="Gender">
              <Radio.Group
                style={{ display: "flex", justifyContent: "space-between" }} >
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
