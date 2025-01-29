import React from "react";
import {  Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import All from "./components/All";

function App() {
  return (
    <div><Header />
      <Routes>
        <Route path="/" element={  <All /> } />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
