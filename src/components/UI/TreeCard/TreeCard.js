import React from "react";

import classes from './TreeCard.module.css';

const TreeCard = props => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}

export default TreeCard;