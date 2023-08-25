import React, { useState } from "react";
import classes from './SignUp.module.css';
import { useNavigate } from "react-router-dom";
import { authService } from "../../inFirebase";
import axios from "axios";

const SignUp = props => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [phonenum, setPhonenum] = useState('')
    const [password, setPassword] = useState('')
    const [checkpassword, setCheckpassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate();

    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value);
        }
        else if (name === "password") {
            setPassword(value);
        }
        else if (name === "username") {
            setUsername(value);
        }
        else if (name === "phonenum") {
            setPhonenum(value);
        }
        else if (name === "checkpassword") {
            setCheckpassword(value);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        // 로그인 / 계정생성 후 persistence 관리
        // 따로 관리를 해주지 않으면 default 값은 Local
        // local, session, none 세 가지 중 하나 선택 가능
        try {
            let data;
            data = await authService.createUserWithEmailAndPassword(email, password)
            // .then(userCredential => console.log(userCredential.user))
            // data.user?
            // id => user.uid로 디비 넣어줄 것

            // console.log(data);
            // console.log(data.user)
            // console.log(data.user.uid)

            await axios.post('http://localhost:3000/signup', {
                name: username,
                email: email,
                id: data.user.uid,
                phonenum: phonenum
            })
                .then(navigate('/homepage'))
                .catch(e => console.log(e))
        } catch (err) { // 가입된 이메일 계정이 이미 있을때
            setError(err.message);
            alert('This account is already subscribed.')
        }
    };

    return (
        <section className={classes.signup}>
            <div>
                <h1>SIGN UP</h1>
            </div>
            <div className={classes.input}>
                <form className={classes.form} onSubmit={onSubmit}>
                    <div>
                        <input
                            className={classes.username}
                            type="text"
                            placeholder="Full Name"
                            name="username"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <input
                            className={classes.email}
                            type="text"
                            placeholder="email"
                            name="email"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <input
                            className={classes.phoneNum}
                            type="text"
                            placeholder="phone number"
                            name="phonenum"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <input
                            className={classes.password}
                            type="password"
                            placeholder="password"
                            name="password"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <input
                            className={classes.passwordCheck}
                            type="password"
                            placeholder="password check"
                            name="checkpassword"
                            onChange={onChange}
                        />
                    </div>
                    <div className={classes.buttonLocation}>
                        <button className={classes.button} type="submit">Create Your Account</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignUp;