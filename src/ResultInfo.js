import React, { useState } from "react";
import { Form, Select, InputNumber, Input, Row, Col } from "antd";

const ResultInfo = ({ form }) => {
  const [value, setValue] = useState(3);
  const [grade, setGrade] = useState();

  const handleChange = (val) => {
    setValue(val);
  };

  const handleChangeSelect = (val) => {
    const teacherName = val === "talal" ? "Prof. Amjad" : " PAhmad";
    form.setFieldsValue({ teacher: teacherName });
  };

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Form.Item
          label="Enter Class"
          name="classNumber"
          rules={[{ required: true, message: "Please enter your class!" }]}
        >
          <InputNumber
            min={4}
            max={16}
            value={value}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Col>
      {value >= 4 && value < 12 && (
        <Col span={8}>
          <Form.Item
            label="Grade"
            name="grade"
            rules={[{ required: true, message: "Please enter your grade!" }]}
          >
            <Input placeholder="Enter Grade" />
          </Form.Item>
        </Col>
      )}
      {value >= 12 && (
        <Col span={8}>
          <Form.Item
            label="CGPA"
            name="cgpa"
            rules={[{ required: true, message: "Please enter your CGPA!" }]}
          >
            <Input placeholder="Enter CGPA" />
          </Form.Item>
        </Col>
      )}
      <Col span={16}>
        <Form.Item
          label="Result Type"
          name="resultType"
          rules={[{ required: true, message: "Please select a result type!" }]} >
          <Select
            placeholder="Select Result Type"
            onChange={handleChangeSelect}
            options={[
              { value: "ali", label: "Final result" },
              { value: "talal", label: "Semester system" },
            ]}
          />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          label="Teacher"
          name="teacher"
          rules={[{ required: true, message: "Please select a result type!" }]}
        >
          <Input placeholder="Teacher Name" disabled />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default ResultInfo;
