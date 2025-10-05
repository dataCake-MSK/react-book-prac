type BodyProps = { 
    children: string; userObj: { name: string; age: number; admin: boolean; }; 
    clickHandler: () => void; clickHandler2: () => void; 
    clickHandler3: (poptext: string) => void; 
    clickHandler4: (e: React.MouseEvent<HTMLButtonElement>) => void;
    clickHandler5: (e: React.MouseEvent<HTMLButtonElement>, poptext: string) => void;
}


export default function Body(props: BodyProps) {
    const {children, userObj: { name, age, admin}, clickHandler, clickHandler2, clickHandler3, clickHandler4, clickHandler5} = props
    return(
        <>
            <p>You are {name} and {age} years old. Admin option is {admin.toString()}.</p>
            <p>Your comment: {children}</p>
            <button onClick={clickHandler}>TRY CLICK</button><br/>
            <button onClick={clickHandler2}>TRY CLICK2</button><br/>
            <button onClick={()=>clickHandler3("My custom pop up")}>TRY CLICK3</button><br/>
            <button onMouseDown={clickHandler4}>TRY RIGHT CLICK</button>
            <button onMouseDown={(e)=>clickHandler5(e, "My custom right pop up")}>TRY RIGHT CLICK2</button>

            <small>3.5(1)_event-parameter</small>
        </>
    )
}
// React.ChangeEvent<HTMLInputElement> → <input> 같은 입력 변화
// React.MouseEvent<HTMLButtonElement> → 버튼 클릭
// React.FormEvent<HTMLFormElement> → 폼 제출
// React.KeyboardEvent<HTMLInputElement> → 키보드 입력