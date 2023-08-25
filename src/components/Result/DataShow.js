import React from "react";
import classes from './DataShow.module.css';
import Card from "../UI/Card/Card";
import axios from "axios";

const DataShow = (props) => {
    const titleClickHandler = async () => {
        try {
            await axios.post('http://localhost:8080/result', {
                pickTitle: props.title
            })
                .then(res => console.log(res))
                .catch(e => console.log(e))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Card>
            <div>
                <button onClick={titleClickHandler}>{props.title}</button>
                <label>{props.link}</label>
            </div>
        </Card>
    )
}

export default DataShow;