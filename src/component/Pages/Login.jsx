import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./stylesheets/login.css";
import Bar from "../Navbar/Bar";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",
      isLoggedIn: false,
      errorMsg: "",
      token: "",
      agentId: "",
    };
    this.handleusernameChange = this.handleusernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  handleusernameChange(event) {
    if (event.target.value.length < 4) {
      this.setState({
        username: event.target.value,
        password: this.state.password,
        usernameError: "* username is required",
        passwordError: this.state.passwordError,
      });
    } else {
      this.setState({
        username: event.target.value,
        password: this.state.password,
        usernameError: "",
        passwordError: this.state.passwordError,
      });
    }
  }

  handlePasswordChange(event) {
    if (event.target.value.length < 5) {
      this.setState({
        username: this.state.username,
        password: event.target.value,
        usernameError: this.state.usernameError,
        passwordError: "* Password is required",
      });
    } else {
      this.setState({
        username: this.state.username,
        password: event.target.value,
        usernameError: this.state.usernameError,
        passwordError: "",
      });
    }
  }

  submitHandler(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8084/authenticate", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response.data);
        sessionStorage.setItem("token", response.data.jwttoken);
        this.setState({ isLoggedIn: true });
        sessionStorage.setItem("isLoggedIn", true);

        // if (response.data.username === this.state.username && response.data.password === this.state.password) {
        //     this.setState({ isLoggedIn: true })
        //     //localStorage.setItem("doctorId", response.data.doctorId)
        //     //this.props.onLogin(localStorage.getItem("doctorId"))

        //     //localStorage.setItem("name", response.data.name)

        // }
      });
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Navigate to="/createbusiness" />;
    } else {
      return (
        <div>
          <Bar />
          <br />
          <br />
          <div>
            <Row>
              <Col></Col>
              <Col className="login">
                <form onSubmit={this.submitHandler}>
                  <h3>Agent Login</h3>
                  <h6 style={{ color: "red" }}>
                    Fields marked with * are mandatory
                  </h6>
                  <h6 style={{ color: "red" }}>{this.state.usernameError}</h6>
                  <h6 style={{ color: "red" }}>{this.state.passwordError}</h6>
                  <h6 style={{ color: "red" }}> {this.state.errorMsg}</h6>
                  <label>
                    username <span style={{ color: "red" }}>*</span>
                    <br />
                    <input
                      type="text"
                      class="form-control"
                      placeholder={"username"}
                      value={this.state.username}
                      onChange={this.handleusernameChange}
                      required
                    />
                  </label>
                  <br />
                  <label>
                    Password <span style={{ color: "red" }}>*</span>
                    <br />
                    <input
                      type="password"
                      class="form-control"
                      placeholder={"Password"}
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                      required
                    />
                  </label>
                  <br />
                  <br />
                  <button type="submit" className=" btn btn-primary">
                    Submit
                  </button>
                </form>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </div>
      );
    }
  }
}
export default Login;
