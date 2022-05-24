import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import Bar from "../Navbar/Bar";
//import './stylesheets/style.css'

function ViewPolicy(props) {
  const [policy, setPolicy] = useState({
    consumerId: "",
    policyId: "",
  });

  const [PolicyList, setPolicyList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        "http://localhost:8082/policy-api/viewPolicy/?" +
          "consumerId=" +
          policy.consumerId +
          "&policyId=" +
          policy.policyId
      )
      .then((res) => {
        setPolicyList(res.data);
        console.log(res.data);
      });
  };

  const handleChange = (e) => {
    setPolicy({ ...policy, [e.target.name]: e.target.value });
  };

  if (sessionStorage.getItem("isLoggedIn")) {
    return (
      <div>
        <Bar />x
        <div className="container">
          <form onSubmit={handleSubmit}>
            <br />
            {/* <div className='quote'>
               <h4 style={{color: 'red'}}> {this.state.errorMsg}</h4>
             </div> */}
            <Row className="text-center">
              <div className="form-group col-3">
                <input
                  type="number"
                  name="consumerId"
                  className="form-control"
                  placeholder="Consumer Id"
                  value={policy.consumerId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-3">
                <input
                  type="text"
                  name="policyId"
                  className="form-control"
                  placeholder="Policy Id"
                  value={policy.policyId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-1">
                <Button type="submit">View</Button>
              </div>
            </Row>
          </form>
          <Row>
            <Col className="text-center">
              <table className="table table-striped">
                <thead>
                  <th className="w3-teal">
                    <td>
                      <tr>Consumer ID:</tr>
                      <tr>Policy ID:</tr>
                      <tr>Property Type:</tr>
                      <tr>Consumer Type:</tr>
                      <tr>Assured Sum:</tr>
                      <tr>Tenure:</tr>
                      <tr>Business Value:</tr>
                      <tr>Property Value:</tr>
                      <tr>Base Location:</tr>
                      <tr>Type:</tr>
                      <tr>Business ID:</tr>
                      <tr>Payment Details:</tr>
                      <tr>Acceptance Status:</tr>
                      <tr>Policy Status:</tr>
                      <tr>Effective Date:</tr>
                      <tr>Covered Sum:</tr>
                      <tr>Duration:</tr>
                      <tr>Accepted Quote:</tr>
                    </td>
                    <td>
                      <tr>{PolicyList.consumerId}</tr>
                      <tr>{PolicyList.policyId}</tr>
                      <tr>{PolicyList.propertyId}</tr>
                      <tr>{PolicyList.propertyType}</tr>
                      <tr>{PolicyList.consumerType}</tr>
                      <tr>{PolicyList.assuredSum}</tr>
                      <tr>{PolicyList.tenure}</tr>
                      <tr>{PolicyList.businessValue}</tr>
                      <tr>{PolicyList.propertyValue}</tr>
                      <tr>{PolicyList.baseLocation}</tr>
                      <tr>{PolicyList.type}</tr>
                      <tr>{PolicyList.businessId}</tr>
                      <tr>{PolicyList.paymentDetails}</tr>
                      <tr>{PolicyList.acceptanceStatus}</tr>
                      <tr>{PolicyList.policyStatus}</tr>
                      <tr>{PolicyList.effectiveDate}</tr>
                      <tr>{PolicyList.coveredSum}</tr>
                      <tr>{PolicyList.duration}</tr>
                      <tr>{PolicyList.acceptedQuote}</tr>
                    </td>
                  </th>
                </thead>
              </table>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ViewPolicy;
