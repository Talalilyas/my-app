import React, { useEffect, useState } from "react";
import { Card, Spin } from "antd";
import Foodrecipe from "./Foodrecipe";
import useFetchQuotes from "./Usefetch";

export default function Grade() {
  const [trigger, setTrigger] = useState(0);
  const { data, loading, sendReq } = useFetchQuotes("http://localhost:8080/result", trigger);

  console.log(loading,"loading---")
  useEffect(() => {
    const timer = setTimeout(() => {
      sendReq()
    }, 10000);


    return () => clearTimeout(timer); 
  }, []);

  return (
    <Card title="Grades" style={{ maxWidth: 1000, margin: "auto" }}>
      {loading ? (
        <Spin size="large" />
      ) : data && data.length > 0 ? (
        <Foodrecipe
          dataSource={data}
          columns={[
            { title: "First Name", dataIndex: "first_name", key: "firstname" },
            { title: "Last Name", dataIndex: "last_name", key: "lastname" },
            { title: "Score", dataIndex: "score", key: "score" },
            { title: "Grade", dataIndex: "grade", key: "grade" },
            { title: "Teacher name", dataIndex: "teacher_name",key: "teacher_name",},]}
          pagination={{ pageSize: 11 }}
        />
      ) : (
        <p>No users available.</p>
      )}
    </Card>
  );
}
