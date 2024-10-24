import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './dashboard/Dashboard'; // Vérifiez que Dashboard.js exporte App correctement
//import Dashboard from './dashboardV5/Dashboard'
//import DashboardLayoutBasic from './pages/dashboard/DashboardLayoutBasic';

function Appr() {
  return (
    <Router basename='/shopMode'>
     
      <Dashboard /> {/* Assurez-vous que App est un composant valide */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> */}
    </Router>
  ); 
}

export default Appr;
