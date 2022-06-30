import React from "react";
import "./App.css";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home";
import Signup from "./Components/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1 align="center" className="h1 my-0">
          <em>Investment Tracker</em>
        </h1>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
