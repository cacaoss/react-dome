export default function createStore(reducer, enhancer) {
    if(enhancer){
        return enhancer(createStore)(reducer)
    }

    let state = undefined;
    let cbList = [];

    function getState() {
        return state;
    }
    function dispatch(action) {
        state = reducer(state, action);
        cbList.forEach(cb => cb());
    }

    function subscribe(cb) {
        cbList.push(cb)
        return () => {
            cbList = [];
        }
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}