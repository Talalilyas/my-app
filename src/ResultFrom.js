import React from "react";
import { Form, Button, Row, Col } from "antd";
import PersonalInfo from "./PersonalInfo";
import ResultInfo from "./ResultInfo";

export default function ResultForm() {
  const [form] = Form.useForm();

  const handleFormSubmit = (values) => {
    console.log("Form Submitted:", values);
  };
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={24} sm={18} md={12} lg={8}>
        <h3>Student Result Card</h3>
        <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
          <PersonalInfo />
          <ResultInfo form={form} />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
