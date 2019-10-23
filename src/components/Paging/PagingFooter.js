import React from "react";
import PropTypes from "prop-types";

const PagingFooter = ({
  pageIndex,
  pageSize,
  totalCount,
  onPageIndexChanged
}) => {
  const handleChange = event => {
    onPageIndexChanged(parseInt(event.target.value));
  };

  const pageCount =
    Math.trunc(totalCount / pageSize) + (totalCount % pageSize ? 1 : 0);

  return (
    <div>
      <span>Page index ({pageCount} pages): </span>
      <select value={pageIndex} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
};

PagingFooter.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  onPageIndexChanged: PropTypes.func.isRequired
};

export default PagingFooter;
