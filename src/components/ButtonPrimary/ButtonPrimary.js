import React from "react";
import PropTypes from "prop-types";
import "./ButtonPrimary.css";

import classNames from "classnames";

export default function ButtonPrimary(props) {
  let buttonPrimaryStyles = classNames({
    "button-primary": true,
    "button-primary--disabled": props.disabled
  });
  return (
    <button
      className={buttonPrimaryStyles}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}

ButtonPrimary.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
