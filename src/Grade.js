import React, { useEffect, useState } from "react";
import { Card, Spin, message } from "antd";
import Foodrecipe from "./Foodrecipe";

export default function Grade() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchStudentResults = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/result");
        if (!response.ok) throw new Error("Failed to fetch student results");

        const data = await response.json();
        const formattedData = Array.isArray(data)
          ? data.map((student, index) => ({
              key: index,
              firstName: student.first_name,
              lastName: student.last_name,
              score: student.score,
              grade: student.grade,
              teacher: student.teacher_name,
            }))
          : [];

        setResult(formattedData);
      } catch (error) {
        message.error(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentResults();
  }, []);

  return (
    <Card title="Student Grades" style={{ maxWidth: 1000, margin: "auto" }}>
      {loading ? (
        <Spin size="large" />
      ) : result.length > 0 ? (
        <Foodrecipe
          dataSource={result}
          columns={[
            { title: "First Name", dataIndex: "firstName", key: "firstName" },
            { title: "Last Name", dataIndex: "lastName", key: "lastName" },
            { title: "Score", dataIndex: "score", key: "score" },
            { title: "Grade", dataIndex: "grade", key: "grade" },
            { title: "Teacher", dataIndex: "teacher", key: "teacher" },
          ]}
          pagination={{ pageSize: 6 }}
        />
      ) : (
        <p>No student results available.</p>
      )}
    </Card>
  );
}
