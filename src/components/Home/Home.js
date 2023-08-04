import React, { useState } from "react";
import Card from "../UI/Card/Card";
// import classes from './Home.module.css';
import Switch from "../Switch/Switch";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";

const Home = props => {
    const [onSwitch, setOnSwitch] = useState(false);

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
                <LogIn />
            </Card>}
            {onSwitch && <Card>
                <SignUp />
            </Card>}
        </React.Fragment>
    );
}

export default Home;