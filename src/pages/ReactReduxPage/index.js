import React, {Component, useEffect} from "react";
import {Button} from "antd";

//import {bindActionCreators} from "redux";
//import {connect} from "react-redux"
//import {useDispatch, useSelector} from "react-redux";

import {connect, bindActionCreators} from "../../kreact-redux"
import {useDispatch, useSelector} from "../../kreact-redux";

/* 以下是函数组件的使用方式 */
function RactReduxPage(props) {
    const {countState, registState} = useSelector(({countState, registState}) => ({countState, registState}))
    const {count} = countState;
    const {username, password} = registState;

    const dispatch = useDispatch();
    const add = () => {
        dispatch({type: "ADD"})
    };
    const minus = () => {
        dispatch({type: "MINUS"})
    };
    const setUserName = (val) => {
        dispatch({type: "NAME", payload: val})
    };
    const setPassword = (val) => {
        dispatch({type: "PWD", payload: val})
    };

    const userNameChange = (e) => {
        setUserName(e.target.value);
    };
    const passWordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <h1>RactRedux Page</h1>
            <hr/>
            <h2>CountState</h2>
            <p style={{margin: 5, fontSize: 18}}>
                当前值
                <span style={{margin: 5, color: "blue"}}>
                        {count}
                    </span>
            </p>
            <Button type={"primary"} htmlType={"button"} style={{margin: 5}} onClick={add}>Count
                加1</Button>
            <Button type={"primary"} htmlType={"button"} style={{margin: 5}} onClick={minus}>Count
                减1</Button>
            <Button type={"primary"} htmlType={"button"} style={{margin: 5}} onClick={() => {
                dispatch({type: "ADD"})
            }}>Count
                dispatch 加1</Button>
            <h2>RegistState</h2>
            <div style={{margin: 5, fontSize: 18}}>
                用户名：
                <input value={username} onChange={userNameChange}/>
                <p style={{margin: 5, color: "blue"}}>
                    {username}
                </p>
            </div>
            <div style={{margin: 5, fontSize: 18}}>
                密码：
                <input value={password} onChange={passWordChange}/>
                <p style={{margin: 5, color: "blue"}}>
                    {password}
                </p>
            </div>
        </div>
    );
}

export default RactReduxPage;

/* 以下是类组件的使用方式 */
//
// @connect(
//     ({countState, registState}) => ({countState, registState}),
//     /* 以下是对象写法 */
//     // {
//     //     add: () => ({type: "ADD"}),
//     //     minus: () => ({type: "MINUS"}),
//     //
//     //     setUserName: (value) => ({type: "NAME", payload: value}),
//     //     setPassword: (value) => ({type: "PWD", payload: value}),
//     // }
//
//     /* 以下是函数写法 */
//     (dispatch) => {
//         let creators = {
//             add: () => ({type: "ADD"}),
//             minus: () => ({type: "MINUS"}),
//
//             setUserName: (value) => ({type: "NAME", payload: value}),
//             setPassword: (value) => ({type: "PWD", payload: value}),
//         }
//         creators = bindActionCreators(creators, dispatch)
//
//         return {
//             dispatch,
//             ...creators,
//         }
//     }
// )
// class RactReduxPage extends Component {
//     userNameChange = (e) => {
//         this.props.setUserName(e.target.value);
//     }
//     passWordChange = (e) => {
//         this.props.setPassword(e.target.value);
//     }
//
//     componentWillMount() {
//         console.log(this.props)
//     }
//
//     render() {
//         const {count} = this.props.countState;
//         const {username, password} = this.props.registState;
//
//         return (
//             <div>
//                 <h1>RactRedux Page</h1>
//                 <hr/>
//                 <h2>CountState</h2>
//                 <p style={{margin: 5, fontSize: 18}}>
//                     当前值
//                     <span style={{margin: 5, color: "blue"}}>
//                         {count}
//                     </span>
//                 </p>
//                 <Button type={"primary"} htmlType={"button"} style={{margin: 5}} onClick={this.props.add}>Count
//                     加1</Button>
//                 <Button type={"primary"} htmlType={"button"} style={{margin: 5}} onClick={this.props.minus}>Count
//                     减1</Button>
//                 <Button type={"primary"} htmlType={"button"} style={{margin: 5}} onClick={() => {
//                     this.props.dispatch({type: "ADD"})
//                 }}>Count
//                     dispatch 加1</Button>
//                 <h2>RegistState</h2>
//                 <div style={{margin: 5, fontSize: 18}}>
//                     用户名：
//                     <input value={username} onChange={this.userNameChange}/>
//                     <p style={{margin: 5, color: "blue"}}>
//                         {username}
//                     </p>
//                 </div>
//                 <div style={{margin: 5, fontSize: 18}}>
//                     密码：
//                     <input value={password} onChange={this.passWordChange}/>
//                     <p style={{margin: 5, color: "blue"}}>
//                         {password}
//                     </p>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default RactReduxPage;
