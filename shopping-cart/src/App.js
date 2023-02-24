import React from 'react';
import './App.css';
import HomePage from './components/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from './components/productpage';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <>
     <div className='d1'>
      <h1>
        ShopC
      </h1>
      <p id ="cap">A place where you meet your expectations</p>
     </div>
      
      <div className="App">
        <Form />
      </div>
  
       
    </>

  );
}
 
export default App;