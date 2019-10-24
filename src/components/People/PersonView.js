import React from "react";
import PropTypes from "prop-types";

const PersonView = ({ name }) => {
  return <div className="person-container">{name}</div>;
};

PersonView.propTypes = {
  name: PropTypes.string.isRequired
};

export default PersonView;
