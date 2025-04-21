import React from "react";
import { Table } from "antd";

const Qoutes = ({ dataSource, columns, pagination }) => {


  console.log('----------hwll0--------', dataSource); 

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey="user_id" 
      pagination={pagination}
    />
  );
};

export default Qoutes;
