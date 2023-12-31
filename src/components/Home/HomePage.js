import React, { useState, useEffect } from "react";

import classes from './HomePage.module.css';
import homepageImg from '../../assets/homepageImg.png';
import { authService } from "../../inFirebase";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
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
        });
    }, [])

    const loginBtnClickHandler = () => {
        navigate('/login')
    }

    const searchBtnClickHandler = () => {
        navigate('/search')
    }

    return (
        <div className={classes.home}>
            <div>
                <h1>Paper</h1>
                <h1>Recommendation</h1>
                <h1>Service</h1>
                <p>If you enter a keyword for what you want to study, we recommend highly relevant papers based on the keyword.</p>
                <p>Improve data delivery accuracy by learning the direction of the paper you want to find based on the paper reading history data.</p>
                {!isLoggedIn && <button onClick={loginBtnClickHandler}>LogIn</button>}
                {isLoggedIn && <button onClick={searchBtnClickHandler}>Search For</button>}
            </div>
            <div>
                <img src={homepageImg} alt="Homepage Img" />
            </div>

        </div>
    );
}

export default HomePage;