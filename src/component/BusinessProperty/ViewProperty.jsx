import React, {useState} from 'react'
import { Button, Row } from 'react-bootstrap';
import axios from 'axios'
import PropertyDetails from './PropertyDetails';


function ViewProperty(props) {
    const [property, setProperty] = useState({
        consumerId:'',
        propertyId:''
    })

    const [PropertyList, setPropertyList] = useState([])

    const handleSubmit = (event) => {
    event.preventDefault()
    axios.get("http://localhost:8081/consumer-api/viewConsumerProperty//"+property.propertyId)
    .then((res) => {
        setPropertyList(res.data)
        console.log(res.data);
    })}

    var PropertyDetailsList = []

    PropertyList.map((property) => {
        PropertyDetailsList.push(
        <PropertyDetails
            propertyId={property.id}
            consumerId={property.consumerId}
            businessId={property.businessId}
            buildingAge={property.buildingAge}
            buildingSqft={property.buildingSqft}
            buildingStoreys={property.buildingStoreys}
            buildingType={property.buildingType}
            costOfTheAsset={property.costOfTheAsset}
            insuranceType={property.insuranceType}
            propertyValue={property.propertyValue}
            propertyType={property.propertyType}
            salvageValue={property.salvageValue}
            usefulLifeOfTheAsset={property.usefulLifeOfTheAsset}
        />)
        return false;
    })

    const handleChange = (e) => {
        setProperty({...property,[e.target.name]: e.target.value,});
    }


    return (

        <div className='container' >
             <form onSubmit={handleSubmit}>
             <br />
             {/* <div className='quote'>
               <h4 style={{color: 'red'}}> {this.state.errorMsg}</h4>
             </div> */}
        <div className='d-flex justify-content-center'>
            <Row >
            <div className="form-group col-9">
                <input
                type="text"
                name="propertyId"
                className="form-control"
                placeholder='Consumer Id'
                value={property.propertyId} 
                onChange={handleChange}
                
                required
                />
            </div>
            <div className="form-group col-1">
                <Button type="submit">View</Button>
            </div>
            </Row> 
        </div>
        
        </form>
        <br />
        <table className="table table-striped table-bordered">
        <thead>
                <tr key={property.propertyId} >
                    <th>Property ID</th>
                    <th>Business ID</th>
                    <th>Consumer ID</th>
                    <th>Insurance Type</th>
                    <th>Property Type</th>
                    <th>Building Sqft</th>
                    <th>Building Type</th>
                    <th>Building Storeys</th>
                    <th>Building Age</th>
                    <th>Property Value</th>
                    <th>Cost of the Asset</th>
                    <th>Salvage Value</th>  
                    <th>Life of Asset</th>                  
                </tr>
        </thead>
        <tbody>
            {PropertyDetailsList} 
        </tbody>
        </table>
        </div>

  )
}

export default ViewProperty;


