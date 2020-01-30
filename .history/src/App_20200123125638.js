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
        <Route path="/empolyee">
          <Employee/>
        </Route>

        <Route path="/department">
          <Department />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
}

export default App;
