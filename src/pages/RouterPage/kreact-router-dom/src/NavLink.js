import React, {Component} from "react";
import RouterContext from "../context/RouterContext";

export default class NavLink extends Component {
    static contextType = RouterContext;

    clickHandle = (e) => {
        e.preventDefault();
        this.context.history.push(this.props.to);
    }

    render() {
        const {to, children, ...restProps} = this.props;
        return (
            <a href={to} {...restProps} onClick={this.clickHandle}>
                {children}
            </a>
        );
    }
}