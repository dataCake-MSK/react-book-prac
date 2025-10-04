type BodyProps = { 
    children: string; userObj: { name: string; age: number; admin: boolean; }
}


export default function Body(props: BodyProps) {
    const {children, userObj: { name, age, admin}} = props
    return(
        <>
            <p>You are {name} and {age} years old. Admin option is {admin.toString()}.</p>
            <p>Your comment: {children}</p>
            <small>3.4(4)_props4-children</small>
        </>
    )
}