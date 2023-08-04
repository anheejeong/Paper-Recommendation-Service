import React from "react";
import classes from './LogIn.module.css';

const LogIn = props => {
    return (
        <section className={classes.login}>
            <div>
                <h1>LOGIN</h1>
            </div>
            <div className={classes.input}>
                <form className={classes.form}>
                    <div>
                        <input className={classes.email} type="text" placeholder="email" />
                    </div>
                    <div>
                        <input className={classes.password} type="password" placeholder="password" />
                    </div>
                    <div className={classes.buttonLocation}>
                        <button className={classes.button}>JOIN</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LogIn;