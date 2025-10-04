import { useState} from "react";

// state => state ... 형식 통한 기존 값 기반 동작

export default function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState<string>("");  // null 넣으면 아래 value에서 경고
    const [draftName, setDraftName] = useState<string>(""); 

    const clickHandler = () => {
        setCount(count => count + 1)
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  // 새로고침 방지
        setName(draftName);
        console.log("Submitted name:", name);
    }
    // const changeHandler = (e) => {  // 함수 참조 방식
    //     setDraftName(e.target.value)
    // }

    return(
        <>
            <h1>Hi, {name}</h1>
            <h2>Count is {count}</h2>

            <button onClick={clickHandler}>INCREMENT COUNT +1</button>

            <form onSubmit={submitHandler}>  {/* submit 때 한번 트리거 */}
                <input 
                    type="text"
                    value={draftName}  // 표시 값, 그래서 onChange랑 연계
                    placeholder="NAME HERE"
                    onChange={(e) => setDraftName(e.target.value)}  // change 마다 트리거
                    // onChange={changeHandler}  // 함수 참조 방식, 이벤트 자동 매개변수 주입
                />
                <button type="submit">SUBMIT NAME</button>
            </form>

            <p>Updated: 251003 6:28 PM</p>
        </>
    )
}

// React.ChangeEvent<HTMLInputElement> → <input> 같은 입력 변화
// React.MouseEvent<HTMLButtonElement> → 버튼 클릭
// React.FormEvent<HTMLFormElement> → 폼 제출
// React.KeyboardEvent<HTMLInputElement> → 키보드 입력