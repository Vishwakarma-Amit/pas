import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Bar from "../Navbar/Bar";
//import './stylesheets/style.css'

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessValue: "",
      propertyValue: "",
      propertyType: "",
      isLoggegIn: false,
      quote: "",
      err: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  businessValueHandler = (event) => {
    this.setState({
      businessValue: event.target.value,
    });
  };
  propertyValueHandler = (event) => {
    this.setState({
      propertyValue: event.target.value,
    });
  };
  propertyTypeHandler = (event) => {
    this.setState({
      propertyType: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        "http://localhost:8083/policy-api/getQuotes/" +
          this.state.businessValue +
          "/" +
          this.state.propertyValue +
          "/" +
          this.state.propertyType
      )
      .then((response) => {
        //this.setState({ isRegistered: true })
        this.setState({ quote: response.data });
        console.log(response.data);
        //localStorage.setItem("isRegistered", true);
      })
      .catch((err) => {
        console.log(err.response.data, "Error");
        this.setState({ errorMsg: err.response.data });
      });
  };

  render() {
    if (sessionStorage.getItem("isLoggedIn")) {
      return (
        <div>
          <Bar />
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <br />
              <br />
              <h2 className="text-secondary">Get Quotes</h2>
              <div className="quote">
                <h4 style={{ color: "rgb(247, 79, 49)" }}>
                  {this.state.quote.quotes}
                </h4>
                <h4> {this.state.errorMsg}</h4>
              </div>
              <div className="form-group col-3">
                <label className="fw-bold">Business Value</label>
                <input
                  type="text"
                  name="id"
                  className="form-control"
                  value={this.state.businessValue}
                  onChange={this.businessValueHandler}
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Property Type</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.propertyType}
                  onChange={this.propertyTypeHandler}
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Property Value</label>
                <input
                  type="number"
                  name="age"
                  className="form-control"
                  value={this.state.propertyValue}
                  onChange={this.propertyValueHandler}
                />
              </div>
              <br />
              <Button type="submit">Get Quotes</Button>&nbsp; &nbsp;
              <Link to="/">
                <Button>Cancel</Button>
              </Link>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Quotes;
