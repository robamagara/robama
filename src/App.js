import React from 'react';

import logo from './logo.svg';
import './App.css';
import Top from './navbar';
import Hire from './hire';
import Welcome from './welcome';
import Note from './note';
import Benefits from './benefits';


function App() {
  return (
    <div className="App">
      <Top/>
      <Hire/>
      <Welcome/>
      <Note/>
      <Benefits/>
    </div>
  );
}

export default App;
