import React from 'react';
import StyledComponents from 'styled-components'
import BusinessDetails from './components/BusinessDetails';
import CostBreakdown from './components/CostBreakdown';
import Notes from './components/Notes';
import PaymentCalculator from './Payments';
const shortid = require('shortid')

function App() {
  return (
    <div className="App">
      <h1>Order {shortid.generate()}</h1>
      <BusinessDetails />
      <CostBreakdown />
      <Notes />
      <PaymentCalculator />
      <p>Sign Here: __________________________________________</p>
    </div>
  );
}

export default App;
