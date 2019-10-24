import React from "react";
import PropTypes from "prop-types";

const PageLink = ({ pageIndex, onNavigate }) => {
  const handleClick = () => {
    onNavigate(pageIndex);
  };
  return <button onClick={handleClick}>{pageIndex}</button>;
};

PageLink.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default PageLink;
