import React from 'react'
import { connect } from 'react-redux'

function BusinessDetails(props){
    return(
        <div>
            <h2>{props.businessDetails.businessName || 'null'}</h2>
            <p>ABN: {props.businessDetails.ABN || 'null'}</p>
            {props.businessDetails.address.map( (line, index) => (<p key={index}>{line}</p>)) || 'null'}
        </div>
    )
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(BusinessDetails)