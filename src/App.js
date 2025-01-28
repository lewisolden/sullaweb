import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Module1 from './pages/Module1'; // Create this file
import Module2 from './pages/Module2'; // Create this file
import Module3 from './pages/Module3'; // Create this file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/1" element={<Module1 />} />
        <Route path="/courses/2" element={<Module2 />} />
        <Route path="/courses/3" element={<Module3 />} />
      </Routes>
    </Router>
  );
}

export default App;
