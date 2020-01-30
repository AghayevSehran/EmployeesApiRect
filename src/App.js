import React from 'react';
import './App.css';
import {Home} from './comopnets/Home'
import {Department} from './comopnets/Department'
import {Employee} from './comopnets/Employee'
import {Navigation} from './comopnets/Navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="container">    
      <h3 className="m-3 d-flex justify-content-center">
      React JS with Web api Demo </h3> 
      <h5 className="m-3 d-flex justify-content-center">
      Employee Management Portal </h5> 
      <Navigation/>
      <Switch>   
        <Route  path="/employee" component={Employee}>
        </Route>
        <Route  path="/department" component={Department}>
        </Route>
        <Route exact path="/" component={Home}>
        </Route>
      </Switch>
    </div>
  </Router>
);
}

export default App;
