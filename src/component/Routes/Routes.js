import React from "react";

import { Routes, Route } from "react-router-dom";
import Cards from "../../component/Cards";
import LandingPage from "../LandingPage";
import BuyProducts from "../BuyProducts";
import Header from "../Header";
import CardDetails from "../CardDetails";
import Login from "../User/Login";
import RegisterUser from "../User/RegisterUser";
import OrdersComponent from "../OrdersComponent";
import FinalOrder from "../User/FinalOrder";
import ViewOrders from "../User/ViewOrders";
// import CardDetails from "./component/CardDetails";
// import LandingPage from "./component/LandingPage";
// import BuyProducts from "./component/BuyProducts";

const RoutesComponent = () => {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/buyProducts" element={<BuyProducts />} />
        <Route path="/header" element={<Header />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cardsDetails/:id" element={<CardDetails />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<RegisterUser/>} />
        <Route path="/orders" element={<OrdersComponent/>}  />
        <Route path="/finalOrder" element={<FinalOrder/>} />
        <Route path="/viewOrders" element={<ViewOrders/>} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
