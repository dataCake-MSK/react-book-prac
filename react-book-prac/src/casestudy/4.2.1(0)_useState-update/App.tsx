import { useState } from "react";

// state => state ... 형식 통한 기존 값 기반 동작

export default function App() {
    const [count, setCount] = useState(0);  // useState는 항상 함수 안 첫번째

    const clickHandler = () => {
        setCount(count => count + 1)
    }
    
    return(
        <>
            <h2>Count is {count}</h2>
            <button onClick={clickHandler}>INCREMENT COUNT +1</button>
            <p>Updated: 251003 6:28 PM</p>
        </>
    )
}
