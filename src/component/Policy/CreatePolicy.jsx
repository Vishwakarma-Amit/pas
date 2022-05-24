import React, { Component } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Bar from "../Navbar/Bar";

class CreatePolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consumerId: "",
      acceptedQuote: "",
      isCreated: false,
      createpolicy: "",
      err: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  consumerIdHandler = (event) => {
    this.setState({
      consumerId: event.target.value,
    });
  };
  acceptedQuoteHandler = (event) => {
    this.setState({
      acceptedQuote: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8082/policy-api/createPolicy", {
        consumerId: this.state.consumerId,
        acceptedQuote: this.state.acceptedQuote,
      })
      .then((response) => {
        this.setState({ createpolicy: response.data });
        console.log(response.data);
        this.setState({ isCreated: true });
        alert(response.data);
        //localStorage.setItem("isCreated", true);
      })
      .catch((err) => {
        console.log(err.response.data, "Error");
        this.setState({ errorMsg: err.response.data });
      });
  };
  render() {
    // if (this.state.isCreated) {
    //   return (
    //     <div className="container policy">
    //       <h4 style={{ color: "rgb(247, 79, 49)" }}>
    //         {" "}
    //         {this.state.createpolicy}
    //       </h4>
    //       <Navigate to="/createpolicy">OK</Navigate>&nbsp; &nbsp;
    //       <Link to="/viewpolicy">
    //         <Button>Issue Policy</Button>
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
              <h2 className="text-secondary">Create Policy</h2>
              <div className="createpolicy">
                <h4 style={{ color: "red" }}> {this.state.errorMsg}</h4>
              </div>
              <Row>
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
                <br />
                <div className="form-group col-4">
                  <label className="fw-bold">Accepted Quote</label>
                  <input
                    type="text"
                    name="acceptedQuote"
                    className="form-control"
                    value={this.state.acceptedQuote}
                    onChange={this.acceptedQuoteHandler}
                    required
                  />
                </div>
              </Row>
              <br />
              <Button type="submit">Create</Button>&nbsp; &nbsp;
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

export default CreatePolicy;
