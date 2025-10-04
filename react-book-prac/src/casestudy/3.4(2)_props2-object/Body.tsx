type BodyProps = { 
    userObj: {  // App 쪽 컴포넌트 hover 활용
        name: string;
        age: number;
        admin: boolean;
    }   
}


export default function Body({userObj:{name, age, admin}}: BodyProps) {  // 구조분해할당:Type
    return(
        <>
            <p>You are {name} and {age} years old. Admin option is {admin.toString()}.</p>
        </>
    )
}