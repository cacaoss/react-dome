import React, {Component} from "react";

export default class WelcomePage extends Component {
    componentDidMount() {
        console.log("props",this.props);
    }

    render() {
        return (
            <h1>Welcome Page</h1>
        );
    }
}