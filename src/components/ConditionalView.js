import React from "react";
import PropTypes from "prop-types";

const ConditionalView = props => {
  return (
    <div style={{ display: props.isVisible ? "inherit" : "none" }}>
      {props.isVisible ? props.children : null}
    </div>
  );
};

ConditionalView.propTypes = {
  isVisible: PropTypes.bool.isRequired
};

export default ConditionalView;
