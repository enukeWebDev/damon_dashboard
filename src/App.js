import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import MinimumTest from './routes/MinimumTest';
import ComprehensiveTest from './routes/ComprehensiveTest';
// import Service from './routes/Service';
import Contact from './routes/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mintest" element={<MinimumTest />} />
        <Route
          component={() => {
            window.location.replace('http://127.0.0.1:8000/soil/upload');
            return null;
          }}
        />
        {/* <Route path="service" element={<Service and Support />} /> */}
        <Route path="/contact" element={<Contact Us />} />
      </Routes>
    </>
  );
}

export default App;
