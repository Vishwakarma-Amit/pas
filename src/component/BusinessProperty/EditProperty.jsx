import React, { Component } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Bar from "../Navbar/Bar";
//import ViewProperty from './ViewProperty';

class EditProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyId: "",
      businessId: "",
      consumerId: "",
      insuranceType: "",
      propertyType: "",
      buildingSqft: "",
      buildingType: "",
      buildingStoreys: "",
      buildingAge: "",
      costOfTheAsset: "",
      salvageValue: "",
      usefulLifeOfTheAsset: "",
      isLoggegIn: false,
      editproperty: "",
      err: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  propertyIdHandler = (event) => {
    this.setState({
      propertyId: event.target.value,
    });
  };
  businessIdHandler = (event) => {
    this.setState({
      businessId: event.target.value,
    });
  };
  consumerIdHandler = (event) => {
    this.setState({
      consumerId: event.target.value,
    });
  };
  insuranceTypeHandler = (event) => {
    this.setState({
      insuranceType: event.target.value,
    });
  };
  propertyTypeHandler = (event) => {
    this.setState({
      propertyType: event.target.value,
    });
  };
  buildingSqftHandler = (event) => {
    this.setState({
      buildingSqft: event.target.value,
    });
  };
  buildingTypeHandler = (event) => {
    this.setState({
      buildingType: event.target.value,
    });
  };
  buildingStoreysHandler = (event) => {
    this.setState({
      buildingStoreys: event.target.value,
    });
  };
  buildingAgeHandler = (event) => {
    this.setState({
      buildingAge: event.target.value,
    });
  };
  costOfTheAssetHandler = (event) => {
    this.setState({
      costOfTheAsset: event.target.value,
    });
  };
  salvageValueHandler = (event) => {
    this.setState({
      salvageValue: event.target.value,
    });
  };
  usefulLifeOfTheAssetHandler = (event) => {
    this.setState({
      usefulLifeOfTheAsset: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(
        "http://localhost:8081/consumer-api/updateBusinessProperty/" +
          this.state.propertyId,
        {
          businessId: this.state.businessId,
          consumerId: this.state.consumerId,
          insuranceType: this.state.insuranceType,
          propertyType: this.state.propertyType,
          buildingSqft: this.state.buildingSqft,
          buildingType: this.state.buildingType,
          buildingStoreys: this.state.buildingStoreys,
          buildingAge: this.state.buildingAge,
          costOfTheAsset: this.state.costOfTheAsset,
          salvageValue: this.state.salvageValue,
          propertyId: this.state.propertyId,
          usefulLifeOfTheAsset: this.state.usefulLifeOfTheAsset,
        }
      )
      .then((response) => {
        this.setState({ editproperty: response.data });
        console.log(response.data);
        this.setState({ isCreated: true });
        //localStorage.setItem("isCreated", true);
      })
      .catch((err) => {
        console.log(err.response.data, "Error");
        this.setState({ errorMsg: err.response.data });
      });
  };
  render() {
    // if(this.state.isCreated){
    //   <ViewProperty />
    // }else{
    if (sessionStorage.getItem("isLoggedIn")) {
      return (
        <div>
          <Bar />
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <br />
              <br />
              <h2 className="text-secondary">Edit Business Property</h2>
              <div>
                <h4 style={{ color: "rgb(247, 79, 49)" }}>
                  {" "}
                  {this.state.editproperty}
                </h4>
                <h4 style={{ color: "red" }}> {this.state.errorMsg}</h4>
              </div>
              <Row>
                <div className="form-group col-4">
                  <label className="fw-bold">Property ID</label>
                  <input
                    type="number"
                    name="propertyId"
                    className="form-control"
                    value={this.state.propertyId}
                    onChange={this.propertyIdHandler}
                    required
                  />
                </div>
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
                  <label className="fw-bold">Insurance Type</label>
                  <input
                    type="text"
                    name="insuranceType"
                    className="form-control"
                    value={this.state.insuranceType}
                    onChange={this.insuranceTypeHandler}
                    required
                  />
                </div>
                <br />
                <div className="form-group col-4">
                  <label className="fw-bold">Property Type</label>
                  <input
                    type="text"
                    name="propertyType"
                    className="form-control"
                    value={this.state.propertyType}
                    onChange={this.propertyTypeHandler}
                    required
                  />
                </div>
                <br />
                <div className="form-group col-4">
                  <label className="fw-bold">Building Sqft</label>
                  <input
                    type="text"
                    name="buildingSqft"
                    className="form-control"
                    value={this.state.buildingSqft}
                    onChange={this.buildingSqftHandler}
                    required
                  />
                </div>
              </Row>
              <br />
              <Row>
                <div className="form-group col-4">
                  <label className="fw-bold">Building Type</label>
                  <input
                    type="text"
                    name="buildingType"
                    className="form-control"
                    value={this.state.buildingType}
                    onChange={this.buildingTypeHandler}
                    required
                  />
                </div>
                <br />
                <div className="form-group col-4">
                  <label className="fw-bold">Building Storeys</label>
                  <input
                    type="text"
                    name="buildingStoreys"
                    className="form-control"
                    value={this.state.buildingStoreys}
                    onChange={this.buildingStoreysHandler}
                    required
                  />
                </div>
                <br />
                <div className="form-group col-4">
                  <label className="fw-bold">Building Age</label>
                  <input
                    type="number"
                    name="buildingAge"
                    className="form-control"
                    value={this.state.buildingAge}
                    onChange={this.buildingAgeHandler}
                    required
                  />
                </div>
              </Row>
              <br />
              <Row>
                <div className="form-group col-4">
                  <label className="fw-bold">Cost of the Asset</label>
                  <input
                    type="number"
                    name="costOfTheAsset"
                    className="form-control"
                    value={this.state.costOfTheAsset}
                    onChange={this.costOfTheAssetHandler}
                    required
                  />
                </div>
                <br />
                <div className="form-group col-4">
                  <label className="fw-bold">Salvage Value</label>
                  <input
                    type="number"
                    name="salvageValue"
                    className="form-control"
                    value={this.state.salvageValue}
                    onChange={this.salvageValueHandler}
                    required
                  />
                </div>
                <br />
                <div className="form-group col-4">
                  <label className="fw-bold">Useful Life of the Asset</label>
                  <input
                    type="number"
                    name="usefulLifeOfTheAsset"
                    className="form-control"
                    value={this.state.usefulLifeOfTheAsset}
                    onChange={this.usefulLifeOfTheAssetHandler}
                    required
                  />
                </div>
              </Row>
              <br />
              <Button type="submit">Update</Button>&nbsp; &nbsp;
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

export default EditProperty;
