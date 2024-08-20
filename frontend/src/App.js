import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TestPage from './pages/TestPage';
import FinishPage from './pages/FinishPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/finish" element={<FinishPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
