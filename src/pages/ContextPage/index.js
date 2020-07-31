import React, {Component, useContext, useEffect} from "react";
import {UserContext} from "../../context/"

class FirstLevel extends Component {
    componentDidMount() {
        console.log(this)
    }

    render() {
        return (
            <UserContext.Consumer>
                {
                    context => {
                        return (
                            <div>
                                <h2>第1层子组件 {this.context.userName}</h2>
                                <p>{context.userName}</p>
                                <hr/>
                                {this.props.children}
                            </div>
                        )
                    }
                }
            </UserContext.Consumer>
        );
    }
}

function SeconeLevel() {
    // const {userName,password} =useContext(UserContext)
    //
    // useEffect(()=>{
    //     console.log(userName,password)
    // })

    return (
        <div>
            <h3>第2层子组件</h3>

            <UserContext.Consumer>
                {
                    context=>{
                        return (
                            <div>{context.password}</div>
                        );
                    }
                }
            </UserContext.Consumer>
        </div>
    );
}

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                userName: "ZZH",
                password: "123",
            }
        }
    }

    render() {
        return (
            <div>
                <h1>ContextPage</h1>
                <hr/>
                <UserContext.Provider value={this.state.user}>
                    <FirstLevel>
                        <SeconeLevel/>
                    </FirstLevel>
                </UserContext.Provider>
            </div>
        );
    }
}