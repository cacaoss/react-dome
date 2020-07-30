import React from "react";
import {FieldContext} from "../Context";

export default function (props) {
    const {form, children} = props;
    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                form.submit()
            }}
            onReset={event => {
                form.reset()
            }}
        >
            <FieldContext.Provider value={form}>
                {children}
            </FieldContext.Provider>
        </form>
    );
}