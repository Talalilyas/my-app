import React, { useState } from "react";
import { Form, Select, InputNumber, Input, Row, Col } from "antd";

const ResultInfo = ({ form }) => {
  const [value, setValue] = useState(3);
  const handleChange = (val) => {
    setValue(val);};
  const handleChangeSelect = (val) => {
    const teacherName = val === "lucy" ? "Prof. Amjad" : "Ahmad";
    form.setFieldsValue({ teacher: teacherName });};
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Form.Item
          label="Enter Class"
          name="classNumber"
          rules={[{ required: true, message: "Please enter your class!" }]}>
          <InputNumber
            min={1}
            max={20}
            value={value}
            onChange={handleChange}
            style={{ width: "100%" }} />
        </Form.Item>
      </Col>
      <Col span={16}>
        <Form.Item
          label="Result Type"
          name="resultType"
          rules={[{ required: true, message: "Please select a result type!" }]} >
          <Select
            placeholder="Select Result Type"
            onChange={handleChangeSelect}
            options={[
              { value: "jack", label: "Final result" },
              { value: "lucy", label: "Semester system" },]}/>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item label="Teacher" name="teacher" 
         rules={[{ required: true, message: "Please select a result type!" }]}>
          <Input placeholder="Teacher Name" disabled />
        </Form.Item>
      </Col>
    </Row>
  );
};
export default ResultInfo;
