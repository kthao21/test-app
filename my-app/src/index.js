import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Body from './pages/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<Body />} />
    </Routes>
  </Router>
</React.StrictMode>


);