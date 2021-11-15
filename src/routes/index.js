<<<<<<< HEAD
import React from 'react';
import { Route, Routes } from 'react-router';
import MainPage from '../pages/MainPage';
import Product from '../pages/Product';
import CartPage from '../pages/CartPage';
=======
import React from "react";
import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import Product from "../pages/Product";
import CartPage from "../pages/CartPage";
>>>>>>> c3fd94efd0b93d2e59985de06a42c2af4368a2c3

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
