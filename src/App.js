import React from 'react';
import styled from 'styled-components'
import BusinessDetails from './components/BusinessDetails';
import CostBreakdown from './components/CostBreakdown';
import Notes from './components/Notes';
import PaymentConditions from './Payments';

const GridColumnContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lexend+Deca|Nunito&display=swap');
  font-family: 'Lexend Deca', sans-serif;
  display:grid
  box-sizing:border-box
  margin:0 64pt
`

const HeaderContainer = styled.div`
  box-sizing:border-box
`

function App() {
  return (
    <div className="App">
      <GridColumnContainer>
        <HeaderContainer>
          <BusinessDetails />
        </HeaderContainer>
          <CostBreakdown />
          <Notes />
          <PaymentConditions />
          <p>Sign Here: __________________________________________</p>
      </GridColumnContainer>
    </div>
  );
}

export default App;
