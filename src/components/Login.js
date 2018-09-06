import React, { Component } from "react";
import "./Styles/Login.css";
import auth_logo from "./images/auth_logo.png";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }

  registerUser() {
    let body = {
      username: this.state.username,
      password: this.state.password
    };
    axios.post("/api/register", body).then(res => {
      this.props.history.push("/dashboard");
    });
  }

  loginUser() {
    let body = {
      username: this.state.username,
      password: this.state.password
    };
    axios.post("/api/login", body).then(res => {
      this.props.history.push("/dashboard");
    });
  }

  render() {
    return (
      <div className="root">
        <div className="login-container">
          <img src={auth_logo} alt="logo" className="Auth__logo" />

          <span className="username-tag">Username</span>
          <input
            className="username-input dark-green-border"
            type="text"
            value={this.state.username}
            onChange={e => this.handleChange("username", e.target.value)}
          />
          <br />
          <span className="password-tag">Password</span>
          <input
            className="password-input dark-green-border"
            type="password"
            value={this.state.password} 
            onChange={e => this.handleChange("password", e.target.value)}
          />
          <div className="button-container">
            <button
              onClick={e => this.loginUser()}
              className="login-button lightest_green_bgc open-sans-bold"
            >
              Login
            </button>
            <button
              onClick={e => this.registerUser()}
              className="register-button darkest_green_bgc open-sans-bold"
            >
                   Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}
