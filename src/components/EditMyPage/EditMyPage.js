import React from "react";
import classes from './EditMyPage.module.css';
import LogoBar from "../UI/LogoBar/LogoBar";
import SearchCard from "../UI/SearchCard/SearchCard";
import Card from "../UI/Card/Card";

const EditMyPage = () => {
    return (
        <div className={classes.space}>
            <LogoBar />
            {/* <SearchCard>
                <p>edit profile..</p>
            </SearchCard> */}
            <h1>Profile Edit</h1>
            <p>당신은 할 수 있다 수정을 프로필</p>
            <Card>
                <form className={classes.infoform} action="submit">
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Birth</label>
                        <input type="date" placeholder="생년월일을 입력해주세요" />
                    </div>
                    <div>
                        <label htmlFor="">College</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Degree</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Major</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Minor</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Field</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Favor Depth</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Own Paper</label>
                        <input type="text" />
                    </div>
                    <div className={classes.btn}>
                        <button type="submit">Edit</button>
                        {/* 취소 버튼도 있어야 할까? */}
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default EditMyPage;