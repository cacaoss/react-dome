import React, {Component, useEffect} from "react";
import {Field, Form, Input} from "../../components/MyRcFieldForm";
import {Button} from "antd";
/*
export default class extends Component {
    formRef = React.createRef();

    finish = (val) => {
        console.log("成功", val)
    }

    failedFinish = (err) => {
        console.log("失败", err)
    }

    reset = () => {
        this.formRef.current.resetFieldValue();
    }

    componentDidMount() {
        this.formRef.current.setFieldValue({username: "ZZH"})
    }

    render() {
        return (
            <div>
                <h1>MyRcFieldForm Page</h1>
                <hr/>
                <Form
                    ref={this.formRef}
                    onFinish={this.finish}
                    onFailedFinish={this.failedFinish}
                    onReset={this.reset}
                >
                    <Field name={"username"}>
                        <Input placeholder={"请输入用户名"}/>
                    </Field>
                    <Field name={"password"}>
                        <Input placeholder={"请输入密码"}/>
                    </Field>
                    <Button type={"primary"} htmlType={"submit"} style={{margin: 5}}>提交</Button>
                    <Button type={"primary"} htmlType={"reset"} style={{margin: 5}}>重置</Button>
                </Form>
            </div>
        );
    }
}
*/

export default function () {
    const [form] = Form.useForm();

    const finish = (val) => {
        console.log("成功", val)
    }

    const failedFinish = (err) => {
        console.log("失败", err)
    }

    const reset = () => {
        form.resetFieldValue();
    }

    useEffect(() => {
        form.setFieldValue({username: "ZZH"})
    }, [])
    return (
        <div>
            <h1>MyRcFieldForm Page</h1>
            <hr/>
            <Form
                form={form}
                onFinish={finish}
                onFailedFinish={failedFinish}
                onReset={reset}
            >
                <Field name={"username"}>
                    <Input placeholder={"请输入用户名"}/>
                </Field>
                <Field name={"password"}>
                    <Input placeholder={"请输入密码"}/>
                </Field>
                <Button type={"primary"} htmlType={"submit"} style={{margin: 5}}>提交</Button>
                <Button type={"primary"} htmlType={"reset"} style={{margin: 5}}>重置</Button>
            </Form>
        </div>
    );
}
