import React from "react";
import PropTypes from "prop-types";
import "./Message.css";

// import classNames from "classnames";

export default function Message(props) {
  // TODO: Use classNames to conditionally join classes.
  return <div className="message">{props.message}</div>;
}

Message.propTypes = {
  message: PropTypes.string,
  status: PropTypes.string
};
