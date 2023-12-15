import React from 'react';
import './App.css';
import Header from './components/header.js';
import Panel from './components/side-panel.js';
import Navbar from './components/navbar.js';

function App() {
  return (
    <>
      <Header />
      <div className='App-main'>
        <Panel />
        <div className='App-middle'>
          <Navbar />
        </div>
        <Panel />
      </div>
    </>
  );
}

export default App;
