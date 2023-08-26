import React from "react";

import classes from './DemoBox.module.css';

const DemoBox = props => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}

export default DemoBox;