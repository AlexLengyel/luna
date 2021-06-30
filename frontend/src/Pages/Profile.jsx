import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import React from "react";

const Profile = () => {
    return (
        <>
            <h1>border</h1>
            <h1>Left</h1>
            <h1>Right</h1>
            {/*Wrapper for the switch*/}
            <Switch>
                <Route path="/profile/reviews" component={ Home } exact/>
                <Route path="/profile/comments" component={ Home } exact/>
                <Route path="/profile/restaurants" component={ Home } exact/>
                <Route path="/profile/edit" component={ Home } exact/>
            </Switch>
        </>
    )
}

export default Profile;