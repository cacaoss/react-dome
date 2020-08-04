import React, {Component, PureComponent, useCallback, useEffect, useMemo, useState} from "react";

export default function TestPage() {
    return (
        <div>
            <h1>Test Page</h1>
            <hr/>


        </div>
    );
}

function fun1(param) {
    console.log("f1", param);
    return param
}

function fun2(param) {
    console.log("f2", param);
    return param
}

function fun3(param) {
    console.log("f3", param);
    return param
}

function fun4(param) {
    console.log("f4", param);
    return param
}

function reduceFunctionTest(arr) {
    let result = arr.reduce(
        (a, b) => (...args) => b(a(...args))
    );

    return result;
}

const arr = [fun1, fun2, fun3, fun4]
const result = reduceFunctionTest(arr)("omg");