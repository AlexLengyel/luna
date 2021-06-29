import React from 'react';
import ReactDOM from 'react-dom';
import store from "./Store";
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import {defaultTheme, GlobalStyle} from './Style'
import Search from "./Pages/Search";
import Home from "./Pages/Home";
import {Main} from "./Style/container";
import Restaurant from "./Pages/Restaurant";
import Profile from "./Pages/Profile";
import NavFooter from './Components/footer/index';
import Navigation from './Components/navigation';
import Registrationpage from './Pages/Registration';
const token = localStorage.getItem("token");
store.dispatch({type: "setToken", payload: token})

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            <>
                <Navigation/>
                <Main>
                    <Router>
                        <Switch>
                            <Route path="/" component={ Home } exact/>
                            <Route path="/search" component={ Search } />
                            <Route path="/restaurant" component={ Restaurant } />
                            <Route path="/profile" component={ Profile } />
                            <Route path="/registration" component={ Registrationpage} />
                        </Switch>
                    </Router>
                </Main>
                <NavFooter/>
            </>
        </ThemeProvider>
    </Provider>,

    document.getElementById('root')
);

