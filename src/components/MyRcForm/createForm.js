import React, {Component} from "react";
import Schema from "async-validator"

export default function createForm(Cmp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {};
            this.options = {};
        }

        changeHandle = (e) => {
            const {name, value} = e.target;
            this.setState({[name]: value})
        }
        getFieldDecorator = (field, option) => {
            this.options[field] = option;

            return (Input) => {
                return React.cloneElement(Input, {
                    name: field,
                    value: this.state[field] || "",
                    onChange: this.changeHandle
                })
            }
        }
        getFieldsValue = () => {
            return this.state;
        }
        setFieldsValue = (newStor) => {
            this.setState(newStor);
        }
        validateFields = (cb) => {
            /* 使用 async-validator 验证 */
            let descriptor = {};
            for (let field in this.options) {
                this.options[field].rules.forEach(rule => {
                    descriptor[field] = {...descriptor[field], ...rule}
                })
            }
            const validator = new Schema(descriptor);
            validator.validate(this.state, descriptor).then(() => {
                cb(null, this.state);
            }).catch(({errors, fields}) => {
                cb(errors, this.state);
            })

            /* 使用 自定义 验证 */
            /*
            let err = [];
            for (let field in this.options) {
                this.options[field].rules.forEach((rule)=>{
                    if(rule.required){
                        if (this.state[field] === undefined || this.state[field] === "") {
                            err.push({[field]:rule.message});
                        }
                    }
                })
            }
            if (err.length > 0) {
                return cb(err, this.state)
            }
            return cb(null, this.state);
            */
        }
        getForm = () => {
            return {
                form: {
                    getFieldDecorator: this.getFieldDecorator,
                    getFieldsValue: this.getFieldsValue,
                    setFieldsValue: this.setFieldsValue,
                    validateFields: this.validateFields,
                }
            }
        }

        render() {
            return <Cmp {...this.props} {...this.getForm()}/>
        }
    }
}