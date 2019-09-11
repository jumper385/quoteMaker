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
      <div>
        <h3>Cost Breakdown</h3>
        <table>
          <thead>
            <th>Code</th>
            <th>Name</th>
            <th>Unit Cost</th>
            <th>Amount</th>
            <th>Total Cost</th>
          </thead>
          <tbody>
            {this.props.components ? this.props.components.map( ({code, name, amount, cost, supplier}) => {
              total_cost += amount*cost
              total_supplier += amount*supplier
              return (
                <tr key={code}>
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
        <p>Supplier Cost: ${total_supplier}</p>
        <p>Profit: ${total_cost-total_supplier+85}</p>
        <p>Profit/Hr: ${(total_cost-total_supplier + 85)/4}</p>
        <p>Margin: {(total_cost - total_supplier)*100/total_supplier}%</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(CostBreakdown)

