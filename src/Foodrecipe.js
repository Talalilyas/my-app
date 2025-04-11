import React from "react";
import { Table } from "antd";

const Foodrecipe = ({ dataSource, columns }) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey="key"
      pagination={{ pageSize: 5 }}
    />
  );
};

export default Foodrecipe;
