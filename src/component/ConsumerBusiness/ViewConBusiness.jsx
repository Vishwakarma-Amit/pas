import React, {useState} from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import axios from 'axios'
//import './stylesheets/viewBusiness.css'


function ViewConBusiness(props) {
    const [business, setBusiness] = useState({
        consumerId:''
    })
    const [error, setError] = useState('')
    const [BusinessList, setBusinessList] = useState([])

    const handleSubmit = (event) => {
    event.preventDefault()
    axios.get("http://localhost:8081/consumer-api/viewConsumerBusiness/"+business.consumerId)
    .then((res) => {
        setBusinessList(res.data)
        console.log(res.data);
    }).catch((err)=>{
        setError({error: err.res.data})
        console.log(error);
    })
    }

    const handleChange = (e) => {
        setBusiness({...business,[e.target.name]: e.target.value,});
    }

    return (
        <div className='container image background' >
             <form onSubmit={handleSubmit}>
             <br />
             <div className='quote'>
               <h4 style={{color: 'red'}}> {error}</h4>
             </div>
         <Row className='text-center'>
         <div className="form-group col-3">
            <input
            type="text"
            name="consumerId"
            className="form-control"
            placeholder='Consumer Id'
            value={business.consumerId} 
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
                <Col>
        <div className='d-flex justify-content-center'>
        <table className="table table-hover">
        <thead>
            <th className='w3-teal'>
                <td>
                    <tr>First Name:</tr>
                    <tr>Last Name</tr>
                    <tr>DOB:</tr>
                    <tr>PAN Details:</tr>
                    <tr>Email:</tr>
                    <tr>Phone:</tr>
                    <tr>Website:</tr>
                    <tr>Business Name:</tr>
                    <tr>Business Overview:</tr>
                    <tr>Validity:</tr>
                    <tr>Agent Name:</tr>
                    <tr>Agent ID:</tr>
                    <tr>Business Category:</tr>
                    <tr>Business Type:</tr>
                    <tr>Business Turnover:</tr>
                    <tr>Capital Invested:</tr>
                    <tr>Total Employees:</tr>
                    <tr>Business Age:</tr>
                </td>
                <td>
                    <tr>{BusinessList.firstName}</tr>
                    <tr>{BusinessList.lastName}</tr>
                    <tr>{BusinessList.dob}</tr>
                    <tr>{BusinessList.panDetails}</tr>
                    <tr>{BusinessList.email}</tr>
                    <tr>{BusinessList.phone}</tr>
                    <tr>{BusinessList.website}</tr>
                    <tr>{BusinessList.businessName}</tr>
                    <tr>{BusinessList.businessOverview}</tr>
                    <tr>{BusinessList.validity}</tr>
                    <tr>{BusinessList.agentName}</tr>
                    <tr>{BusinessList.agentId}</tr>
                    <tr>{BusinessList.businessCategory}</tr>
                    <tr>{BusinessList.businessType}</tr>
                    <tr>{BusinessList.businessTurnover}</tr>
                    <tr>{BusinessList.capitalInvested}</tr>
                    <tr>{BusinessList.totalEmployees}</tr>
                    <tr>{BusinessList.businessAge}</tr>
                </td>   
            </th>
        </thead>
        </table>
        </div>
        </Col>
        </Row>
        </div>

  )
}

export default ViewConBusiness
