import React, {Component} from "react";
import {Button} from "antd";

export default class StatePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    //生命周期中 更新是异步的
    componentDidMount() {
        //this.addCount(2);

        const elButton = document.getElementById("button");
        elButton.addEventListener("click", this.addCountFix);
    }

    handleClick = (e) => {
        //合成事件中 更新是异步的
        //this.setState({count: this.state.count + 1});
        //console.log(`count: ${this.state.count}`);

        //在合成事件中 使用setTimeout 后是同步的
        // setTimeout(()=>{
        //     this.setState({count: this.state.count + 1});
        //     console.log(`count: ${this.state.count}`);
        // },0);

        //在合成事件中 使用setState的第二参数 回调函数中的state是同步的
        // this.setState(
        //     {count: this.state.count + 1},
        //     () => {
        //         console.log(`count: ${this.state.count}`);
        //     });

        this.addCount(1);
        this.addCount(2);
        this.addCount(3);
    }

    addCount(param) {
        //批量更新被合并
        // this.setState({count: this.state.count + param},
        //     () => {
        //         console.log(`count: ${this.state.count}`);
        //     }
        // );

        //函数的方式不会合并批量更新
        this.setState(
            (state)=>{
                return  {count: state.count + param}
            },
            () => {
                console.log(`count: ${this.state.count}`);
            }
        );
    }

    //原生事件是同步的
    addCountFix = () => {
        this.setState({count: this.state.count + 1});
        console.log(`count: ${this.state.count}`);
    }


    render() {
        return (
            <div>
                <h1>State Page</h1>
                <hr/>
                <Button type={"primary"} htmlType={"button"} onClick={this.handleClick}>
                    count: {this.state.count}
                </Button>
                &nbsp;
                <Button type={"primary"} htmlType={"button"} id={"button"}>
                    原生 count: {this.state.count}
                </Button>
            </div>
        );
    }
}