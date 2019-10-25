import React from "react";
import PropTypes from "prop-types";

const ConditionalView = ({ isVisible, children }) => {
  return (
    <div style={{ display: isVisible ? "inherit" : "none" }}>
      {isVisible ? children : null}
    </div>
  );
};

ConditionalView.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default ConditionalView;
