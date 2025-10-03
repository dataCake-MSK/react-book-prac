import { useState} from "react";

// state => state ... 형식 통한 기존 값 기반 동작

export default function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState<null | string>(null);

    const clickHandler = () => {
        setCount(count => count + 1)
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    
    return(
        <>
            <h1>Hi, {name}</h1>
            <h2>Count is {count}</h2>

            <button onClick={clickHandler}>INCREMENT COUNT +1</button>
            <form>
                <input 
                    type="text"
                    placeholder="CHANGE NAME"
                    onChange={changeHandler}
                />
            </form>
            <p>Updated: 251003 6:28 PM</p>
        </>
    )
}
