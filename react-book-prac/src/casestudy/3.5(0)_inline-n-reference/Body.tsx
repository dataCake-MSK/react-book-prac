type BodyProps = { 
    children: string; userObj: { name: string; age: number; admin: boolean; }; clickHandler: () => void; 
    clickHandler2: () => void; clickHandler3: (poptext: string) => void;
}


export default function Body(props: BodyProps) {
    const {children, userObj: { name, age, admin}, clickHandler, clickHandler2, clickHandler3} = props
    return(
        <>
            <p>You are {name} and {age} years old. Admin option is {admin.toString()}.</p>
            <p>Your comment: {children}</p>
            <button onClick={clickHandler}>TRY CLICK</button><br/>
            <button onClick={clickHandler2}>TRY CLICK2</button><br/>
            <button onClick={()=>clickHandler3("My custom pop up")}>TRY CLICK3</button><br/>

            <small>3.5(0)_inline-n-reference</small>
        </>
    )
}