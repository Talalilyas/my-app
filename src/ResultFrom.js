import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Select, Space, InputNumber } from "antd";

export default function ResultForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [value, setValue] = useState(3);
  function handleChange(val) {
    setValue(val);
    console.log("InputNumber value:", val);
  }
  const handleChangeSelect = (val) => {
    console.log(`Selected: ${val}`);
  };
  const handleFormSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={24} sm={18} md={12} lg={6}>
        <h3>Student Result Card</h3>
        <Form layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "Please enter your first name!" }]}
          >
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
            />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please enter your last name!" }]}
          >
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
            />
          </Form.Item>
          <Col span={12} lg={24}>
          <Form.Item label="Enter class">
            <InputNumber min={1} max={20} defaultValue={3} onChange={handleChange}  style={{width :"40%"}}/>
            <Select
              defaultValue="lucy"
              style={{ width:"60%"}}
              onChange={handleChangeSelect}
              options={[
                { value: "jack", label: "Final result" },
                { value: "lucy", label: "Semster system" },
               
              ]}
            />
          </Form.Item>
          </Col>
          {value < 12 ? <p>Final Result</p> : <p>Semester System</p>}
         
          

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
