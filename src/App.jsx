import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "animate.css/animate.min.css";

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
