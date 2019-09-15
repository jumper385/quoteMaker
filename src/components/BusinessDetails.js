import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
const shortid = require('shortid')

const TextHolder = styled.div`
    display:flex
    justify-content:space-between
    width:100%
    align-items:center
`

const LogoHolder = styled.div`
    margin:4pt
    width:auto
    display:inline-block
    align-self:center
    margin-bottom:8pt
    color:black
    border-radius:2pt
`

const BusinessDisplayName = styled.h1`
    font-weight:800
    margin:0
    font-size:28pt
`
const OrderInfo = styled.div`
    display:flex
    margin:0
    font-size:8pt;
    justify-content: space-between;
    width:100%
    color:black
`
const InvoiceType = styled.h1`
    margin:4pt
    color:red
`

function BusinessDetails(props){
    return(
        <TextHolder>
            <InvoiceType>INVOICE</InvoiceType>
            <LogoHolder>
                <BusinessDisplayName>{props.businessDetails.businessName || 'null'}</BusinessDisplayName>
                <OrderInfo>
                    <p style={{margin:0}}>No<sup>o</sup> {shortid.generate()}</p>
                    <p style={{margin:0}}>{15} {'April'} {2019}</p>
                </OrderInfo>
            </LogoHolder>
        </TextHolder>
    )
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(BusinessDetails)