import React from "react";
import classes from './SearchLoading.module.css';

const SearchLoading = () => {
    return (
        <div className={classes.space}>
            <div className={classes.loading_container}>
                <div className={classes.loading}></div>
                <div className={classes.loading_text}>loading</div>
            </div>
        </div>
    )
}

export default SearchLoading;