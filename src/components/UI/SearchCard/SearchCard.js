import React from "react";

import classes from './SearchCard.module.css';

const SearchCard = props => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}

export default SearchCard;