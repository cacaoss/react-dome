import React from "../../kreact";

function KReactFunctionPage(props) {
    return (
        <div className={"border"}>
            <h1>KReactFunctionPage</h1>
            <hr/>
            <p>name: {props.name}</p>
            <a href="https://www.kaikeba.com">开课吧</a>
        </div>
    );
}

export default KReactFunctionPage;