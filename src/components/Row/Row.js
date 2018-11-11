import React from "react";
import PropTypes from "prop-types";
import "./Row.css";

import classNames from "classnames";

export default function Row(props) {
  let rowLabelStyles = classNames({
    row__label: true,
    "row__label--valid": props.status === "valid",
    "row__label--invalid": props.status === "invalid"
  });
  return (
    <div className="row">
      <div className={rowLabelStyles}>{props.label}</div>
      <div className="row__content">{props.children}</div>
    </div>
  );
}

Row.propTypes = {
  label: PropTypes.string,
  status: PropTypes.string
};
