import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Turn from "./Turn";
import Search from "../Search/Search";
import Switch from "../Switch/Switch";
import Home from "./Home";

const AppRouter = ({ isLoggedIn }) => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/search" element={<Search />} />
                <Route exact path="/login" element={<Turn />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;