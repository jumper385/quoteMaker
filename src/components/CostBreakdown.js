import React from 'react'
import { connect } from 'react-redux'

class CostBreakdown extends React.Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    let total_cost = 0
    let total_supplier = 0
    return (
      <div style={{width:'100%'}}>
        <table style={{width:'100%', textAlign:'left', margin:'32pt 0pt'}}>
          <thead>
            <th style={{height:'24pt'}}>SKU</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Cost</th>
            <th>Total Cost</th>
          </thead>
          <tbody>
            {this.props.components ? this.props.components.map( ({code, name, amount, cost, supplier}) => {
              total_cost += amount*cost
              total_supplier += amount*supplier
              return (
                <tr style={{height:'24pt'}} key={code}>
                  <td>{code}</td>
                  <td>{name}</td>
                  <td>{amount}</td>
                  <td>${cost}</td>
                  <td>${cost*amount}</td>
                </tr>
              )
            }) : 'null'}
          </tbody>
        </table>
        <p>Total Cost: ${total_cost}</p>
        <p>Profit: ${total_cost - total_supplier}</p>
        <p>Rate (4hrs): ${(total_cost-total_supplier)/4}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(CostBreakdown)

