import React, {Component} from "react";
import RouterContext from "../context/RouterContext";
import matchPath from "./matchPath";

export default class Switch extends Component {
    static contextType = RouterContext

    render() {
        let match, element;
        React.Children.forEach(this.props.children, child => {
            if (match == null && React.isValidElement(child)) {
                element = child;
                match = child.props.path
                    ? matchPath(this.context.location.pathname, child.props)
                    : this.context.match;
            }
        });

        return (match ? React.cloneElement(element, {computedMatch: match}) : null);
    }
}