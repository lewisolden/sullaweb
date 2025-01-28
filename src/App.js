import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Module1Routes from './pages/module1';
// Other imports

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/module1/*" element={<Module1Routes />} />
          {/* Other routes */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
