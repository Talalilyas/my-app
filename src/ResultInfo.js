import React, { useState } from "react";
import { Form, Select, Row, Col, Typography, Input } from "antd";

const ResultInfo = ({ form }) => {
  const [value, setValue] = useState(3);
  const [resultType, setResultType] = useState("");
  const [teacher, setTeacher] = useState("");
  const { Text } = Typography;

  const handleChange = (val) => {
    setValue(val);

    let newResultType = "";
    let newTeacher = "";

    if (val <= 12) {
      newResultType = "Final Result";
    } else if (val <= 16) {
      newResultType = "Semester Result";
    }

    if (val <= 6) {
      newTeacher = "Select your teacher ";
    } else if (val <= 9) {
      newTeacher = "Select your teacher ";
    } else if (val <= 12) {
      newTeacher = "Select your teacher ";
    } else if (val <= 16) {
      newTeacher = "Select your teacher ";
    }

    setResultType(newResultType);
    setTeacher(newTeacher);

    form.setFieldsValue({
      resultType: newResultType,
      teacher: newTeacher,
    });
  };

  const classOptions = [
    { label: "Class 4", value: 4 },
    { label: "Class 5", value: 5 },
    { label: "Class 6", value: 6 },
    { label: "Class 7", value: 7 },
    { label: "Class 8", value: 8 },
    { label: "Class 9", value: 9 },
    { label: "Class 10", value: 10 },
    { label: "Class 11", value: 11 },
    { label: "Class 12", value: 12 },
    { label: "Class 13", value: 13 },
    { label: "Class 14", value: 14 },
    { label: "Class 15", value: 15 },
    { label: "Class 16", value: 16 },
  ];

  return (
    <Row gutter={16}>
      <Col span={10}>
        <Form.Item
          label="Enter Class"
          name="classNumber"
          rules={[{ required: true, message: "Please select your class!" }]}
        >
          <Select
            placeholder="Select class"
            options={classOptions}
            value={value}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Col>

      {value >= 4 && value <= 12 && (
        <Col span={12}>
          <Form.Item
            label="Grade"
            name="grade"
            rules={[{ required: true, message: "Please enter your grade!" }]}
          >
            <Select
              placeholder="Select your grade"
              options={[
                { value: "1", label: "A+" },
                { value: "2", label: "B" },
                { value: "3", label: "C" },
              ]}
            />
          </Form.Item>
        </Col>
      )}

      {value >= 13 && (
        <Col span={12}>
          <Form.Item
            label="CGPA"
            name="cgpa"
            rules={[{ required: true, message: "Please enter your CGPA!" }]}
          >
            <Select
              placeholder="Select CGPA"
              options={[
                { value: "1", label: "4" },
                { value: "2", label: "3.5" },
                { value: "3", label: "3" },
              ]}
            />
          </Form.Item>
        </Col>
      )}
      <Col span={11}>
        <Form.Item label="Result Type" name="resultType">
          <Text type="secondary">
            {resultType || "Select class to see result type"}
          </Text>
        </Form.Item>
      </Col>
      {value >= 4 && value <= 6 && (
        <Col span={13}>
          <Form.Item label="Teacher" name="teacher">
            <Select
              placeholder="Select CGPA"
              options={[
                { value: "1", label: "Asad " },
                { value: "2", label: "ahmad" },
                { value: "3", label: "syed" },
              ]}
            />
          </Form.Item>
        </Col>
      )}
      {value >= 7 && value <= 8 && (
        <Col span={13}>
          <Form.Item label="Teacher" name="teacher">
            <Select
              placeholder="Select CGPA"
              options={[
                { value: "1", label: "Maryam" },
                { value: "2", label: "Bilal" },
                { value: "3", label: "Abdullah" },
              ]}
            />
          </Form.Item>
        </Col>
      )}
      {value >= 9 && value <= 10 && (
        <Col span={13}>
          <Form.Item label="Teacher" name="teacher">
            <Select
              placeholder="Select CGPA"
              options={[
                { value: "1", label: "iqbal" },
                { value: "2", label: "murad" },
              ]}
            />
          </Form.Item>
        </Col>
      )}
      {value >= 11 && value <= 12 && (
        <Col span={13}>
          <Form.Item label="Teacher" name="teacher">
            <Select
              placeholder="Select CGPA"
              options={[
                { value: "1", label: "Sarfaraz" },
                { value: "2", label: "arshad" },
              ]}
            />
          </Form.Item>
        </Col>
      )}
       {value >= 13 && value <= 14 && (
        <Col span={13}>
          <Form.Item label="Teacher" name="teacher">
            <Select
              placeholder="Select CGPA"
              options={[
                { value: "1", label: "ALi" },
                { value: "2", label: "aasad" },
              ]}
            />
          </Form.Item>
        </Col>
      )}
       {value >= 15 && value <= 16 && (
        <Col span={13}>
          <Form.Item label="Teacher" name="teacher">
            <Select
              placeholder="Select CGPA"
              options={[
                { value: "1", label: "hamza " },
                
              ]}
            />
          </Form.Item>
        </Col>
      )}
    </Row>
  );
};

export default ResultInfo;
