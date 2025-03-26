import React from "react";
import { Table} from "antd";

const Userdata = ({ dataSource, columns }) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey="username"
      pagination={false}
    />
  );
};

export default Userdata;
