import React, {Component} from "react";
import {FieldContext} from "../Context";

export default class extends Component {
    static contextType = FieldContext;

    componentDidMount() {
        const {registerEntity} = this.context;
        this.cancelRegister = registerEntity(this);
    }

    getApi = () => {
        const {name} = this.props;
        const {getFieldValue, setFieldValue} = this.context;

        return {
            value: getFieldValue(name),
            onChange: (event) => {
                setFieldValue({[name]: event.target.value})
            }
        }
    }

    render() {
        return (
            <div>
                {
                    React.cloneElement(this.props.children, this.getApi())
                }
            </div>
        );
    }
}