import React from "react";
import PropTypes from "prop-types";

const PageLinkPrevious = ({ currentPageIndex, onNavigate }) => {
  const disabled = currentPageIndex === 1;
  const dynamicProps = {};

  if (disabled) dynamicProps.disabled = true;

  const handleClick = event => {
    if (!disabled) onNavigate(currentPageIndex - 1);
  };

  return (
    <button {...dynamicProps} onClick={handleClick}>
      Previous
    </button>
  );
};

PageLinkPrevious.propTypes = {
  currentPageIndex: PropTypes.number.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default PageLinkPrevious;
