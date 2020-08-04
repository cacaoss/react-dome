import React, {useState, useEffect, useReducer, PureComponent, useMemo, useCallback} from "react";
import {Card, Button} from "antd"
import "./index.css"

export default function (props) {
    /*********************************** useState useEffect*********************************************/
        //useState初始化参数传基础数据类型 相当于给state中添加一个基础类型变量
    const [count, setCount] = useState(0);
    //useState初始化参数使用对象 相当于给state中添加一个对象
    const [person, setPerson] = useState({name: "ZZH", age: 18})
    //useState初始化参数使用数组 相当于给state中添加一个数组
    const [todos, setTodos] = useState([{id: 1, content: "eat"}])

    useEffect(() => {
        document.title = `you click ${count}`
        console.log("触发了 副作用1")
    }, [count])
    useEffect(() => {
        console.log("触发了 副作用2")
    }, [person])

    const clickHandleAdd = () => {
        setCount(count => count + 1);
    }
    const clickHandleMinus = () => {
        setCount(count => count - 1);
    }
    /***************************************************************************************/

    /****************************** useuseEffect 卸载生命周期 ******************************/
    let [showChild, setShowChild] = useState(true);
    const clickHandle = () => {
        setShowChild(showChild => !showChild)
    }
    useEffect(() => {
        console.log("触发了 副作用3")
        return () => {
            console.log("Child 被卸载")
        }
    }, [showChild])
    /***************************************************************************************/

    /********************** useReducer 管理复杂State、强制更新 *****************************/
    const [ignore, update] = useReducer(x => x + 1, 0);

    useEffect(() => {
        update();
        console.log("useReducer", ignore);
    }, [showChild])
    /***************************************************************************************/

    /*********************** useMemo useCallback********************************************/
    const [count3, setCount3] = useState(0);
    const [value3, setValue3] = useState("");

    //使用useMemo 缓存变量的结果，如果他的依赖项没有变化，就不需要重新计算这个值，是不是和Vue的计算属性很像
    const sum = useMemo(() => {
        console.log("sum 执行")
        let sumCount = 0;
        for (let i = 0; i <= count3; i++) {
            sumCount += i;
        }
        return sumCount;
    }, [count3]);

    // 使用userCallback 缓存了函数的引用，如果依赖项不变化，就不需要重新生成函数引用，
    // 用途是 如果子组件是 PureComponent 时 proos接收的引用值没有变化，从而不会引发子组件无用的更新
    const addClick = useCallback(() => {
        setCount3(count3 + 1);
    }, [count3])
    // const addClick = () => {
    //     setCount3(count3 + 1);
    // }

    const add = () => {
        setCount3(count3 + 1);
    }
    const change = () => {
        setValue3(value3 + "a");
    }
    /***************************************************************************************/

    return (
        <div>
            <h1>Hooks Page</h1>
            <hr/>
            <div className="site-card-border-less-wrapper">
                <Card title="useState Demo" style={{width: 300, height: 200}}>
                    <p>Current count：<span style={{color: "blue"}}>{count}</span></p>
                    <Button
                        style={{marginRight: 5}}
                        type={"primary"}
                        htmlType={"button"}
                        onClick={clickHandleAdd}>
                        count+1
                    </Button>
                    <Button
                        style={{marginRight: 5}}
                        type={"primary"}
                        htmlType={"button"}
                        onClick={clickHandleMinus}>
                        count-1
                    </Button>
                </Card>
                <Card title="useState Demo" style={{width: 300, height: 200}}>
                    <ul>
                        {
                            Object.keys(person).map(key => (<li key={key}>{key} {person[key]}</li>))
                        }
                    </ul>
                    <Button
                        style={{marginRight: 5}}
                        type={"primary"}
                        htmlType={"button"}
                        onClick={() => {
                            setPerson(person => ({name: "CYL", age: 18}))
                        }}>
                        修改
                    </Button>
                </Card>
                <Card title="useState Demo" style={{width: 300, height: 200}}>
                    <ul>
                        {
                            todos.map(todo => (<li key={todo.id}>{todo.id}--{todo.content}</li>))
                        }
                    </ul>
                    <Button
                        style={{marginRight: 5}}
                        type={"primary"}
                        htmlType={"button"}
                        onClick={() => {
                            setTodos(todos => {
                                let maxIndex = 0;
                                todos.forEach((item) => {
                                    if (item.id >= maxIndex) {
                                        maxIndex = item.id;
                                    }
                                })

                                return [...todos, {id: maxIndex + 1, content: "sleep"}];
                            })
                        }}>
                        修改
                    </Button>
                </Card>
            </div>

            <hr/>
            <Button style={{marginLeft: 5}} type={"primary"} onClick={clickHandle}>测试卸载</Button>
            {
                showChild ? <Child count={count}></Child> : null
            }
            
            <hr/>
            <p>sum: {sum}</p>
            <button onClick={add}>count {count3}</button>
            &nbsp;
            <button onClick={change}>value {value3}</button>
            <ClickChild onClick={addClick}></ClickChild>
        </div>
    );
}

function Child(props) {
    return (
        <div>
            <p>可以卸载</p>
            {props.count}
        </div>
    );
}

class ClickChild extends PureComponent {
    render() {
        console.log("ClickChild 渲染")
        return (
            <div>
                <p>count {this.props.count}</p>
                <button onClick={this.props.onClick}>点击</button>
            </div>
        );
    }
}