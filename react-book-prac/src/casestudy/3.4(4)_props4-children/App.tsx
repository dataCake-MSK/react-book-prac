import Body from "./Body";

export default function App() {
    const userObj = {  // props를 객체로 넘기기
        name: "Minsung",
        age: 31,
        admin: true
    }

    return(
        <>
            <Body userObj={userObj}>Hello World!</Body>  {/*컴포넌트 태그 사이 children 추가*/}
        </>
    )
}