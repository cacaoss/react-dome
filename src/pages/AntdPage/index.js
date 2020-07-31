import React, {Component, useEffect} from "react";
import {Form, Button, Select, Input} from "antd";

const nameRules = {required: true, message: "请输入姓名！"};
const passworRules = {required: true, message: "请输入密码！"};

//类组件
export default class extends Component {
    formRef = React.createRef();

    onFinish = (values) => {
        console.log("校验成功", values)
    }
    onFinishFailed = (errInfo) => {
        console.log("校验失败", errInfo.errorFields)
    }
    onReset = () => {
        console.log("重置")
    }

    componentDidMount() {
        console.log(this.formRef)
        this.formRef.current.setFieldsValue({username: "ZZH"});
    }

    render() {
        return (
            <div>
                <h1>AntdFormPage</h1>
                <hr/>
                <Form
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    onReset={this.onReset}
                    ref={this.formRef}
                >
                    <Form.Item label={"姓名"} name={"username"} rules={[nameRules]}>
                        <Input placeholder={"请输入用户名"}></Input>
                    </Form.Item>

                    <Form.Item label={"密码"} name={"password"} rules={[passworRules]}>
                        <Input placeholder={"请输入密码"}></Input>
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={this.onGenderChange}
                            allowClear
                        >
                            <Select.Option value="male">male</Select.Option>
                            <Select.Option value="female">female</Select.Option>
                            <Select.Option value="other">other</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                    >
                        {
                            ({getFieldValue}) =>
                                getFieldValue('gender') === 'other' ? (
                                    <Form.Item
                                        name="customizeGender"
                                        label="Customize Gender"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                ) : null
                        }
                    </Form.Item>
                    <Form.Item>
                        <Button type={"primary"} htmlType={"submit"}>提交</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type={"primary"} htmlType={"reset"}>重置</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

/*
export default function () {
    const [form] = Form.useForm();

    useEffect(()=>{
        console.log(form)
        form.setFieldsValue({username:"朱振华"})
    })

    function onFinish(values){
        console.log("finish",values)
    }
    function onFinishFailed(errorInfo){
        console.log("fail",errorInfo)
    }
    function onReset(){
        console.log("reset")
        form.resetFields();
    }

    return (
        <div>
            <h1>Function Antd Page</h1>
            <hr/>
            <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onReset={onReset}
            >
                <Form.Item label={"姓名"} rules={[nameRules]} name={"username"}>
                    <Input placeholder={"请输入姓名"} />
                </Form.Item>
                <Form.Item label={"密码"} rules={[passworRules]} name={"password"}>
                    <Input placeholder={"请输入密码"} />
                </Form.Item>

                <Form.Item>
                    <Button type={"primary"} htmlType={"submit"}>提交</Button>
                </Form.Item>
                <Form.Item>
                    <Button type={"primary"} htmlType={"reset"}>重置</Button>
                </Form.Item>
            </Form>
        </div>
    );
}
*/
