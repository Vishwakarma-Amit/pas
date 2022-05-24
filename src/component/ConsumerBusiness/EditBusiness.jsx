import { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Bar from "../Navbar/Bar";

function EditBusiness() {
  const [business, setBusiness] = useState({
    agentId: "",
    agentName: "",
    businessAge: "",
    businessCategory: "",
    businessId: "",
    businessName: "",
    businessOverview: "",
    businessTurnover: "",
    businessType: "",
    businessValue: "",
    capitalInvested: "",
    consumerId: "",
    dob: "",
    email: "",
    firstName: "",
    lastName: "",
    panDetails: "",
    phone: "",
    totalEmployees: "",
    validity: "",
    website: "",
  });

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setBusiness({ ...business, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    axios
      .put("http://localhost:8081/consumer-api/updateConsumerBusiness", {
        agentId: business.agentId,
        agentName: business.agentName,
        businessAge: business.businessAge,
        businessCategory: business.businessCategory,
        businessId: business.businessId,
        businessName: business.businessName,
        businessOverview: business.businessOverview,
        businessTurnover: business.businessTurnover,
        businessType: business.businessType,
        businessValue: business.businessValue,
        capitalInvested: business.capitalInvested,
        consumerId: business.consumerId,
        dob: business.dob,
        email: business.email,
        firstName: business.firstName,
        lastName: business.lastName,
        panDetails: business.panDetails,
        phone: business.phone,
        totalEmployees: business.totalEmployees,
        validity: business.validity,
        website: business.website,
      })
      .then((res) => {
        alert("Business Daetails updated Successfully!!");
        setMsg({ res });
        console.log(res);
      })
      .catch((err) => {
        setError({ err });
        console.log(err, "Error");
      });
  };

  if (sessionStorage.getItem("isLoggedIn")) {
    return (
      <div>
        <Bar />
        <div className="container">
          <form onSubmit={handleSubmit}>
            <br />
            <br />
            <h2 className="text-secondary">Edit Consumer Business</h2>
            <div className="editcon">
              <h4 style={{ color: "rgb(247, 79, 49)" }}> {msg}</h4>
              <h4 style={{ color: "rgb(247, 79, 49)" }}> {error}</h4>
            </div>
            <Row>
              <div className="form-group col-3">
                <label className="fw-bold">Business Id</label>
                <input
                  type="text"
                  name="businessId"
                  className="form-control"
                  value={business.businessId}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Consumer Id</label>
                <input
                  type="text"
                  name="consumerId"
                  className="form-control"
                  value={business.consumerId}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Agent id</label>
                <input
                  type="number"
                  name="agentId"
                  className="form-control"
                  value={business.agentId}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Business value</label>
                <input
                  type="text"
                  name="businessValue"
                  className="form-control"
                  value={business.businessValue}
                  onChange={handleChange}
                  required
                />
              </div>
            </Row>
            <br />
            <Row>
              <div className="form-group col-3">
                <label className="fw-bold">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  value={business.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-3">
                <label className="fw-bold">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  value={business.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-3">
                <label className="fw-bold">Date of Birth</label>
                <input
                  type="text"
                  name="dob"
                  className="form-control"
                  value={business.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  className="form-control"
                  value={business.businessName}
                  onChange={handleChange}
                  required
                />
              </div>
            </Row>
            <br />
            <Row>
              <div className="form-group col-3">
                <label className="fw-bold">Pan Details</label>
                <input
                  type="text"
                  name="panDetails"
                  className="form-control"
                  value={business.panDetails}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  value={business.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Phone</label>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  value={business.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Website</label>
                <input
                  type="text"
                  name="website"
                  className="form-control"
                  value={business.website}
                  onChange={handleChange}
                  required
                />
              </div>
            </Row>
            <br />
            <Row>
              <div className="form-group col-3">
                <label className="fw-bold">Business Overview</label>
                <input
                  type="text"
                  name="businessOverview"
                  className="form-control"
                  value={business.businessOverview}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Validity</label>
                <input
                  type="text"
                  name="validity"
                  className="form-control"
                  value={business.validity}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Agent Name</label>
                <input
                  type="text"
                  name="agentName"
                  className="form-control"
                  value={business.agentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Business Category</label>
                <input
                  type="text"
                  name="businessCategory"
                  className="form-control"
                  value={business.businessCategory}
                  onChange={handleChange}
                  required
                />
              </div>
            </Row>
            <br />
            <Row>
              <div className="form-group col-3">
                <label className="fw-bold">Business Type</label>
                <input
                  type="text"
                  name="businessType"
                  className="form-control"
                  value={business.businessType}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Business Turnover</label>
                <input
                  type="number"
                  name="businessTurnover"
                  className="form-control"
                  value={business.businessTurnover}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Capital invested</label>
                <input
                  type="number"
                  name="capitalInvested"
                  className="form-control"
                  value={business.capitalInvested}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="form-group col-3">
                <label className="fw-bold">Total Employees</label>
                <input
                  type="number"
                  name="totalEmployees"
                  className="form-control"
                  value={business.totalEmployees}
                  onChange={handleChange}
                  required
                />
              </div>
            </Row>
            <br />
            <div className="form-group col-3">
              <label className="fw-bold">Business Age</label>
              <input
                type="number"
                name="businessAge"
                className="form-control"
                value={business.businessAge}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <Button type="submit">Edit Business</Button>&nbsp; &nbsp;
            <Link to="/">
              <Button>Cancel</Button>
            </Link>
          </form>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default EditBusiness;
