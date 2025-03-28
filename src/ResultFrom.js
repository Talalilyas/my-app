import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Select, InputNumber } from "antd";

export default function ResultForm() {
  const [value, setValue] = useState(3);
  const [form] = Form.useForm(); 
  function handleChange(val) {
    setValue(val);
  }
  const handleChangeSelect = (val) => {
    const teacherName = val === "lucy" ? "Prof. Amjad" : "Ahmad";
    form.setFieldsValue({ teacher: teacherName }); 
  };
  const handleFormSubmit = (values) => {
    console.log("Form Submitted:", values);
  };
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={24} sm={18} md={12} lg={8}>
        <h3>Student Result Card</h3>
        <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please enter your first name!" },
            ]}>
            <Input placeholder="Enter your first name" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please enter your last name!" },
            ]}>
            <Input placeholder="Enter your last name" />
          </Form.Item>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="Enter Class"
                name="classNumber"
                rules={[
                  { required: true, message: "Please enter your class!" },
                ]}>
                <InputNumber
                  min={1}
                  max={20}
                  value={value}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item
                label="Result Type"
                name="resultType"
                rules={[
                  { required: true, message: "Please select a result type!" },
                ]} >
                <Select
                  placeholder="Select Result Type"
                  onChange={handleChangeSelect}
                  options={[
                    { value: "jack", label: "Final result" },
                    { value: "lucy", label: "Semester system" },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Teacher"
            name="teacher"
            rules={[
              { required: true, message: "Please select a result type!" },
            ]}
          >
            <Input placeholder="Teacher Name" disabled />
          </Form.Item>

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
