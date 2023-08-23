import React, { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
// import classes from './Home.module.css';
import Switch from "../Switch/Switch";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";
import { authService } from "../../inFirebase";
import { useNavigate } from "react-router-dom";

const Home = props => {
    const [init, setInit] = useState(false);
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

    const [onSwitch, setOnSwitch] = useState(false);

    const switchChangeHandler = () => {
        if (onSwitch)
            setOnSwitch(false)
        else
            setOnSwitch(true)
    }

    return (
        <React.Fragment>
            <Switch turnSwitch={switchChangeHandler} />
            {!onSwitch && <Card>
                <LogIn isLoggedIn={isLoggedIn} />
            </Card>}
            {onSwitch && <Card>
                <SignUp isLoggedIn={isLoggedIn} />
            </Card>}
        </React.Fragment>
    );
}

export default Home;