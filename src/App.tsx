// import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './pages/Products';

function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Product Store</h1>
      <Link to="/products" className="text-blue-500 underline">View Products</Link>
    </div>
  );
}

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App
