import React from "react"
import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>Button clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </>
    )
}

export default Counter;
