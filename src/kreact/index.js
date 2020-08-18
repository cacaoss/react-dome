import {TEXT} from "./const";
import {Component} from "./Component";

function createTextNode(nodeValue) {
    return {
        type: TEXT,
        props: {
            children: [],
            nodeValue
        }
    }
}

function createElement(type, config, ...children) {
    if (config) {
        delete config.__self;
        delete config.__source;
    }

    let props ={};
    if (type && type.defaultProps) {
        props = {
            ...type.defaultProps
        }
    }

    props ={
        ...props,
        ...config,
        children: children.map(child => typeof child === "object" ? child : createTextNode(child))
    };

    return {
        type,
        props
    }
}

export {Component}
export default {createElement, Component}
