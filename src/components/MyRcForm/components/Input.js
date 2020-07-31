import React from "react";

export default function (props) {
    return (
        <div style={ {padding:5} }>
            <input {...props}/>
        </div>
    );
}