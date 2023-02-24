import React from 'react';
import './App.css';
import HomePage from './components/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from './components/productpage';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}/>  
      <Route path="/admin" element={<AdminPanel></AdminPanel>}/>
      <Route path="/product" element={<ProductPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
