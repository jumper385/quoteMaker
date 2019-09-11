import React from 'react';
import BusinessDetails from './components/BusinessDetails';
import CostBreakdown from './components/CostBreakdown';
import Notes from './components/Notes';
import PaymentCalculator from './Payments';

function App() {
  return (
    <div className="App">
      <h1>Order Cost Sheet</h1>
      <BusinessDetails />
      <CostBreakdown />
      <Notes />
      <PaymentCalculator />
      <p>Sign Here: __________________________________________</p>
    </div>
  );
}

export default App;
