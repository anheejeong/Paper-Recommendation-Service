import React, { useState, useEffect } from "react";
import classes from './LogIn.module.css';

import { authService } from "../../inFirebase";
import { useNavigate } from "react-router-dom";

const LogIn = props => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errormessage, setErrormessage] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        // 로그인 여부 확인 가능!
        authService.onAuthStateChanged((user) => {
            if (user) {
                navigate('/search');
            }
        });
    }, [])

    const onChange = (event) => {
        // event.target.name, event.target.value
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value);
        }
        else if (name === "password") {
            setPassword(value)
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        // check login
        if (email && password) {
            try {
                await authService.signInWithEmailAndPassword(email, password)
                    .then((data) => {
                        console.log(data)
                        authService.onAuthStateChanged((user) => {
                            console.log(user.uid)
                            // user.displayname은 await user.updateProfile({displayName: name})
                        })
                        navigate('/search')
                    })
                    .catch((err) => {
                        // show error message
                        console.log(err)
                        alert(err.message)
                        setErrormessage(err.message)
                    })
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <section className={classes.login}>
            <div>
                <h1>LOGIN</h1>
            </div>
            <div className={classes.input}>
                <form className={classes.form} onSubmit={onSubmit}>
                    <div>
                        <input
                            name="email"
                            className={classes.email}
                            type="text"
                            placeholder="email"
                            required
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <input
                            name="password"
                            className={classes.password}
                            type="password"
                            placeholder="password"
                            required
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className={classes.err}>
                        {errormessage}
                    </div>
                    <div className={classes.buttonLocation}>
                        <button className={classes.button} type="submit">JOIN</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LogIn;