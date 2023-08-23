import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import LogIn from "../LogIn/LogIn";
import Search from "../Search/Search";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <HashRouter>
            <Switch>
                {isLoggedIn && <Route exact path="/search"><Search /></Route>}
                {!isLoggedIn && <Route exact path="/"><LogIn /></Route>}
            </Switch>
        </HashRouter>
    )
}