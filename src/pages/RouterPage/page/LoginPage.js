import React, {useEffect, useState} from "react";
import {Button, Form, Input} from "antd";
// import {Prompt} from "react-router-dom"
import {Prompt} from "../kreact-router-dom"
import {useHook} from "../hook/useHook";

export default function LoginPage() {
    useHook();
    const [finish, setFinish] = useState(true)

    return (
        <div>
            <h1>LoginPage Page</h1>
            <hr/>
            <Form
                onFinish={()=>{
                    setFinish(false);
                }}>
                <Form.Item name={"username"} label={"姓名"}>
                    <Input></Input>
                </Form.Item>
                <Form.Item name={"password"} label={"密码"}>
                    <Input></Input>
                </Form.Item>
                <Form.Item>
                    <Button type={"primary"} htmlType={"submit"}>提交</Button>
                </Form.Item>
            </Form>
            <Prompt
                when={finish}
                message="Are you sure you want to leave?"
            />
        </div>
    );
}