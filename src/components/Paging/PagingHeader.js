import React from "react";
import PropTypes from "prop-types";

const PagingHeader = ({
  pageIndex,
  pageSize,
  totalCount,
  onPageSizeChanged
}) => {
  const handleChange = event => {
    onPageSizeChanged(parseInt(event.target.value));
  };

  const countOffset = (pageIndex - 1) * pageSize;
  const countFrom = countOffset + 1;
  const countTo = countOffset + Math.min(totalCount - countOffset, pageSize);

  return (
    <div style={{ margin: "10px" }}>
      <span>
        {countFrom}-{countTo} of {totalCount}
      </span>
      <select
        value={pageSize}
        onChange={handleChange}
        style={{ marginLeft: "10px" }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

PagingHeader.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  onPageSizeChanged: PropTypes.func.isRequired
};

export default PagingHeader;
