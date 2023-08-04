import React from "react";
import classes from './SignUp.module.css';

const SignUp = props => {
    return (
        <section className={classes.signup}>
            <div>
                <h1>SIGN UP</h1>
            </div>
            <div className={classes.input}>
                <form className={classes.form}>
                    <div>
                        <input className={classes.username} type="text" placeholder="Full Name" />
                    </div>
                    <div>
                        <input className={classes.email} type="text" placeholder="email" />
                    </div>
                    <div>
                        <input className={classes.phoneNum} type="text" placeholder="phone number" />
                    </div>
                    <div>
                        <input className={classes.password} type="password" placeholder="password" />
                    </div>
                    <div>
                        <input className={classes.passwordCheck} type="password" placeholder="password check" />
                    </div>
                    <div className={classes.buttonLocation}>
                        <button className={classes.button}>Create Your Account</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignUp;