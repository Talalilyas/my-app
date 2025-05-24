import React, { useEffect, useState } from "react";
import { Spin, Card, message } from "antd";
import useLocalStorageState from "use-local-storage-state";
import Userdata from "./Userdata";
import useFetchQuotes from "./Usefetch";

export default function ProfilePage() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [accessToken] = useLocalStorageState("accessToken", "");

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/users/1", {});
        if (!response.ok) throw new Error("Failed to fetch user data");

        const data = await response.json();
        setUserData([data]);
      } catch (error) {
        message.error(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [accessToken]);

      
   
    

  return (
    <Card
      title="User Profile"
      style={{ maxWidth: 900, margin: "auto", marginTop: 30 }}
      headStyle={{ fontSize: "20px", fontWeight: "bold" }}
    >
      {loading ? (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <Spin size="large" />
        </div>
      ) : userData.length > 0 ? (
        <Userdata
          dataSource={userData}
          columns={[
            { title: "Username", dataIndex: "username", key: "username" },
            { title: "Email", dataIndex: "email", key: "email" },
            {
              title: "Full Name",
              key: "fullName",
              render: (record) => `${record.firstName} ${record.lastName}`,
            },
            { title: "Phone", dataIndex: "phone", key: "phone" },
            { title: "Birth Date", dataIndex: "birthDate", key: "birthDate" },
          ]}
        />
      ) : (
        <p>No user data available.</p>
      )}
    </Card>
  );
}
