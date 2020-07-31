import React, {Component} from "react";
import {createForm,Input} from "../../components/MyRcForm";

const nameRules = {required: true, message: "请输入姓名！"};
const passworRules = {required: true, message: "请输入密码！"};

@createForm
class MyRcForm extends Component {

    submit = e => {
        const {validateFields} = this.props.form;
        validateFields((err, val) => {
            if (err) {
                console.log("失败", err);
            } else {
                console.log("成功", val);
            }
        })
    }

    componentDidMount() {
        const {setFieldsValue} = this.props.form;
        setFieldsValue({username: "ZZH"});
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <h1>MyRcForm Page</h1>
                <hr/>
                {getFieldDecorator("username", {rules: [nameRules]})(<Input placeholder="请输入用户名"></Input>)}
                {getFieldDecorator("password", {rules: [passworRules]})(<Input placeholder="请输入密码"></Input>)}
                <button type={"submit"} onClick={this.submit}>登录</button>
            </div>
        );
    }
}

export default MyRcForm;