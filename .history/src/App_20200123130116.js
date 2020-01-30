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
