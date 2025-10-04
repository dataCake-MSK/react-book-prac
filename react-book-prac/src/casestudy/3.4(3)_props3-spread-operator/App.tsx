import Body from "./Body";

export default function App() {
    const userObj = {  // props를 객체로 넘기기
        name: "Minsung",
        age: 31,
        admin: true
    }

    return(
        <>
            <Body {...userObj}></Body>  {/* name="Minsung", age={31}, admin={true} 넣는 효과*/}
        </>
    )
}