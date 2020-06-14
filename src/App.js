import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './css/style.css';

import Booking from './screens/Booking'
import APropos from './screens/APropos';
import ConnexionPage from './screens/ConnexionPage';
import InscriptionPage from './screens/InscriptionPage';

const App = () => {
  return (
    
    <Router>
      
        <Route exact path="/" component={InscriptionPage}/>
        <Route exact path="/Booked" component={Booking}/>
        <Route exact path="/Apropos" component={APropos}/>
        <Route exact path="/Connexion" component={ConnexionPage}/>
    
      </Router>

  );
}

export default App;
