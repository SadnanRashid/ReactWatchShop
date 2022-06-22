import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeMain from "./comp/home";
import { Signin } from "./comp/signin";
import Fire from "./comp/product_rolex";
import { RolexPage } from "./comp/product_pages/rolex";
import { AdminPage } from "./comp/comp_admin/admin";
import { ProductDisplay } from "./comp/product_display/productDisplay";
import Buynow from "./comp/product_display/buyNow/buyNow";

export function App() {
  return (
    <div>
      <Router>
        {/* Add navbar individually to each Comp.  */
        /* No navbar in Admin Page */}

        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="about" element={<Fire />} />
          <Route path="login" element={<Signin />} />
          <Route path="rolex" element={<RolexPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="product/:id" element={<ProductDisplay />} />
          <Route path="buynow" element={<Buynow />} />
        </Routes>
      </Router>
    </div>
  );
}
