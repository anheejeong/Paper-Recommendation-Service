import React, { useState, useEffect } from "react";
import classes from './Search.module.css';
import Menubar from "./Menubar";
import search from '../../assets/search.png';
import Report from "./Report";
import MyPage from "./MyPage";
import SearchCard from "../UI/SearchCard/SearchCard";
import PaperAI from "./PaperAI";
import PaperTrend from "./PaperTrend";

import axios from "axios";
import { authService } from "../../inFirebase";
import { useNavigate } from "react-router-dom";

const Search = props => {
    const [conference, setConference] = useState('')
    const [year, setYear] = useState('')
    const [keyword, setKeyword] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        // 로그인 여부 확인 가능!
        authService.onAuthStateChanged((user) => {
            if (!user) {
                navigate('/login')
            } else {
                authService.onAuthStateChanged((user) => {
                    console.log(user.uid)
                    // user.displayname은 await user.updateProfile({displayName: name})
                })
            }
        });
    }, [])

    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "conference") {
            setConference(value);
        }
        else if (name === "year") {
            setYear(value);
        }
        else if (name === "keyword") {
            setKeyword(value)
        }
    }

    const onSubmit = async () => {
        if (conference && year && keyword) {
            //axios로 키워드 넘겨줄 것
            //navigate로 결과 화면 넘어갈 것
            try {
                await axios.get('http://localhost:3000/search',
                    { params: { conference: conference, year: year, keyword: keyword } },
                    { withCredentials: true }
                )
                    .then(res => {
                        console.log(res.data)
                        navigate('/result')
                    })
                    .catch(err => {
                        alert('err')
                    })
            } catch (e) {
                console.log(e);
            }
        } else {
            alert('fill search blank')
        }
    }


    return (
        // <React.Fragment>
        <div className={classes.space}>
            <div>
                <Menubar />
            </div>
            <div className={classes.dashboard}>
                <div>
                    <h1 className={classes.logo}>Paper Recommendation Service</h1>
                </div>
                <div>
                    <div className={classes.looking}>
                        <h1 className={classes.look}>looking paper</h1>
                        <img src={search} alt="SEARCH" />
                    </div>
                    <SearchCard>
                        <section className={classes.search}>
                            <form onSubmit={onSubmit}>
                                <div className={classes.input}>
                                    <div>
                                        <label>Conference</label>
                                        <input type="text" placeholder="conference" name="conference" onChange={onChange} />
                                    </div>
                                    <div>
                                        <label>Year</label>
                                        <input type="text" placeholder="year" name="year" onChange={onChange} />
                                    </div>
                                    <div>
                                        <label>Key Words</label>
                                        <input type="text" placeholder="key words" name="keyword" onChange={onChange} />
                                    </div>
                                </div>
                                <div className={classes.btnlocation}>
                                    <button type="submit">SEARCH</button>
                                </div>
                            </form>
                        </section>
                    </SearchCard>
                </div>
                <Report />
                <PaperAI />
                <PaperTrend />
            </div>
            <div>
                <MyPage />
            </div>
        </div>
        // </React.Fragment>
    );
}

export default Search;