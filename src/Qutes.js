import React from "react";
import { Table, Card } from "antd";

const Qoutes = ({ dataSource, columns }) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey="username"
      
    />
  );
};

export default Qoutes;
