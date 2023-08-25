import React from "react";
import classes from './DataShow.module.css';
import Card from "../UI/Card/Card";

const DataShow = (props) => {
    return (
        <Card>
            <li>
                <h2>{props.title}</h2>
                <label>{props.link}</label>
            </li>
        </Card>
    )
}

export default DataShow;