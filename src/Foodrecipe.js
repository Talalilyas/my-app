import React from "react";
import { Table } from "antd";

const Foodrecipe = ({ dataSource, columns }) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey="key"
      pagination={{ pageSize: 8 }}
    />
  );
};

export default Foodrecipe;
