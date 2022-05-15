import React, { Component } from 'react'
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
//import './stylesheets/style.css'

class CreateProperty extends Component {

    constructor(props) {
        super(props)
        this.state = {
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
            createproperty:'',
            err:''
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    businessIdHandler = (event) => {
        this.setState({
          businessId: event.target.value
        })
      }
      consumerIdHandler = (event) => {
        this.setState({
          consumerId: event.target.value
        })
      }
      insuranceTypeHandler= (event) => {
        this.setState({
          insuranceType: event.target.value
        })
      }
      propertyTypeHandler= (event) => {
        this.setState({
          propertyType: event.target.value
        })
      }
      buildingSqftHandler= (event) => {
        this.setState({
          buildingSqft: event.target.value
        })
      }
      buildingTypeHandler= (event) => {
        this.setState({
          buildingType: event.target.value
        })
      }
      buildingStoreysHandler = (event) => {
        this.setState({
          buildingStoreys: event.target.value
        })
      }
      buildingAgeHandler= (event) => {
        this.setState({
          buildingAge: event.target.value
        })
      }
      costOfTheAssetHandler= (event) => {
        this.setState({
          costOfTheAsset: event.target.value
        })
      }
      salvageValueHandler= (event) => {
        this.setState({
          salvageValue: event.target.value
        })
      }
      usefulLifeOfTheAssetHandler= (event) => {
        this.setState({
          usefulLifeOfTheAsset: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        axios.post(
            "http://localhost:8081/consumer-api/createBusinessProperty",{
            businessId:this.state.businessId,
            consumerId:this.state.consumerId,
            insuranceType:this.state.insuranceType,
            propertyType:this.state.propertyType,
            buildingSqft:this.state.buildingSqft,
            buildingType:this.state.buildingType,
            buildingStoreys:this.state.buildingStoreys,
            buildingAge:this.state.buildingAge,
            costOfTheAsset:this.state.costOfTheAsset,
            salvageValue:this.state.salvageValue,
            usefulLifeOfTheAsset:this.state.usefulLifeOfTheAsset,
        })
        .then((response) => {
            this.setState({createproperty: response.data})
            alert(response.data);
            this.setState({isCreated : true })
        }) 
        .catch((err) => {
          console.log(err.response.data, "Error")
          this.setState({ errorMsg: err.response.data })
      })  
      }
      render() {
        if(this.state.isCreated){
          return(
            <div className="container property">
                <h4 style={{color: 'rgb(247, 79, 49)'}}> {this.state.createproperty}</h4>
                <Link to="/createpolicy"><Button>OK</Button></Link>&nbsp; &nbsp;
                <Link to="/viewpolicy"><Button>Issue Policy</Button></Link>
            </div>
          )
        }else{
        return (
        <div className='container'>
        <form onSubmit={this.handleSubmit}>
            <br />
            <br />
            <h2 className="text-secondary">Create Business Property</h2>
            <div className='createproperty'>
              <h4 style={{color: 'red'}}> {this.state.errorMsg}</h4>
            </div>
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
        </Row>
        <br />
        <Row>
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
        <br />
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
        </Row>
        <br />
        <Row>
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
        <br />
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
        </Row>
        <br />
        <Row>
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
        <Button type="submit">Create</Button>&nbsp; &nbsp;
        <Link to="/"><Button>Cancel</Button></Link>
        </form>
    </div>  
  )}
}
}

export default CreateProperty;
