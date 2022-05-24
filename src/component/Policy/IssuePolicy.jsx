import React, { Component } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Bar from "../Navbar/Bar";

class IssuePolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policyId: "",
      consumerId: "",
      businessId: "",
      paymentDetails: "",
      acceptanceStatus: "",
      isLoggegIn: false,
      issuepolicy: "",
      isIssued: "",
      err: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  policyIdHandler = (event) => {
    this.setState({
      policyId: event.target.value,
    });
  };
  consumerIdHandler = (event) => {
    this.setState({
      consumerId: event.target.value,
    });
  };
  businessIdHandler = (event) => {
    this.setState({
      businessId: event.target.value,
    });
  };
  paymentDetailsHandler = (event) => {
    this.setState({
      paymentDetails: event.target.value,
    });
  };
  acceptanceStatusHandler = (event) => {
    this.setState({
      acceptanceStatus: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8082/policy-api/issuePolicy", {
        policyId: this.state.policyId,
        consumerId: this.state.consumerId,
        businessId: this.state.businessId,
        paymentDetails: this.state.paymentDetails,
        acceptanceStatus: this.state.acceptanceStatus,
      })
      .then((response) => {
        this.setState({ issuepolicy: response.data });
        console.log(response.data);
        this.setState({ isIssued: true });

        //localStorage.setItem("isCreated", true);
      })
      .catch((err) => {
        console.log(err.response.data, "Error");
        this.setState({ errorMsg: err.response.data });
      });
  };
  render() {
    // if (this.state.isIssued) {
    //   return (
    //     <div className="container">
    //       <h4 style={{ color: "rgb(247, 79, 49)" }}>
    //         {" "}
    //         {this.state.issuepolicy.acceptanceStatus}
    //       </h4>
    //       <Link to="/">
    //         <Button>Cancel</Button>
    //       </Link>
    //     </div>
    //   );
    // }
    if (sessionStorage.getItem("isLoggedIn")) {
      return (
        <div>
          <Bar />
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <br />
              <br />
              <h2 className="text-secondary">Issue Policy</h2>
              <div className="issuepolicy">
                <h4 style={{ color: "rgb(247, 79, 49)" }}>
                  {" "}
                  {this.state.issuepolicy.acceptanceStatus}
                </h4>
                <h4 style={{ color: "red" }}> {this.state.errorMsg}</h4>
              </div>
              <Row>
                <div className="form-group col-4">
                  <label className="fw-bold">Policy ID</label>
                  <input
                    type="text"
                    name="policyId"
                    className="form-control"
                    value={this.state.policyId}
                    onChange={this.policyIdHandler}
                    required
                  />
                </div>
                <br />
                <div className="form-group col-4">
                  <label className="fw-bold">Consumer ID</label>
                  <input
                    type="number"
                    name="consumerId"
                    className="form-control"
                    value={this.state.consumerId}
                    onChange={this.consumerIdHandler}
                    required
                  />
                </div>
              </Row>
              <br />
              <Row>
                <div className="form-group col-4">
                  <label className="fw-bold">Business ID</label>
                  <input
                    type="number"
                    name="businessId"
                    className="form-control"
                    value={this.state.businessId}
                    onChange={this.businessIdHandler}
                    required
                  />
                </div>
                <br />
                <div className="form-group col-4">
                  <label className="fw-bold">Payment Details</label>
                  <input
                    type="text"
                    name="paymentDetails"
                    className="form-control"
                    value={this.state.paymentDetails}
                    onChange={this.paymentDetailsHandler}
                    required
                  />
                </div>
              </Row>
              <br />
              <Row>
                <div className="form-group col-4">
                  <label className="fw-bold">Acceptance Status</label>
                  <input
                    type="text"
                    name="acceptanceStatus"
                    className="form-control"
                    value={this.state.acceptanceStatus}
                    onChange={this.acceptanceStatusHandler}
                    required
                  />
                </div>
              </Row>
              <br />
              <Button type="submit">Issue</Button>&nbsp; &nbsp;
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

export default IssuePolicy;
