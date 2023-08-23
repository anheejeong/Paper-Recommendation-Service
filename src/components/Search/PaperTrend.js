import React from "react";

import classes from './PaperTrend.module.css';
import SearchCard from "../UI/SearchCard/SearchCard";

const PaperTrend = () => {
    return (
        <div className={classes.papertrend}>
            <div>
                <h1>latest paper trend</h1>
            </div>
            <div>
                <SearchCard>
                    <div>
                        <p>최근에 나온 관련 전공 논문 인기순이나 이런 것도 보여주면 좋지 않을까요 . . . 우리팀은 사업성이 부족 . . . . .</p>
                    </div>
                    <div>
                        <p>latest</p>
                    </div>
                    <div>
                        <p>paper</p>
                    </div>
                    <div>
                        <p>trend</p>
                    </div>
                </SearchCard>
            </div>
            <div className={classes.bottom}></div>
        </div>
    );
}

export default PaperTrend;