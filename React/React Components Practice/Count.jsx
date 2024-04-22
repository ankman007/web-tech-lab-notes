import React, { useState } from "react";

function Counter() {
    const styles = {
        color: 'white',
        backgroundColor: 'hsl(200, 100%, 50%)',
        padding: '10px 20px',
        margin: '30px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '20px',
    };

    const [count, setCount] = useState(0);

    function increaseCounter(){
        setCount(count + 1);
    }

    function decreaseCounter(){
        setCount(count - 1);
    }

    function setToZero(){
        setCount(0)
    }

    function randamaize(){
        let rand = Math.floor(Math.random()*10);
        setCount(rand)
    }
    return (
        <>
            <p>Count: {count}</p>
            <button style={styles} onClick={increaseCounter}>Increment</button>
            <button style={styles} onClick={decreaseCounter}>Decrement</button>
            <button style={styles} onClick={setToZero}>Set To Zero</button>
            <button style={styles} onClick={randamaize}>Randomaize</button>
        </>
    )
}

export default Counter 