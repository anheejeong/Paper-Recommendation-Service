import React from "react";

import classes from './DemoCard.module.css';

const DemoCard = props => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}

export default DemoCard;