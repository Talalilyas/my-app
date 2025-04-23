import React, { useState } from "react";
import { Form, Input, Button, Card, message, Switch, Row, Col } from "antd";

export default function SettingsPage() {
  const [form] = Form.useForm();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSubmit = (values) => {
    console.log("Settings updated:", { ...values, notificationsEnabled });  
    message.success("Settings have been updated!");
  };

  return (
    <Card title="Settings" style={{ maxWidth: 700, margin: "auto" }}>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
        initialValues={{
          username: "JohnDoe",
          email: "johndoe@example.com",
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: "Please enter your email address" },
            { type: "email", message: "Invalid email format" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item label="Enable Notifications">
          <Row align="middle" justify="space-between">
            <Col>
              <span>Receive Email Notifications</span>
            </Col>
            <Col>
              <Switch
                checked={notificationsEnabled}
                onChange={(checked) => setNotificationsEnabled(checked)}
              />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit" block>
            Save Settings
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
