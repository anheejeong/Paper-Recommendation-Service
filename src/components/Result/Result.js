import React from "react";
import classes from './Result.module.css';
import { useLocation } from "react-router-dom";
import DataShow from "./DataShow";

const Result = () => {
    const location = useLocation();

    console.log(location.state.form_data)

    return (
        <React.Fragment>
            <div>
                <h1>Search Result</h1>
            </div>
            <ul>
                {location.state.form_data.map((data) => {
                    <DataShow
                        title={data.title}
                        link={data.link}
                    />
                })}
            </ul>
        </React.Fragment>
    )
}

export default Result;