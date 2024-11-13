import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

const DataTable = ({ title, dataSource, columns,dataSources }) => {
  return (
    <div>
      <h2>{title} this is table</h2>
      <Table dataSource={dataSource} columns={columns} pagination={false} dataSource1={dataSources}  />
    </div>
  );
};

DataTable.propTypes = {
  title: PropTypes.string.isRequired,
  dataSource: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default DataTable;
