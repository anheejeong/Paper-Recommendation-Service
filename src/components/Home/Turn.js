import React, { useState } from "react";
import Switch from "../Switch/Switch";
import Card from "../UI/Card/Card";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";

const Turn = () => {
    const [onSwitch, setOnSwitch] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const switchChangeHandler = () => {
        if (onSwitch)
            setOnSwitch(false)
        else
            setOnSwitch(true)
    }

    return (
        <React.Fragment>
            <Switch turnSwitch={switchChangeHandler} />
            {!onSwitch && <Card>
                <LogIn isLoggedIn={isLoggedIn} />
            </Card>}
            {onSwitch && <Card>
                <SignUp isLoggedIn={isLoggedIn} />
            </Card>}
        </React.Fragment>
    );
}

export default Turn;