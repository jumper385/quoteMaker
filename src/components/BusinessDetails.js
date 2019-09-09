import React from 'react'

function BusinessDetails(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.address.street}</p>
            <p>{props.address.suburb}, {props.address.postcode}</p>
            <p>{props.address.state}, {props.address.country}</p>
        </div>
    )
}

export default BusinessDetails