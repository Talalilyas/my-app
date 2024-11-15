import React, { useState, useEffect } from "react";
import { Table, Spin } from "antd";
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

const DataTable = ({ title, dataSource, columns, className }) => {
  const { styles } = useStyle();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [dataSource]);

  return (
    <div className={styles.customTable}>
      <h2>{title}</h2>
      {loading ? (
        <Spin
          style={{ display: "block", textAlign: "center", margin: "20px 0" }}
        />
      ) : (
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
          loading={loading}
        />
      )}
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
