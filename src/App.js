import React from 'react';
import './App.css';
import Header from './components/header.js';
import Panel from './components/side-panel.js';

function App() {
  return (
    <>
      <Header />
      <div className='App-main'>
        <Panel />
        <div className='App-middle'>
          .
        </div>
        <Panel />
      </div>
    </>
  );
}

export default App;
