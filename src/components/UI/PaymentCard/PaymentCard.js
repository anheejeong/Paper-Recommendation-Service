import React from "react";

import classes from './PaymentCard.module.css';

const PaymentCard = props => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}

export default PaymentCard;