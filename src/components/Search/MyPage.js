import React from "react";
import profile from '../../assets/profile.png';
import edit from '../../assets/edit.png';
import bell from '../../assets/bell.png';
import classes from './MyPage.module.css';
import axios from "axios";
import { authService } from "../../inFirebase";

import { useNavigate } from "react-router-dom";

const MyPage = () => {
    // id(email)로 db에서 information 들고와야 함

    const navigate = useNavigate();

    const editClickHandler = () => {
        authService.onAuthStateChanged(async (user) => {
            if (!user) {
                navigate('/login')
            } else {
                try {
                    await axios.get('http://localhost:8080/mypage',
                        { params: { id: user.uid } },
                        { withCredentials: true }
                    )
                        .then(res => {
                            console.log(res.data)
                            // navigate 하면서 res.data 같이 넘겨줘야 함
                            navigate('/mypage', {
                                state: {
                                    uid: user.uid,
                                    name: res.data.name,
                                    birth: res.data.birth,
                                    college: res.data.college,
                                    degree: res.data.degree,
                                    major: res.data.major,
                                    minor: res.data.minor,
                                    field: res.data.field,
                                    favor_depth: res.data.favor_depth,
                                    own_paper: res.data.own_paper
                                }
                            })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                } catch (e) {
                    console.log(e);
                }
            }
        });
    }

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
            <div className={classes.edit} onClick={editClickHandler}>
                <label>Edit <img src={edit} alt="EDIT" /></label>
            </div>
        </div>
    );
}

export default MyPage;