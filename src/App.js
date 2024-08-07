import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Aboutus from './components/Aboutus';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    
      <Router>
        <div>
          <p>lorem</p>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
