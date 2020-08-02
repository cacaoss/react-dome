import React, {useState, useEffect, useReducer} from "react";
import {Card, Button} from "antd"
import "./index.css"

export default function (props) {
    //useState初始化参数传基础数据类型 相当于给state中添加一个基础类型变量
    const [count, setCount] = useState(0);
    //useState初始化参数使用对象 相当于给state中添加一个对象
    const [person, setPerson] = useState({name: "ZZH", age: 18})
    //useState初始化参数使用数组 相当于给state中添加一个数组
    const [todos, setTodos] = useState([{id: 1, content: "eat"}])

    let [showChild, setShowChild] = useState(true);

    const clickHandleAdd = () => {
        setCount(count => count + 1);
    }
    const clickHandleMinus = () => {
        setCount(count => count - 1);
    }

    const clickHandle = () => {
        setShowChild(showChild => !showChild)
    }

    useEffect(() => {
        document.title = `you click ${count}`
        console.log("触发了 副作用1")
    }, [count])
    useEffect(() => {
        console.log("触发了 副作用2")
    }, [person])
    useEffect(() => {
        console.log("触发了 副作用3")
        return () => {
            console.log("Child 被卸载")
        }
    }, [showChild])

    const [ignore, update] = useReducer(x => x + 1, 0);

    useEffect(() => {
        update();
        console.log("useReducer", ignore);
    }, [showChild])

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
            <Button style={{marginLeft: 5}} type={"primary"} onClick={clickHandle}>Click Me</Button>
            {
                showChild ? <Child count={count}/> : null
            }
        </div>
    );
}

function Child(props) {
    return <div>count {props.count}</div>
}
