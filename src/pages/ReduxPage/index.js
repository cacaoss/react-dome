import React, {Component} from "react";
import {Button} from "antd";

import store from "../../store"

export default class extends Component {

    add = () => {
        store.dispatch({type: "ADD"})
    }
    minus = () => {
        store.dispatch({type: "MINUS"})
    }

    userNameChange = e => {
        store.dispatch({type: "NAME", payload: e.target.value});
    }
    passWordChange = e => {
        store.dispatch({type: "PWD", payload: e.target.value});
    }

    componentDidMount() {
        console.log("store", store.getState());
        store.subscribe(() => {
            this.forceUpdate();
        })
    }

    render() {
        const {countState, registState} = store.getState()
        return (
            <div>
                <h1>Redux Page</h1>
                <hr/>
                <h2>CountState</h2>
                <p style={{margin: 5, fontSize: 18}}>
                    当前值
                    <span style={{margin: 5, color: "blue"}}>
                        {countState.count}
                    </span>
                </p>
                <Button type={"primary"} htmlType={"button"} style={{margin: 5}} onClick={this.add}>Count 加1</Button>
                <Button type={"primary"} htmlType={"button"} style={{margin: 5}} onClick={this.minus}>Count 减1</Button>
                <hr/>
                <h2>RegistState</h2>
                <div style={{margin: 5, fontSize: 18}}>
                    用户名：
                    <input value={registState.username} onChange={this.userNameChange}/>
                    <p style={{margin: 5, color: "blue"}}>
                        {registState.username}
                    </p>
                </div>
                <div style={{margin: 5, fontSize: 18}}>
                    密码：
                    <input value={registState.password} onChange={this.passWordChange}/>
                    <p style={{margin: 5, color: "blue"}}>
                        {registState.password}
                    </p>
                </div>
            </div>
        );
    }
}