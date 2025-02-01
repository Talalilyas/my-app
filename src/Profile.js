import React, { useState, useEffect } from "react";
import { Card, Spin, message, Descriptions } from "antd";
import useLocalStorageState from "use-local-storage-state";

export default function Profile() {
  console.log("Profile Component Loaded");

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const [accessToken, setAccessToken] = useLocalStorageState("accessToken", "");
  console.log("Access Token in Profile:", accessToken);

  useEffect(() => {
    if (!accessToken) {
      console.log("No access token found, redirecting...");
      message.error("Access token missing! Please log in again.");
      return;
    }

    fetch("https://dummyjson.com/user/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => {
        console.log("Response Status:", response.status);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error.message);
        message.error(`Error: ${error.message}`);
        setLoading(false);
      });
  }, [accessToken]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Card title="User Profile" style={{ maxWidth: 1000, margin: "auto" }}>
      {userData ? (
        <Descriptions bordered>
          <Descriptions.Item label="Username">
            {userData.username}
          </Descriptions.Item>
          <Descriptions.Item label="Email">{userData.email}</Descriptions.Item>
          <Descriptions.Item label="middlename">
            {userData.maidenName}
          </Descriptions.Item>
        </Descriptions>
      ) : (
        <p>No data available.</p>
      )}
    </Card>
  );
}
