import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import {Home} from './comopnets/Home'
import {Department} from './comopnets/Department'

function App() {
  return (
    <div className="container">
      <Home/>
      <Department/>
    </div>
  );
}

export default App;
