import React,{useState, useMemo}from "react";

export default function UseMemoPage(props) {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");

    const expensive = useMemo(() => {
        console.log("compute");
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum += i;
        }
        return sum;
    },[count]);

    return (
        <div>
            <h2>UseMemoPage</h2>
            <p>expensive:{expensive}</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>memo add</button>
            <input value={value} onChange={event => setValue(event.target.value)} />
        </div>
    );
}