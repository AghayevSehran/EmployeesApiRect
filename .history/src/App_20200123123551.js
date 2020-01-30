import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import {Home} from './comopnets/Home'
import {Department} from './comopnets/Department'
import {Employee} from './comopnets/Employee'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
       <div className="container">
         <Switch>
               <Route path='/' componenet={Home} />
               <Route path='/depatment' componenet={Department}/>
               <Route path='/employee' componenet={Employee}/>
         </Switch>    
       </div>

    </Router>
 
  );
}

export default App;
