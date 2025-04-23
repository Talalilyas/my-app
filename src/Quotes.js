import React, { useEffect } from "react";
import { Card, Spin } from "antd";
import Qoutes from "./Qutes";
import useFetch from "./Usefetch";

export default function QuotesPage() {
  const { data, loading } = useFetch("http://localhost:8080/Student");
  console.log(data, "hey");
  useEffect(() => {
    console.log(data,"this is my data")
  }, [data]);


  return (
    <Card title="User List" style={{ maxWidth: 1000, margin: "auto" }}>
      {loading ? (
        <Spin size="large" />
      ) : data && data.length > 0 ? (
        <Qoutes
          dataSource={data}
          columns={[
            { title: "First Name", dataIndex: "first_name", key: "firstname" },
            { title: "Last Name", dataIndex: "last_name", key: "lastname" },
            { title: "Email", dataIndex: "email", key: "email" },
            { title: "Gender", dataIndex: "gender", key: "gender" },
            { title: "Country", dataIndex: "country", key: "country" },
          ]}
          pagination={{ pageSize: 9 }}
        />
      ) : (
        <p>No users available.</p>
      )}
    </Card>
  );
}
