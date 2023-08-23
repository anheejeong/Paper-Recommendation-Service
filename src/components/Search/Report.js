import React from "react";
import DashboardCard from "../UI/DashboardCard/DashboardCard";
import recent from '../../assets/recent.png';
import like from '../../assets/like.png';
import link from '../../assets/link.png';
import see from '../../assets/see.png';
import arrow from '../../assets/arrow.png';

import classes from './Report.module.css';
import RecentPaper from "../RecentPaper/RecentPaper";

import { useNavigate } from "react-router-dom";

const Report = () => {
    const navigate = useNavigate();

    const recentClickHandler = () => {
        navigate('/recentpaper')
    }

    const likeClickHandler = () => {
        navigate('/likepaper')
    }

    return (
        <div className={classes.rpt}>
            <h1>report</h1>
            <div className={classes.report}>
                <DashboardCard>
                    <img src={recent} alt="RECENT" />
                    <p>Recent Paper</p>
                    <label onClick={recentClickHandler}>32</label>
                </DashboardCard>
                <DashboardCard>
                    <img src={like} alt="LIKE" />
                    <p>Like Paper</p>
                    <label onClick={likeClickHandler}>4</label>
                </DashboardCard>
                <DashboardCard>
                    <img src={link} alt="LINK" />
                    <p>Related Image</p>
                    <label>30</label>
                </DashboardCard>
                {/* 사용 논문 혹은 최신 논문? */}
                <DashboardCard>
                    <img src={see} alt="SEE" />
                    <p>Use Paper</p>
                    <label>8</label>
                </DashboardCard>
                <button className={classes.arrow} type="button">
                    <img src={arrow} alt="GO" />
                </button>
            </div>
        </div>
    );
}

export default Report;