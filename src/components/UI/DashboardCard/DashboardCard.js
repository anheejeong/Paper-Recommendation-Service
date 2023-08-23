import React from "react";

import classes from './DashboardCard.module.css';

const DashboardCard = props => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}

export default DashboardCard;