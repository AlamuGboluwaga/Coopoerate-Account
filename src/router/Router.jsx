import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from '../pages/PageNotFound';
import Home from '../pages/Home';
import Verification from '../pages/Verification';
import VerifyCustomer from '../pages/VerifyCustomer';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/verifycustomer" element={<VerifyCustomer />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="*" element={<Navigate to="notfound" />} />
          <Route path="notfound" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router
