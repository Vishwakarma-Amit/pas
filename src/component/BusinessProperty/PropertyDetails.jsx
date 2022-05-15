import React from 'react'

function PropertyDetails(props) {
  return (
        <tr key={props.propertyId}>
            <td>{props.propertyId}</td>
            <td>{props.businessId}</td>
            <td>{props.consumerId}</td>
            <td>{props.insuranceType}</td>
            <td>{props.propertyType}</td>
            <td>{props.buildingSqft}</td>
            <td>{props.buildingType}</td>
            <td>{props.buildingStoreys}</td>
            <td>{props.buildingAge}</td>
            <td>{props.propertyValue}</td>
            <td>{props.costOfTheAsset}</td>
            <td>{props.salvageValue}</td>
            <td>{props.usefulLifeOfTheAsset}</td>
        </tr>
  )
}

export default PropertyDetails