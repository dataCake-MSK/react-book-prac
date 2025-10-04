import Body from "./Body";

export default function App() {
    const userObj = {  // 객체로 넘기기
        name: "Minsung",
        age: 31,
        admin: true
    }
    return(
        <>
            <Body userObj={userObj}></Body>
        </>
    )
}