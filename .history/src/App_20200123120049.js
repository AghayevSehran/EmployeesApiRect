import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import {Home} from './comopnets/Home'
import {Department} from './comopnets/Department'
import {Employee} from './comopnets/Employee'
import {BrowserRouter,Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       <div className="container">
         <Switch>
               <Route path='/' componenet={Home} exact/>
               <Route path='/depatment' componenet={Department} exact/>
               <Route path='/employee' componenet={Employee} exact/>
         </Switch>  
         <Button></Button>    
       </div>

    </BrowserRouter>
 
  );
}

export default App;
