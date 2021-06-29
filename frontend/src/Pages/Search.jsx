import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import React from "react";

const Search = () => {
    return (
        <>
            <h1>Search bar</h1>
            <h1>Hearder Search</h1>
            {/*Wrapper for the switch*/}
            <Switch>
                <Route path="/search/restaurants" component={ Home } exact/>
                <Route path="/search/reviews" component={ Home } exact/>
                <Route path="/search/users" component={ Home } exact/>
            </Switch>
        </>
    )
}

export default Search;