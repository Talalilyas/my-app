import React from "react";
import { Table} from "antd";

const Qoutes = ({ dataSource, columns }) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey="qoute"
      
    />
  );
};

export default Qoutes;
