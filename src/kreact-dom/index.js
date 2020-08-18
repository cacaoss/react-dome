import {TEXT} from "../kreact/const";

function updateNode(node, nextValue) {
    Object.keys(nextValue)
        .filter(key => key !== "children")
        .forEach(key => node[key] = nextValue[key])
}

function reconcileChildren(children, node) {
    for (let i = 0; i < children.length; i++) {
        const childItem = children[i];
        if (Array.isArray(childItem)) {
            for (let j = 0; j < childItem.length; j++) {
                render(childItem[j], node);
            }
        } else {
            render(childItem, node);
        }
    }
}

function updateClassComponent(vnode) {
    const {type, props} = vnode;
    const cmp = new type(props);
    return createNode(cmp.render());
}

function updateFunctionComponent(vnode) {
    const {type, props} = vnode;
    return createNode(type(props));
}

function createNode(vnode) {
    const {type, props} = vnode;
    let node = null;
    if (type === TEXT) {
        node = document.createTextNode("");
    } else if (typeof type === "string") {
        node = document.createElement(type)
    } else if (typeof type === "function") {
        node = type.prototype.isReactComponent
            ? updateClassComponent(vnode)
            : updateFunctionComponent(vnode);
    } else {
        node = document.createDocumentFragment();
    }

    reconcileChildren(props.children, node);
    updateNode(node, props);

    return node;
}

function render(vnode, container) {
    const node = createNode(vnode);
    container.appendChild(node);
}

export default {render}