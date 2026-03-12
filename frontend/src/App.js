import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import TalkToSalesPage from './pages/TalkToSalesPage';
import PartnersPage from './pages/PartnersPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/talk-to-sales" element={<TalkToSalesPage />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
