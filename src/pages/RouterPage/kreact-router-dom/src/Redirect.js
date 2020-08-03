import React, {Component} from "react";
import RouterContext from "../context/RouterContext";

export default class Redirect extends Component {
    static contextType = RouterContext;

    render() {
        const {history} = this.context;
        const {to, push = false} = this.props
        return (
            <LifeCycle onMount={
                () => {
                    push ? history.push(to) : history.replace(to);
                }
            }/>
        );
    }
}

class LifeCycle extends Component {
    componentDidMount() {
        if (this.props.onMount) {
            this.props.onMount.call(this, this);
        }
    }

    render() {
        return null;
    }
}