import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './css/style.css';

import Booking from './components/Booking'
import APropos from './components/APropos';

const App = () => {
  return (
    <div className="App">
  
      {/* <Booking /> */}
      <APropos />

  
    </div>
  );
}

export default App;
