import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";
import { createStyles } from "antd-style";

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

const DataTable = ({ title, dataSource, columns, className ,props}) => {
  const { styles } = useStyle();

  return (
    <div className={styles.customTable}>
      <h2>{title}</h2>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 20,
        }}
        scroll={{
          y: 275,
        }}
        className={className}
      />
    </div>
  );
};

DataTable.propTypes = {
  title: PropTypes.string.isRequired,
  dataSource: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default DataTable;
