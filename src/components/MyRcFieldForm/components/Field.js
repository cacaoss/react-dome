import React, {Component} from "react";
import {FieldContext} from "../context";

export default class extends Component {
    static contextType = FieldContext;

    storeChange = () => {
        this.forceUpdate();
    }

    componentDidMount() {
        const {registerEntity} = this.context;
        this.cancelRegister = registerEntity(this);
    }

    setControl = () => {
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
        return  React.cloneElement(this.props.children, this.setControl());
    }
}