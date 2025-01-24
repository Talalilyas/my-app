import React, { useState, useEffect } from "react";
import { Card, Spin, message, Descriptions } from "antd";
import useLocalStorageState from "use-local-storage-state";

export default function Profile() {
  console.log("Profile Component Loaded");

  const [accessToken] = useLocalStorageState("accessToken", "");
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null); // Change to null as it's an object

  useEffect(() => {
    console.log("Access Token:", accessToken);

    if (!accessToken) {
      console.log("No access token found, redirecting...");
      message.error("Access token not found! Redirecting to login.");
      window.location.href = "/Login"; // Change to correct path if needed
      return;
    }

    // Make the fetch request
    fetch("https://dummyjson.com/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
    })
      .then((response) => {
        console.log("Response Status:", response.status); // Check status code
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data); // Log the fetched data
        setUserData(data); // Set the fetched data
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching user data:", error.message);
        message.error(`Error: ${error.message}`);
        setLoading(false); // Stop loading if error occurs
      });
  }, [accessToken]);

  // If loading, show a spinner
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <Spin size="large" />
      </div>
    );
  }

  // If user data is available, display it
  return (
    <Card title="User Profile" style={{ maxWidth: 600, margin: "auto" }}>
      {userData ? (
        <Descriptions bordered>
          <Descriptions.Item label="Username">{userData.username}</Descriptions.Item>
          <Descriptions.Item label="Email">{userData.email}</Descriptions.Item>
          <Descriptions.Item label="Full Name">{userData.fullName}</Descriptions.Item>
          {/* Add more fields as required */}
        </Descriptions>
      ) : (
        <p>No data available.</p>
      )}
    </Card>
  );
}
