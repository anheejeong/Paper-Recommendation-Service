import React from "react";
import profile from '../../assets/profile.png';
import edit from '../../assets/edit.png';
import bell from '../../assets/bell.png';
import classes from './MyPage.module.css';

const MyPage = () => {
    // id(email)로 db에서 information 들고와야 함

    return (
        <div className={classes.mypage}>
            <div className={classes.title}>
                <h1>My Page</h1>
                <button type="button"><img src={bell} alt="BELL" /></button>
            </div>
            <div className={classes.pro}>
                <img src={profile} alt="PROFILE" />
            </div>
            <div className={classes.nickname}>
                <label>lucy123@gmail.com</label>
            </div>
            <div className={classes.info}>
                <label>Name: Lucy</label>
                <label>Birth: 1999. 08. 01</label>
                <label>College: KyungPook University</label>
                <label>Degree: Bachelor</label>
                <label>Major: Computer Science</label>
                <label>Minor: x</label>
                <label>Field: Computer Vision</label>
                <label>Favor Depth: 4</label>
                <label>Own Paper: 0</label>
            </div>
            <div className={classes.edit}>
                <label>Edit <img src={edit} alt="EDIT" /></label>
            </div>
        </div>
    );
}

export default MyPage;