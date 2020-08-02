import React, {Component} from "react";
import RouterContext from "./context/RouterContext";

export default class Switch extends Component {
    static contextType=RouterContext
    componentDidMount() {
        console.log("Switch",this.context)
        console.log()
    }

    render() {
        return (
            <div className={"switch"}>
                {
                    this.props.children
                }
            </div>
        );
    }
}