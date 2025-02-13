import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
     <Router>
        <Routes>
           <Route path="/" element={<BlogDetails />} />
        </Routes>
     </Router>
  );
}

export default App;
