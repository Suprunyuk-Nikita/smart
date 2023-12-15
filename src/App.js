import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header.js';
import Panel from './components/side-panel.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

function App() {
  return (
    <>
      <Header />
      <div className='App-main'>
        <Panel />
        <div className='App-middle'>
          <Navbar />
          <Footer />
        </div>
        <Panel />
      </div>
    </>
  );
}

export default App;
