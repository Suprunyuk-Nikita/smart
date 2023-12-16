import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header.js';
import Panel from './components/side-panel.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Main from './pages/main.js';
import Courses from './pages/courses.js';
import Gallery from './pages/gallery.js';
import Enroll from './pages/enroll.js';
import Reviews from './pages/reviews.js';

function App() {
  return (
    <>
      <Header />
      <div className='App-main'>
        <Panel />
        <div className='App-middle'>
        <Router>
          <Navbar />
            <Routes>
              <Route path="*" element={<Main />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/enroll" element={<Enroll />} />
              <Route path="/reviews" element={<Reviews />} />
            </Routes>
          </Router>
          <Footer />
        </div>
        <Panel />
      </div>
    </>
  );
}

export default App;