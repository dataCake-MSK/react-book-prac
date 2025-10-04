type BodyProps = { 
    children: string; userObj: { name: string; age: number; admin: boolean; }; clickHandler: () => void;
}


export default function Body(props: BodyProps) {
    const {children, userObj: { name, age, admin}, clickHandler} = props
    return(
        <>
            <p>You are {name} and {age} years old. Admin option is {admin.toString()}.</p>
            <p>Your comment: {children}</p>
            <button onClick={clickHandler}>TRY CLICK</button><br/>
            <small>3.4(5)_props5-function</small>
        </>
    )
}