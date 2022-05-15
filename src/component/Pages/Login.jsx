import React, { Component } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import './stylesheets/login.css'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
            userNameError: '',
            passwordError: '',
            isLoggedIn: false,
            errorMsg: ''
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    handleUserNameChange(event) {
        if (event.target.value.length < 5) {
            this.setState({ userName: event.target.value, password: this.state.password, userNameError: "* Username is required", passwordError: this.state.passwordError })
        }
        else {
            this.setState({ userName: event.target.value, password: this.state.password, userNameError: "", passwordError: this.state.passwordError })
        }
    }

    handlePasswordChange(event) {
        if (event.target.value.length < 5) {
            this.setState({ userName: this.state.userName, password: event.target.value, userNameError: this.state.userNameError, passwordError: "* Password is required" })
        }
        else {
            this.setState({ userName: this.state.userName, password: event.target.value, userNameError: this.state.userNameError, passwordError: "" })
        }
    }


    submitHandler(event) {
        event.preventDefault()
        axios.post("http://localhost:8080/hospital/doctor-login", {
            userName: this.state.userName,
            password: this.state.password
        }).then((response) => {
            console.log(response.data);

            if (response.data.userName === this.state.userName && response.data.password === this.state.password) {
                this.setState({ isLoggedIn: true })
                localStorage.setItem("doctorId", response.data.doctorId)
                //this.props.onLogin(localStorage.getItem("doctorId"))
                this.setState({ isLoggedIn: true })
                localStorage.setItem("name", response.data.name)
                localStorage.setItem("isLoggedIn", true)
            }
        })
    }

    render() {
            return (
                <div >
                    <br />
                    <br />
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col className="login">
                                <form onSubmit={this.submitHandler}>
                                    <h3>Agent Login</h3>
                                    <h6 style={{ color: "red" }}>Fields marked with * are mandatory</h6>
                                    <h6 style={{ color: "red" }}>{this.state.userNameError}</h6>
                                    <h6 style={{ color: "red" }}>{this.state.passwordError}</h6>
                                    <h6 style={{ color: "red" }}> {this.state.errorMsg}</h6>
                                    <label>
                                        Username <span style={{ color: "red" }}>*</span>
                                        <br />
                                        <input type="text" class="form-control" placeholder={"Username"} value={this.state.userName} onChange={this.handleUserNameChange} required />
                                    </label>
                                    <br />
                                    <label>
                                        Password <span style={{ color: "red" }}>*</span>
                                        <br />
                                        <input type="password" class="form-control" placeholder={"Password"} value={this.state.password} onChange={this.handlePasswordChange} required />
                                    </label>
                                    <br />
                                    <br />
                                    <button type="submit" className=" btn btn-primary" >Submit</button>
                                </form>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            )
        }
}
export default Login;