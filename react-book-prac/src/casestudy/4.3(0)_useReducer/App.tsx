import { useReducer } from "react";

function countReducer(state:number, action: {type:string}) {   // 순수 함수이므로 유닛 테스트 용이
    switch (action.type) {
        case 'INCREMENT':
            return state+1;  // useState 같이 state => state + 1 같은 함수형 업데이트를 사용하지 않습니다.
        case 'DECREMENT':
            return state-1;
        case 'RESET':
            return 0;
        default:
            throw new Error(`Unhandled action type!!!: ${action.type}`); // 컴포넌트 크래시 되서 렌더링 아무것도 안 됨
    }
}

// ↑ 상태 변경 로직을 컴포넌트 내부에서 분리해내고 필요하면 아예 다른 파일로도 분리 가능

export default function App() {
    const [count, countDispatch] = useReducer(countReducer, 0);

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={()=>countDispatch({type:'INCREMENT'})}>+1</button>  {/* useState에서의 setCount(count + 1) 식의 로직은 추상화되어 코드 구조 명확해짐*/}
            <button onClick={()=>countDispatch({type:'DECREMENT'})}>-1</button>
            <button onClick={()=>countDispatch({type:'RESET'})}>RESET</button>
            <button onClick={()=>countDispatch({type:'WRONGTYPE'})}>TRY</button>
        </>
    )
}