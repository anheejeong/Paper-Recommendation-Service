import React, { useState, useEffect } from "react";
import classes from './App.module.css';
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authService } from "./inFirebase";

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
