import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Homepage from "./pages/homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import FavoriteQuote from "./pages/FavoriteQuote";
import Account from "./pages/Account";

export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favorite" element={<FavoriteQuote />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
