import React from "./kreact"
import ReactDom from "./kreact-dom"
import "./index.css"

import KReactClassPage from "./pages/KReactClassPage";
import KReactFunctionPage from "./pages/KReactFunctionPage";

const jsx = (
    <div className={"border"}>
        <p>全栈</p>
        <a href="https://www.kaikeba.com">开课吧</a>
        {
            ["课1", "课2", "课3",].map(item => (<p>{item}</p>))
        }
        <>
            <p>H1</p>
            <p>H2</p>
        </>
        <KReactClassPage name={"Class 传值测试"}/>
        <KReactFunctionPage name={"Function 传值测试"}/>
    </div>
);

ReactDom.render(
    jsx,
    document.getElementById("root")
);
