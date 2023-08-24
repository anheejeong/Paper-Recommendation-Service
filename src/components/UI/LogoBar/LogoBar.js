import React from "react";
import classes from './LogoBar.module.css';
import { useNavigate } from "react-router-dom";
import { authService } from "../../../inFirebase";

const LogoBar = () => {
    const navigate = useNavigate();

    const logobtnClickHandler = () => {
        navigate('/search')
    }

    const homebtnClickHandler = () => {
        navigate('/')
    }

    const logoutbtnClickHandler = () => {
        authService.signOut()
        navigate('/')
    }

    return (
        <div className={classes.barspace}>
            <div className={classes.logo}>
                <button onClick={logobtnClickHandler}>Paper Recommendation Service</button>
            </div>
            <div className={classes.info}>
                <div>
                    <button>abc123@gmail.com</button>
                </div>
                <div>
                    <button onClick={homebtnClickHandler}>Home</button>
                </div>
                <div className={classes.logout}>
                    <button onClick={logoutbtnClickHandler}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default LogoBar;