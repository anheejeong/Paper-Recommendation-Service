import React from "react";
import classes from './Switch.module.css';

const Switch = props => {
    const changeHandler = () => {
        props.turnSwitch();
    }

    return (
        <fieldset>
            <label>
                <span>Log In</span>
                <input role="switch" type="checkbox" onChange={changeHandler} />
                <span>Sign Up</span>
            </label>
        </fieldset>
    )
}

export default Switch;