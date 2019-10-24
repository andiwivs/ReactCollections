import React from "react";
import PropTypes from "prop-types";

const PageLinkNext = ({ currentPageIndex, totalPageCount, onNavigate }) => {
  const disabled = currentPageIndex === totalPageCount;
  const handleClick = event => {
    if (!disabled) onNavigate(currentPageIndex + 1);
  };

  return (
    <button disabled={disabled} onClick={handleClick}>
      Next
    </button>
  );
};

PageLinkNext.propTypes = {
  currentPageIndex: PropTypes.number.isRequired,
  totalPageCount: PropTypes.number.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default PageLinkNext;
