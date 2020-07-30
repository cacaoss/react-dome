import React from "react";
import {Field, Form, Input} from "../../components/MyRcFieldForm";
import {Button} from "antd";

export default function () {
    const [form] = Form.useForm();


    function finish(val) {
        console.log("成功", val)
    }

    function failedFinish(err) {
        console.log("失败", err)
    }

    function reset() {
        console.log("reset")
    }

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