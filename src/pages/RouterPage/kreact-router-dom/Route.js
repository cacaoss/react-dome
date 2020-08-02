import React, {Component} from "react";

export default class Route extends Component {
    componentDidMount() {
        console.log("component", this.props)
    }

    render() {
        const {component} = this.props;
        return (
            <div>
                {
                    React.createElement(component,{})
                }
            </div>
        );
    }
}