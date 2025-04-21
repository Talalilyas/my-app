import React, { useEffect } from "react";
import { Card, Spin } from "antd";
import Qoutes from "./Qutes";
import useFetch from "./Usefetch";

export default function QuotesPage() {
  const { data, loading } = useFetch("http://localhost:8080/Studen");

  useEffect(() => {
    console.log("Fetched Data:", data);
  }, [data]);

  return (
    <Card title="User List" style={{ maxWidth: 1000, margin: "auto" }}>
      {loading ? (
        <Spin size="large" />
      ) : Array.isArray(data) && data.length > 0 ? (
        <Qoutes
          dataSource={data}
          columns={[
            { title: "First Name", dataIndex: "first_name", key: "first_name" },
            { title: "Last Name", dataIndex: "last_name", key: "last_name" },
            { title: "Email", dataIndex: "email", key: "email" },
          ]}
          
          pagination={{ pageSize: 9 }}
        />
      ) : (
        <p>No users available.</p>
      )}
    </Card>
  );
}
