import React, {useRef} from "react";

class FormStore {
    constructor() {
        this.store = {}
        this.fieldEnetities = [];
        this.callbackList = {};
    }

    registerEntity = (entity) => {
        this.fieldEnetities.push(entity);

        return () => {
            this.fieldEnetities = this.fieldEnetities.filter(item => {
                return item !== entity
            })
            delete this.store[entity.props.name]
        }
    }
    registerCallback = (callbacks) => {
        this.callbackList = {
            ...this.callbackList,
            ...callbacks
        }
    }

    getFieldsValue = () => {
        return this.store;
    }
    getFieldValue = (name) => {
        return this.store[name];
    }
    setFieldValue = (newStore) => {
        this.store = {
            ...this.store,
            ...newStore
        }

        this.fieldEnetities.forEach(enetity => {
            for (let key in newStore) {
                if (enetity.props.name === key) {
                    enetity.storeChange()
                }
            }
        })
    }
    resetFieldValue = () => {
        this.store = {};
        this.fieldEnetities.forEach(enetity => {
            enetity.storeChange()
        })
    }

    validate = () => {
        let err = [];
        this.fieldEnetities.forEach(enetity => {
            if (this.store[enetity.props.name] === undefined || this.store[enetity.props.name] === "") {
                err.push({[enetity.props.name]: "错误"});
            }
        })

        return err;
    }
    submit = () => {
        const {onFinish, onFailedFinish} = this.callbackList;
        const err = this.validate();
        if (err.length !== 0) {
            onFailedFinish(err);
            return;
        }
        onFinish(this.getFieldsValue());
    }
    reset = () => {
        const {onReset} = this.callbackList;
        onReset();
    }

    getForm = () => {
        return {
            registerEntity: this.registerEntity,
            registerCallback: this.registerCallback,

            getFieldsValue: this.getFieldsValue,
            getFieldValue: this.getFieldValue,
            setFieldValue: this.setFieldValue,
            resetFieldValue: this.resetFieldValue,

            submit: this.submit,
            reset: this.reset,
        }
    }
}

export function useForm(form) {
    const formRef = useRef();
    if (!formRef.current) {
        if (form) {
            formRef.current = form;
        } else {
            const formStore = new FormStore();
            formRef.current = formStore.getForm();
        }
    }

    return [formRef.current]
}