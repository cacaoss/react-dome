import React from "react";
import "./index.css"
//import {BrowserRouter as Router, NavLink, Switch, Route, Redirect, Prompt} from "react-router-dom"
import {BrowserRouter as Router, NavLink, Route, Switch, Redirect} from "./kreact-router-dom"

import HomePage from "./page/HomePage"
import UserPage from "./page/UserPage";
import LoginPage from "./page/LoginPage";
import WelcomePage from "./page/WelcomePage";
import _404Page from "./page/_404Page";
import {useHook} from "./hook/useHook";

function Product() {
    const {params} = useHook();
    return (
        <div>
            <h2>{params.id}</h2>
            Product
        </div>
    );
}

export default function RouterPage(props) {
    return (
        <div>
            <h1>Router Page</h1>
            <hr/>
            <Router>
                <NavLink to={"/"} exact activeClassName={"active-select"}>首页</NavLink>
                <NavLink to={"/user"} activeClassName={"active-select"}>用户中心</NavLink>
                <NavLink to={"/login"} activeClassName={"active-select"}>登录</NavLink>
                <NavLink to={"/welcome"} activeClassName={"active-select"}>欢迎</NavLink>
                <NavLink to={"/product/123"} activeClassName={"active-select"}>商品</NavLink>

                <Switch>
                    <Route exact path={"/"} component={HomePage}></Route>
                    <Route path={"/user"} component={UserPage}></Route>
                    <Route path={"/login"} component={LoginPage}></Route>
                    {/*<Route path={"/welcome"} component={WelcomePage}></Route>*/}
                    <Route path={"/welcome"} render={() => <Redirect to={"/login"}/>}></Route>

                    <Route path={"/product/:id"} component={Product}></Route>
                    <Route component={_404Page}></Route>
                </Switch>
            </Router>
        </div>
    )
}

