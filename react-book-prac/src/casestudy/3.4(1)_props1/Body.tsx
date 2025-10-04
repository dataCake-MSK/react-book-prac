export default function Body({userObj:{name, age, admin}}:  // 구조분해 할당
    { userObj: { name: string; age: number; admin: boolean; }; }) {  // App 쪽 컴포넌트 hover 활용
    return(
        <>
            <p>You are {name} and {age} years old. Admin option is {admin.toString()}.</p>
        </>
    )
}