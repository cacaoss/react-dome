import React from "react";
import {FieldContext} from "../context";
import {useForm} from "../hooks/useForm";

export default function Form ({form, children, onFinish, onFailedFinish, onReset},ref) {
    const [formInstance] = useForm(form);
    React.useImperativeHandle(ref,()=>formInstance);
    formInstance.registerCallback({onFinish, onFailedFinish, onReset})

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                formInstance.submit()
            }}
            onReset={event => {
                formInstance.reset()
            }}
        >
            <FieldContext.Provider value={formInstance}>
                {children}
            </FieldContext.Provider>
        </form>
    );
}
