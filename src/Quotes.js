import React, { useEffect, useState } from "react";
import { Card, Spin, message } from "antd";
import Qoutes from "./Qutes";

export default function QuotesPage() {
  const [loading, setLoading] = useState(false);
  const [User, setUser] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/user");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        console.log("Raw API Data:", data);
        const formattedData = Array.isArray(data)
          ? data.map((user, index) => ({
              key: index.toString(),
              firstname: user.first_name,
              lastname: user.last_name,
              email: user.email,
            }))
          : [];
console.log(User)
        setUser(formattedData);
        console.log(formattedData)
      } catch (error) {
        message.error(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <Card title="User List" style={{ maxWidth: 1000, margin: "auto" }}>
      {loading ? (
        <Spin size="large" />
      ) : User.length > 0 ? (
        <Qoutes
          dataSource={User}
          columns={[
            { title: "First Name", dataIndex: "firstname", key: "firstname" },
            { title: "Last Name", dataIndex: "lastname", key: "lastname" },
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
