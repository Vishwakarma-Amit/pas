import React, {useState} from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import axios from 'axios'
//import './stylesheets/style.css'


function ViewPolicy(props) {
    const [policy, setPolicy] = useState({
        consumerId:'',
        policyId:''
    })

    const [PolicyList, setPolicyList] = useState([])

    const handleSubmit = (event) => {
    event.preventDefault()
    axios.get(
        "http://localhost:8082/policy-api/viewPolicy/?"+
            "consumerId="+policy.consumerId+
            "&policyId="+policy.policyId
            )
    .then((res) => {
        setPolicyList(res.data)
        console.log(res.data);
    })
    }

    const handleChange = (e) => {
        setPolicy({...policy,[e.target.name]: e.target.value,});
    }


    return (

        <div className='container' >
             <form onSubmit={handleSubmit}>
             <br />
             {/* <div className='quote'>
               <h4 style={{color: 'red'}}> {this.state.errorMsg}</h4>
             </div> */}
         <Row className='text-center'>
         <div className="form-group col-3">
            <input
            type="number"
            name="consumerId"
            className="form-control"
            placeholder='Consumer Id'
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
            placeholder='Policy Id'
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
                    <br />
        <table className="table table-striped">
        <thead>
            <th className='w3-teal'>
                <td>
                    <tr>Acceptance Status</tr>
                </td>
                <td>
                    <tr>{PolicyList.acceptanceStatus}</tr>
                </td>
            </th>

        </thead>
        </table>
        </Col>
        </Row>
        </div>

  )
}

export default ViewPolicy;
