// 깃허브 원격저장소 -> origin / organization
// git remote -v로 확인

import React, { useState, useEffect } from "react";
import classes from './App.module.css';
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authService } from "./inFirebase";
import AppRouter from "./components/Home/Router";

function App() {
  // 로그인 상태 변화 확인용
  const [init, setInit] = useState(false);
  // 로그인 유무 확인용
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로그인 여부 확인 가능!
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);  // init이 false라면 AppRouter를 숨기게 됨
    });
  }, [])

  return (
    <React.Fragment>
      {init && <AppRouter isLoggedIn={isLoggedIn} />}
      {!init && <h1>Loading . . .</h1>}
    </React.Fragment>
  );
}

export default App;
