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
    <h3 className="m-3 d-flex justify-content-center">
      React JS with Web api Demo </h3> 
      <h5 className="m-3 d-flex justify-content-center">
      Employee Management Portal </h5> 
      <Switch>   
        <Route exact path="/employee" component={Employee}>
        </Route>
        <Route exact path="/department" component={Department}>
        </Route>
        <Route exact path="/" component={Home}>
        </Route>
      </Switch>
    </div>
  </Router>
);
}

export default App;
