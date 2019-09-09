import React from 'react';
import BusinessDetails from './components/BusinessDetails';
function App() {
  return (
    <div className="App">
      <BusinessDetails name='Henry Chen'
      address={{
        street:'114 Walderton Ave', 
        suburb:'Balga', 
        postcode:6061,
        state:'Western Australia',
        country:'Australia'}}
      />

      <p>Breakdown of Costs</p>
      <p>Variation And Revision</p>
      <p>Payment + Terms and Conditions</p>
      <p>Preffered Payment Method</p>
      <p>Schedule of Quote + Expiry Date</p>
      <p>Customer Signature + Acceptance</p>
    </div>
  );
}

export default App;
