import React, { useEffect } from "react";
import classes from './EditMyPage.module.css';
import LogoBar from "../UI/LogoBar/LogoBar";
import SearchCard from "../UI/SearchCard/SearchCard";
import Card from "../UI/Card/Card";
import { useNavigate } from "react-router-dom";
import { authService } from "../../inFirebase";
import axios from "axios";

const EditMyPage = () => {
    const navigate = useNavigate();
    // 디비에서 불러와서 Input placeholder로 불러올 것
    useEffect(() => {
        // 로그인 여부 확인 가능!
        authService.onAuthStateChanged(async (user) => {
            if (!user) {
                navigate('/login')
            } else {
                try {
                    await axios.get('http://localhost:3000/mypage',
                        { params: { id: user.user.uid } },
                        { withCredentials: true }
                    )
                        .then(res => {
                            // search result data
                            console.log(res.data)
                            // navigate 하면서 res.data 같이 넘겨줘야 함
                        })
                        .catch(err => {
                            alert('err')
                        })
                } catch (e) {
                    console.log(e);
                }
            }
        });
    }, [])

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