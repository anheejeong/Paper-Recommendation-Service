import React, { useState } from "react";
import classes from './DataShow.module.css';
import Card from "../UI/Card/Card";
import axios from "axios";
import Tree from "./Tree";
import Loading from "./Loading";

const DataShow = (props) => {
    const [tree, setTree] = useState(false);
    const [loading, setLoading] = useState(false);
    var arr = []

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
                        setTree(!tree)
                        console.log(res)
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
                title1="LZSS 압축 알고리즘을 적용한 PDA용 Embedded Linux 파일 시스템 설계"
                title2="LZSS 압축 알고리즘을 적용한 PDA용 Embedded Linux 파일 시스템 설계"
                title3="LZSS 압축 알고리즘을 적용한 PDA용 Embedded Linux 파일 시스템 설계"
                title4="LZSS 압축 알고리즘을 적용한 PDA용 Embedded Linux 파일 시스템 설계"
                title5="LZSS 압축 알고리즘을 적용한 PDA용 Embedded Linux 파일 시스템 설계"
                title6="LZSS 압축 알고리즘을 적용한 PDA용 Embedded Linux 파일 시스템 설계"
            />}
        </div>
    )
}

export default DataShow;