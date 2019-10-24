import React from "react";
import PropTypes from "prop-types";

const PageLink = ({ pageIndex, caption, disabled, isCurrent, onNavigate }) => {
  const dynamicProps = {};

  if (disabled) dynamicProps.disabled = true;

  const handleClick = () => {
    if (!disabled) onNavigate(pageIndex);
  };

  return (
    <button {...dynamicProps} onClick={handleClick}>
      {caption}
    </button>
  );
};

PageLink.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default PageLink;
