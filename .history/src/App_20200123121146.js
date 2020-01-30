import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import {Home} from './comopnets/Home'
import {Department} from './comopnets/Department'
import {Employee} from './comopnets/Employee'
import {BrowserRouter, Route,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       <div className="container">
         <Switch>
               <Route path='/' componenet={Home} exact/>
               <Route path='/depatment' componenet={Department}/>
               <Route path='/employee' componenet={Employee}/>
         </Switch>    
       </div>

    </BrowserRouter>
 
  );
}

export default App;
