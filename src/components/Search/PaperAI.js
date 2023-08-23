import React from "react";

import classes from './PaperAI.module.css';
import SearchCard from "../UI/SearchCard/SearchCard";

const PaperAI = () => {
    return (
        <div className={classes.paperAI}>
            <div>
                <h1>Recent Paper Analyze AI</h1>
            </div>
            <div>
                <SearchCard>
                    <div>
                        <p>최근 논문 기록 보고 분석해서 뭐 다른 논문이든 사진이든 추천해주면 좋지 않을까요 . . . . . 이건 돈 받고 . . . </p>
                    </div>
                    <div>
                        <p>recent</p>
                    </div>
                    <div>
                        <p>paper</p>
                    </div>
                    <div>
                        <p>analyze</p>
                    </div>
                    <div>
                        <button>require payment</button>
                    </div>
                </SearchCard>
            </div>
        </div>
    );
}

export default PaperAI;