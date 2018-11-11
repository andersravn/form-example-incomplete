import React from "react";
import "./Register.css";

import { validateUsername, validateEmail, createUser } from "../../fake_api";

import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import InputText from "../../components/InputText/InputText";
import Message from "../../components/Message/Message";
import Row from "../../components/Row/Row";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailStatus: "",
      password: "",
      passwordStatus: "",
      successMessage: "",
      username: "",
      usernameStatus: "",
      messageStatus: "",
      message: ""
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // TODO: Bind methods.
  }

  render() {
    return (
      <form className="register">
        <div className="register__heading">Sign up</div>
        <Row label="Username" status={this.state.usernameStatus}>
          <InputText
            status={this.state.usernameStatus}
            inputType="text"
            name="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </Row>
        {/* TODO: Implement email input */}
        {/* TODO: Implement password input */}
        {this.state.message && (
          <Message
            status={this.state.messageStatus}
            message={this.state.message}
          />
        )}
        <ButtonPrimary
          label="Sign up"
          disabled={this.allFieldsValid() ? false : true}
          onClick={this.handleSubmit}
        />
      </form>
    );
  }

  handleUsernameChange(event) {
    const username = event.target.value;
    const usernameValidation = validateUsername(username);
    if (!usernameValidation.valid) {
      this.setState({
        username,
        usernameStatus: "invalid",
        messageStatus: "error",
        message: usernameValidation.response.message
      });
    } else {
      this.setState({
        username,
        usernameStatus: "valid",
        messageStatus: "",
        message: ""
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, email, password } = this.state;
    const response = createUser(username, email, password);
    if (response.status === 201) {
      this.setState({
        username: "",
        usernameStatus: "",
        email: "",
        emailStatus: "",
        password: "",
        passwordStatus: "",
        messageStatus: "success",
        message: response.message
      });
    } else {
      this.setState({
        messageStatus: "error",
        message: response.message
      });
    }
  }

  allFieldsValid() {
    const { usernameStatus, emailStatus, passwordStatus } = this.state;
    if (
      usernameStatus === "valid" &&
      emailStatus === "valid" &&
      passwordStatus === "valid"
    ) {
      return true;
    } else {
      return false;
    }
  }
}
