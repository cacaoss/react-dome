export default function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);

    return function combination(state = {}, action) {
        let hasChanged = false;
        const finalState = {};

        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i];
            const reducer = reducers[key];
            const prevState = state[key];
            const nextState = reducer(prevState, action);

            finalState[key] = nextState;
            hasChanged = hasChanged || nextState !== prevState;
        }

        hasChanged = hasChanged || reducerKeys.length !== Object.keys(state).length;
        return hasChanged ? finalState : state;
    }
}