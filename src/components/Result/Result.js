import React from "react";
import classes from './Result.module.css';
import { useLocation } from "react-router-dom";
import DataShow from "./DataShow";

const Result = () => {
    const location = useLocation();

    return (
        <React.Fragment>
            <div className={classes.allspace}>
                <div>
                    <h1>Search Result</h1>
                </div>
                <div>
                    {location.state.form_data.map((data) => (
                        <DataShow
                            title={data.title}
                            link={data.link}
                        />
                    ))}
                    {/* <DataShow
                        title="LZSS 압축 알고리즘을 적용한 PDA용 Embedded Linux 파일 시스템 설계"
                        link="http://localhost:8080/안녕하세용"
                        score="0.63"
                        year="2022"
                        person="안희정"
                    />
                    <DataShow
                        title="Embedded Linux와 Qt를 이용한 인터넷 기반의 PDA형 원격 제어 시스템 개발"
                        link="http://localhost:8080/눈누난나"
                        score="0.59"
                        year="2000"
                        person="안희정"
                    />
                    <DataShow
                        title="LZSS 압축 알고리즘을 적용한 PDA용 Embedded Linux 파일 시스템 설계"
                        link="http://localhost:8080/안뇽안뇽"
                        score="0.55"
                        year="2007"
                        person="안희정"
                    />
                    <DataShow
                        title="PDA를 이용한 원격지 영상 감시 및 모터제어 시스템 구현"
                        link="http://localhost:8080/눈누난나"
                        score="0.43"
                        year="2010"
                        person="안희정"
                    />
                    <DataShow
                        title="Embedded System Management"
                        link="http://localhost:8080/눈누난나"
                        score="0.28"
                        year="2011"
                        person="안희정"
                    /> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Result;