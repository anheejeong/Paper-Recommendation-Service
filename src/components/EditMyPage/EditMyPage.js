import React, { useState } from "react";
import classes from './EditMyPage.module.css';
import LogoBar from "../UI/LogoBar/LogoBar";
import SearchCard from "../UI/SearchCard/SearchCard";
import Card from "../UI/Card/Card";
import { useLocation, useNavigate } from "react-router-dom";
import { authService } from "../../inFirebase";
import axios from "axios";

const EditMyPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState(location.state.name)
    const [birth, setBirth] = useState(location.state.birth)
    const [college, setCollege] = useState(location.state.college)
    const [degree, setDegree] = useState(location.state.degree)
    const [major, setMajor] = useState(location.state.major)
    const [minor, setMinor] = useState(location.state.minor)
    const [field, setField] = useState(location.state.field)
    const [favor_depth, setFavorDepth] = useState(location.state.favor_depth)
    const [own_paper, setOwnPaper] = useState(location.state.own_paper)

    const inputChangeHandler = (event) => {
        const { target: { name, value } } = event;
        if (name === "name") {
            setName(value)
        } else if (name === "birth") {
            setBirth(value);
        } else if (name === "college") {
            setCollege(value)
        } else if (name === "degree") {
            setDegree(value)
        } else if (name === "major") {
            setMajor(value)
        } else if (name === "minor") {
            setMinor(value)
        } else if (name === "field") {
            setField(value)
        } else if (name === "favor_depth") {
            setFavorDepth(value)
        } else if (name === "own_paper") {
            setOwnPaper(value)
        }
    }

    const submitClickHandler = async () => {
        try {
            await axios.get('http://localhost:8080/editmypage',
                {
                    params: {
                        id: location.state.uid,
                        name: name,
                        birth: birth,
                        college: college,
                        degree: degree,
                        major: major,
                        minor: minor,
                        field: field,
                        favor_depth: favor_depth,
                        own_paper: own_paper
                    }
                },
                { withCredentials: true }
            )
                .then(res => {
                    console.log(res.data)
                    // navigate 하면서 res.data 같이 넘겨줘야 함
                    navigate('/mypage', {
                        state: {
                            uid: location.state.uid,
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

    return (
        <div className={classes.space}>
            <LogoBar />
            {/* <SearchCard>
                <p>edit profile..</p>
            </SearchCard> */}
            <h1>Profile Edit</h1>
            <p>당신은 할 수 있다 수정을 프로필</p>
            <Card>
                <form className={classes.infoform} onSubmit={submitClickHandler}>
                    <div>
                        <label>Name</label>
                        <input name="name" type="text" placeholder={location.state.name} onChange={inputChangeHandler} />
                    </div>
                    <div>
                        <label>Birth</label>
                        <input name="birth" type="date" placeholder={location.state.birth} onChange={inputChangeHandler} />
                    </div>
                    <div>
                        <label>College</label>
                        <input name="college" type="text" placeholder={location.state.college} onChange={inputChangeHandler} />
                    </div>
                    <div>
                        <label>Degree</label>
                        <input name="degree" type="text" placeholder={location.state.degree} onChange={inputChangeHandler} />
                    </div>
                    <div>
                        <label>Major</label>
                        <input name="major" type="text" placeholder={location.state.major} onChange={inputChangeHandler} />
                    </div>
                    <div>
                        <label>Minor</label>
                        <input name="minor" type="text" placeholder={location.state.minor} onChange={inputChangeHandler} />
                    </div>
                    <div>
                        <label>Field</label>
                        <input name="field" type="text" placeholder={location.state.field} onChange={inputChangeHandler} />
                    </div>
                    <div>
                        <label>Favor Depth</label>
                        <input name="favor_depth" type="text" placeholder={location.state.favor_depth} onChange={inputChangeHandler} />
                    </div>
                    <div>
                        <label>Own Paper</label>
                        <input name="own_paper" type="text" placeholder={location.state.own_paper} onChange={inputChangeHandler} />
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