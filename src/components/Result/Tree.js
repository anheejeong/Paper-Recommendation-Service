import React from "react";
import classes from './Tree.module.css';
import SearchCard from "../UI/SearchCard/SearchCard";
import TreeCard from "../UI/TreeCard/TreeCard";

const Tree = (props) => {
    return (
        <div className={classes.space}>
            <SearchCard>
                <div className={classes.first}>
                    <TreeCard>
                        <p>{props.title1}</p>
                    </TreeCard>
                    <TreeCard>
                        <p>{props.title2}</p>
                    </TreeCard>
                </div>
                <div className={classes.second}>
                    <TreeCard>
                        <p>{props.title3}</p>
                    </TreeCard>
                    <TreeCard>
                        <p>{props.title4}</p>
                    </TreeCard>
                    <TreeCard>
                        <p>{props.title5}</p>
                    </TreeCard>
                    <TreeCard>
                        <p>{props.title6}</p>
                    </TreeCard>
                </div>
                <div className={classes.btn}>
                    <button><span>Require Payment</span></button>
                </div>
            </SearchCard>
        </div>
    )
}

export default Tree;