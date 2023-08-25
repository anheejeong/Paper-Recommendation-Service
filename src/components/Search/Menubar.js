import React from "react";
import classes from './Menubar.module.css';
import home from '../../assets/home.png';
import bookmark from '../../assets/bookmark.png';
import search from '../../assets/search.png';
import setting from '../../assets/settings.png';
import research from '../../assets/research.png';
import exit from '../../assets/exit.png';

import { authService } from "../../inFirebase";
import { useNavigate } from "react-router-dom";

const Menubar = () => {
    const navigate = useNavigate()
    const logoutSubmit = () => {
        authService.signOut()
        navigate('/login')
    }

    return (
        <div className={classes.menulist}>
            <ul className={classes.top}>
                <li><a href="/"><img src={home} alt="HOME" /></a></li>
                <li><a href="/searchpage"><img src={search} alt="SEARCH" /></a></li>
                <li><a href="/savepaper"><img src={bookmark} alt="BOOKMARK" /></a></li>
                <li><a href="#"><img src={research} alt="PAPER-RECOMMENDATION" /></a></li>
                <li><a href="#"><img src={setting} alt="SETTING" /></a></li>
            </ul>
            <ul className={classes.bot}>
                <li onClick={logoutSubmit}><img src={exit} alt="LOGOUT" /></li>
            </ul>
        </div>
    );
}

export default Menubar;