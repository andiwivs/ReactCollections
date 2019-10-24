import React from "react";
import PropTypes from "prop-types";

const PageLinkNext = ({ currentPageIndex, totalPageCount, onNavigate }) => {
  const disabled = currentPageIndex === totalPageCount;
  const dynamicProps = {};

  if (disabled) dynamicProps.disabled = true;

  const handleClick = () => {
    if (!disabled) onNavigate(currentPageIndex + 1);
  };

  return (
    <button {...dynamicProps} onClick={handleClick}>
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
