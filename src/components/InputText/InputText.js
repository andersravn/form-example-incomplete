import React from "react";
import PropTypes from "prop-types";
import "./InputText.css";

import classNames from "classnames";

export default function InputText(props) {
  let inputStyles = classNames({
    "input-text": true,
    "input-text--valid": props.status === "valid",
    "input-text--invalid": props.status === "invalid"
  });
  return (
    <input
      name={props.name}
      type={props.inputType}
      className={inputStyles}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  status: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
