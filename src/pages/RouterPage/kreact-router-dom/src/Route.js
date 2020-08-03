import React, {Component} from "react";
import RouterContext from "../context/RouterContext";
import matchPath from "./matchPath";

export default class Route extends Component {
    static contextType = RouterContext
    render() {
        const location = this.context.location;
        const {children, component, render, path, computedMatch} = this.props;
        const match = computedMatch
            ? computedMatch
            : path
                ? matchPath(location.pathname, this.props)
                : this.context.match;

        const props = {
            ...this.context,
            match
        };

        return (
            <RouterContext.Provider value={props}>
                {match
                    ? children
                        ? typeof children === "function"
                            ? children(props)
                            : children
                        : component
                            ? React.createElement(component, props)
                            : render
                                ? render(props)
                                : null
                    : typeof children === "function"
                        ? children(props)
                        : null}
            </RouterContext.Provider>
        );
    }
}