import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
/*以下是 react-redux Demo */
import store from "./store";
//import {Provider} from "react-redux"
import {Provider} from "./kreact-redux";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
