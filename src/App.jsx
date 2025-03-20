import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import FavoriteQuote from "./pages/FavoriteQuote";
import Account from "./pages/Account";
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
import HomePage from "./pages/Home";

export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favorite"
            element={
              <PrivateRoute>
                <FavoriteQuote />
              </PrivateRoute>
            }
          />
          <Route path="/account"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}