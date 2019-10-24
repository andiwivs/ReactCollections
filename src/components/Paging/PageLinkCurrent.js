import React from "react";
import PropTypes from "prop-types";

const PageLinkCurrent = ({ currentPageIndex }) => {
  return <button disabled>{currentPageIndex}</button>;
};

PageLinkCurrent.propTypes = {
  currentPageIndex: PropTypes.number.isRequired
};

export default PageLinkCurrent;
