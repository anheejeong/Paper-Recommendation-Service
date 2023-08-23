import React, { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
// import classes from './Home.module.css';
import Switch from "../Switch/Switch";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";
import { authService } from "../../inFirebase";
import { useNavigate } from "react-router-dom";
import AppRouter from "./Router";

const Home = props => {
    // 로그인 상태 변화 확인용
    const [init, setInit] = useState(false);
    // 로그인 유무 확인용
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

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
            {!isLoggedIn && "Loading.."}
            {isLoggedIn && navigate('/search')}
        </React.Fragment>
    );
}

export default Home;