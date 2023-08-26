import React from "react";
import classes from './Loading.module.css';

const Loading = () => {
    return (
        <div className={classes.space}>
            <div className={classes.loading_container}>
                <div className={classes.loading}></div>
                <div className={classes.loading_text}>loading</div>
            </div>
        </div>
    )
}

export default Loading;