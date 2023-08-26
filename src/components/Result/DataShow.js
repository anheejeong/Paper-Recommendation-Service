import React, { useState } from "react";
import classes from './DataShow.module.css';
import Card from "../UI/Card/Card";
import axios from "axios";
import Tree from "./Tree";
import Loading from "./Loading";

const DataShow = (props) => {
    const [tree, setTree] = useState(false);
    const [loading, setLoading] = useState(false);

    const [one, setOne] = useState('')
    const [two, setTwo] = useState('')
    const [three, setThree] = useState('')
    const [four, setFour] = useState('')
    const [five, setFive] = useState('')
    const [six, setSix] = useState('')

    const barFillWidth = props.score * 100 + '%';
    console.log(barFillWidth)

    // reference 요청 ==>
    const titleClickHandler = async () => {
        if (!tree) {
            setLoading(true);
            try {
                await axios.post('http://localhost:8080/result', {
                    pickTitle: props.title
                })
                    // 논문 타이틀이 옴..
                    .then(res => {
                        setLoading(false);

                        setOne(res.data.parent1)
                        setTwo(res.data.parent2)
                        setThree(res.data.child1)
                        setFour(res.data.child2)
                        setFive(res.data.child3)
                        setSix(res.data.child4)

                        setTree(!tree)
                    })
                    .catch(e => console.log(e))
            } catch (err) {
                console.log(err)
            }
        } else {
            setTree(!tree)
        }
    }

    return (
        <div className={classes.linkcard}>
            <Card>
                <div className={classes.space}>
                    <div className={classes.linkinfo}>
                        <button onClick={titleClickHandler}>{props.title}</button>
                        <span>{props.link}</span>

                        <div className={classes.chart_bar}>
                            <div className={classes.chart_bar_inner}>
                                <div
                                    className={classes.chart_bar_fill}
                                    style={{ width: barFillWidth }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.info}>
                        <p>{props.year}</p>
                        <p>{props.person}</p>
                    </div>
                </div>
            </Card>
            {loading && <Loading />}
            {tree && <Tree
                title1={one}
                title2={two}
                title3={three}
                title4={four}
                title5={five}
                title6={six}
            />}
        </div>
    )
}

export default DataShow;