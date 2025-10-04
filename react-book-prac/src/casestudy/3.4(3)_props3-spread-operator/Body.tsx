type BodyProps = { 
    name: string; age: number; admin: boolean;
}


export default function Body(props: BodyProps) {  
    const {name, age, admin} = props;  // 안에서 구조 분해 할당

    return(
        <>
            <p>You are {name} and {age} years old. Admin option is {admin.toString()}.</p>
            <small>3.4(3)_props3-spread-operator</small>
        </>
    )
}