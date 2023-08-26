import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Turn from "./Turn";
import Search from "../Search/Search";
import Switch from "../Switch/Switch";
import HomePage from "./HomePage";
import Home from "./Home";
import EditMyPage from "../EditMyPage/EditMyPage";
import LikePaper from "../LikePaper/LikePaper";
import RecentPaper from "../RecentPaper/RecentPaper";
import Result from "../Result/Result";
import SavePaper from "../SavePaper/SavePaper";
import SearchPage from "../SearchPage/SearchPage";
import Payment from "../Payment/Payment";

import Loading from "../Result/Loading";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/homepage" element={<Home />} />
                <Route exact path="/search" element={<Search />} />
                <Route exact path="/login" element={<Turn />} />
                <Route exact path="/likepaper" element={<LikePaper />} />
                <Route exact path="/mypage" element={<EditMyPage />} />
                <Route exact path="/result" element={<Result />} />
                <Route exact path="/savepaper" element={<SavePaper />} />
                <Route exact path="/recentpaper" element={<RecentPaper />} />
                <Route exact path="/searchpage" element={<SearchPage />} />
                <Route exact path="/payment" element={<Payment />} />
                <Route exact path="/loading" element={<Loading />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;