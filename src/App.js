import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './css/style.css';

import Booking from './screens/Booking'
import APropos from './screens/APropos';
import ConnexionPage from './screens/ConnexionPage';
import InscriptionPage from './screens/InscriptionPage';

const App = () => {
  return (
    <div className="App">
  
      {/* <Booking /> */}
      {/* <APropos /> */}
      {/* <ConnexionPage/> */}
      <InscriptionPage />

  
    </div>
  );
}

export default App;
