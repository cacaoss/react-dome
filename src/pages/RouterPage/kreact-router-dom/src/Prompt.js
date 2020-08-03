import React, {Component} from "react";
import RouterContext from "../context/RouterContext";

export default class Prompt extends Component {
    static contextType = RouterContext;

    render() {
        const {when, message} = this.props;
        if (!when) {
            return null;
        }

        return <PromptAlert
            onMount={
                (promptAlert) => {
                    promptAlert.releaseBlock = this.context.history.block(message);
                }
            }
            onUpdate={
                (promptAlert, prevProps) => {
                    if (prevProps.message != message) {
                        promptAlert.releaseBlock();
                        promptAlert.releaseBlock = this.context.history.block(message);
                    }
                }
            }
            onUnmount={
                (promptAlert) => {
                    promptAlert.releaseBlock();
                }
            }
            message={message}
        />;
    }
}

class PromptAlert extends Component {
    componentDidMount() {
        if (this.props.onMount) {
            this.props.onMount.call(this, this);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.onUpdate) {
            this.props.onUpdate.call(this, this, prevProps);
        }
    }

    componentWillUnmount() {
        if (this.props.onUnmount) {
            this.props.onUnmount.call(this, this);
        }
    }

    render() {
        return null;
    }
}