import React, { Component } from 'react'
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'

class CreateConBusiness extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            dob: "",
            businessName: "",
            panDetails: "",
            email: "",
            phone: "",
            website: "",
            businessOverview: "",
            validity: "",
            agentName: "",
            agentId: "",
            businessCategory: "",
            businessType: "",
            businessTurnover: "",
            capital: "",
            totalEmployees: "",
            businessAge: "",
            isLoggegIn: false,
            createcon:'',
            isCreated: false,
            err:''
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firstNameHandler = (event) => {
        this.setState({
          firstName: event.target.value
        })
      }
      lastNameHandler = (event) => {
        this.setState({
          lastName: event.target.value
        })
      }
      dobHandler= (event) => {
        this.setState({
          dob: event.target.value
        })
      }
      businessNameHandler= (event) => {
        this.setState({
          businessName: event.target.value
        })
      }
      panDetailsHandler= (event) => {
        this.setState({
          panDetails: event.target.value
        })
      }
      emailHandler= (event) => {
        this.setState({
          email: event.target.value
        })
      }
      phoneHandler = (event) => {
        this.setState({
          phone: event.target.value
        })
      }
      websiteHandler= (event) => {
        this.setState({
          website: event.target.value
        })
      }
      businessOverviewHandler= (event) => {
        this.setState({
          businessOverview: event.target.value
        })
      }
      validityHandler= (event) => {
        this.setState({
          validity: event.target.value
        })
      }
      agentNameHandler= (event) => {
        this.setState({
          agentName: event.target.value
        })
      }
      agentIdHandler= (event) => {
        this.setState({
          agentId: event.target.value
        })
      }
      businessCategoryHandler= (event) => {
        this.setState({
          businessCategory: event.target.value
        })
      }
      businessTypeHandler= (event) => {
        this.setState({
          businessType: event.target.value
        })
      }
      businessTurnoverHandler= (event) => {
        this.setState({
          businessTurnover: event.target.value
        })
      }
      capitalHandler= (event) => {
        this.setState({
          capital: event.target.value
        })
      }
      totalEmployeesHandler= (event) => {
        this.setState({
          totalEmployees: event.target.value
        })
      }
      businessAgeHandler= (event) => {
        this.setState({
          businessAge: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        
        axios.post(
            "http://localhost:8081/consumer-api/createConsumerBusiness",{
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dob: this.state.dob,
            panDetails: this.state.panDetails,
            email: this.state.email,
            phone: this.state.phone,
            website: this.state.website,
            businessName: this.state.businessName,
            businessOverview: this.state.businessOverview,
            validity: this.state.validity,
            agentName: this.state.agentName,
            agentId: this.state.agentId,
            businessCategory: this.state.businessCategory,
            businessType: this.state.businessType,
            businessTurnover: this.state.businessTurnover,
            capitalInvested: this.state.capital,
            totalEmployees: this.state.totalEmployees,
            businessAge: this.state.businessAge,
        }).then((response) => {
            this.setState({createcon: response.data})
            console.log(response.data);
            alert(response.data)
            this.setState({isCreated : true })
            //localStorage.setItem("isCreated", true);
        }) 
        .catch((err) => {
          console.log(err.response.data, "Error")
          this.setState({ errorMsg: err.response.data })
      })   
      }
      render() {
        if(this.state.isCreated){
          return(
            <Link to='/viewbusiness' />
          )
        }else{
            return (
            <div className='container'>
            <form onSubmit={this.handleSubmit}>
                <br />
                <br />
                <h2 className="text-secondary">Create Consumer Business</h2>
                <div className='createcon'>
                  <h4 style={{color: 'rgb(247, 79, 49)'}}> {this.state.createcon}</h4>
                  <h4> {this.state.errorMsg}</h4>
                </div>
            <Row>
            <div className="form-group col-4">
                <label className="fw-bold">First Name</label>
                <input
                type="text"
                name="firstName"
                className="form-control"
                value={this.state.firstName} 
                onChange={this.firstNameHandler}
                required
                />
            </div>
            <div className="form-group col-4">
                <label className="fw-bold">Last name</label>
                <input
                type="text"
                name="lastName"
                className="form-control"
                value={this.state.lastName} 
                onChange={this.lastNameHandler}
                required
                />
            </div>
            <div className="form-group col-4">
                <label className="fw-bold">Date of Birth</label>
                <input
                type="text"
                name="dob"
                className="form-control"
                value={this.state.dob} 
                onChange={this.dobHandler}
                required
                />
            </div>
            </Row>
            <br />
            <Row>
            <div className="form-group col-4">
                <label className="fw-bold">Business Name</label>
                <input
                type="text"
                name="businessName"
                className="form-control"
                value={this.state.businessName} 
                onChange={this.businessNameHandler}
                required
                />
            </div>
            <br />
            <div className="form-group col-4">
                <label className="fw-bold">Pan Details</label>
                <input
                type="text"
                name="panDetails"
                className="form-control"
                value={this.state.panDetails} 
                onChange={this.panDetailsHandler}
                required
                />
            </div>
            <br />
            <div className="form-group col-4">
                <label className="fw-bold">Email</label>
                <input
                type="email"
                name="email"
                className="form-control"
                value={this.state.email} 
                onChange={this.emailHandler}
                required
                />
            </div>
            </Row>
            <br />
            <Row>
            <div className="form-group col-4">
                <label className="fw-bold">Phone</label>
                <input
                type="number"
                name="phone"
                className="form-control"
                value={this.state.phone} 
                onChange={this.phoneHandler}
                required
                />
            </div>
            <br />
            <div className="form-group col-4">
                <label className="fw-bold">Website</label>
                <input
                type="text"
                name="website"
                className="form-control"
                value={this.state.website} 
                onChange={this.websiteHandler}
                required
                />
            </div>
            <br />
            <div className="form-group col-4">
                <label className="fw-bold">Business Overview</label>
                <input
                type="text"
                name="businessOverview"
                className="form-control"
                value={this.state.businessOverview} 
                onChange={this.businessOverviewHandler}
                required
                />
            </div>
            </Row>
            <br />
            <Row>
            <div className="form-group col-4">
                <label className="fw-bold">Validity</label>
                <input
                type="text"
                name="validity"
                className="form-control"
                value={this.state.validity} 
                onChange={this.validityHandler}
                required
                />
            </div>
            <br />
            <div className="form-group col-4">
                <label className="fw-bold">Agent Name</label>
                <input
                type="text"
                name="agentName"
                className="form-control"
                value={this.state.agentName} 
                onChange={this.agentNameHandler}
                required
                />
            </div>
            <br />
            <div className="form-group col-4">
                <label className="fw-bold">Agent id</label>
                <input
                type="number"
                name="agentId"
                className="form-control"
                value={this.state.agentId} 
                onChange={this.agentIdHandler}
                required
                />
            </div>
            </Row>
            <br />
            <Row>
            <div className="form-group col-4">
                <label className="fw-bold">Business Category</label>
                <input
                type="text"
                name="businessCategory"
                className="form-control"
                value={this.state.businessCategory} 
                onChange={this.businessCategoryHandler}
                required
                />
            </div>
            <br />
            <div className="form-group col-4">
                <label className="fw-bold">Business Type</label>
                <input
                type="text"
                name="businessType"
                className="form-control"
                value={this.state.businessType} 
                onChange={this.businessTypeHandler}
                required
                />
            </div>
            <br />
            <div className="form-group col-4">
                <label className="fw-bold">Business Turnover</label>
                <input
                type="number"
                name="businessTurnover"
                className="form-control"
                value={this.state.businessTurnover} 
                onChange={this.businessTurnoverHandler}
                required
                />
            </div>
            </Row>
            <br />
            <Row>
            <div className="form-group col-4">
                <label className="fw-bold">Capital invested</label>
                <input
                type="number"
                name="capital"
                className="form-control"
                value={this.state.capital} 
                onChange={this.capitalHandler}
                required
                />
            </div>
            <br />
            <div className="form-group col-4">
                <label className="fw-bold">Total Employees</label>
                <input
                type="number"
                name="totalEmployees"
                className="form-control"
                value={this.state.totalEmployees} 
                onChange={this.totalEmployeesHandler}
                required
                />
            </div>
            <br />
            <div className="form-group col-4">
                <label className="fw-bold">Business Age</label>
                <input
                type="number"
                name="businessAge"
                className="form-control"
                value={this.state.businessAge} 
                onChange={this.businessAgeHandler}
                required
                />
            </div>
            </Row>
        <br />
        <Button type="submit">Create</Button>&nbsp; &nbsp;
        <Link to="/"><Button>Cancel</Button></Link>
        <br />
        <br />
        </form>
    </div>  
  )}
}
}

export default CreateConBusiness;
