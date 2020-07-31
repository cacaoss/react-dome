import React, {useContext, useLayoutEffect, useReducer} from "react";

const ReduxContext = React.createContext();

function Provider({store, children}) {
    return (
        <ReduxContext.Provider value={store}>
            {
                children
            }
        </ReduxContext.Provider>
    );
}

function connect(mapStateToProps = state => state, mapDispatchToProps) {
    return Cmp => props => {
        const {getState, dispatch, subscribe} = useContext(ReduxContext);

        const stateProps = mapStateToProps(getState());

        let dispatchProps = {dispatch}
        if (typeof mapDispatchToProps === "object") {
            dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
        } else if (typeof mapDispatchToProps === "function") {
            dispatchProps = mapDispatchToProps(dispatch);
        }

        const [, forceUpdate] = useReducer(x => x + 1, 0);

        useLayoutEffect(() => {
            const unsubscribable = subscribe(() => {
                forceUpdate();
            })
            return () => {
                unsubscribable();
            }
        })

        return <Cmp {...props} {...stateProps} {...dispatchProps}/>;
    }
}

function bindActionCreator(creator, dispatch) {
    return (...arg) => {
        dispatch(creator(...arg));
    }
}

function bindActionCreators(creators, dispatch) {
    const obj = {};
    Object.keys(creators).forEach(key => {
        obj[key] = bindActionCreator(creators[key], dispatch);
    })
    return obj;
}

function useSelector(selector) {
    const {getState, subscribe} = useContext(ReduxContext);

    const selectedState = selector(getState());

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useLayoutEffect(() => {
        const unsubscribe = subscribe(() => {
            // store state 发生改变  forceUpdate是强制更新
            forceUpdate();
        });
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    });

    return selectedState;
}

function useDispatch() {
    const {dispatch} = useContext(ReduxContext);
    return dispatch;
}

export {Provider, connect, bindActionCreators, useSelector, useDispatch}