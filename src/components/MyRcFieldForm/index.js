import React from "react";
import _Form from "./components/Form"
import Field from "./components/Field"
import Input from "./components/Input";
import {useForm} from "./hooks/useForm";

/*
    Form 是一个函数组件，默认不能使用 ref
    如果要使用ref 先包装一下
*/
const Form = React.forwardRef(_Form);

// 在Form上挂载一个useForm
Form.useForm = useForm;

export {Form, Field, Input}