import React from "react";
import Card from "../UI/Card/Card";
import classes from './LogIn.module.css';

const LogIn = props => {
    return (
        <React.Fragment>
            <fieldset>
                <label>
                    <span>Log In</span>
                    <input role="switch" type="checkbox" />
                    <span>Sign Up</span>
                </label>
            </fieldset>
            <Card>
                <section className={classes.login}>
                    <div>
                        <h1>LogIn</h1>
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
            </Card>
        </React.Fragment>
    );
}

export default LogIn;