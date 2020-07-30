import React, {useRef} from "react";

class FormStore {
    constructor() {
        this.store = {}
        this.fieldEnetities = [];
    }
    registerEntity = (entity) => {
        this.fieldEnetities.push(entity);
    }

    getFieldsValue = () => {
        return this.store;
    }
    getFieldValue = (name) => {
        return this.store[name];
    }
    setFieldValue = (newState) => {
        this.store = {
            ...this.store,
            ...newState
        }
    }

    submit = () => {
        console.log("S", this.getFieldsValue())
    }
    reset = () => {
        console.log("R")
    }

    getForm = () => {
        return {
            registerEntity: this.registerEntity,
            getFieldsValue: this.getFieldsValue,
            getFieldValue: this.getFieldValue,
            setFieldValue: this.setFieldValue,

            submit: this.submit,
            reset: this.reset,
        }
    }
}

export function useForm() {
    const formRef = useRef();
    if (!formRef.current) {
        const formStore = new FormStore();
        formRef.current = formStore.getForm();
    }

    return [formRef.current]
}