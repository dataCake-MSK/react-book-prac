import Body from "./Body";

export default function App() {
    const userObj = {  // props를 객체로 넘기기
        name: "Minsung",
        age: 31,
        admin: true
    }
    const clickHandler = () => {
        alert("POP!")
    }
    const clickHandler2 = (poptext:string) => {  // “실행할 때 그 문자열을 넣어서 alert 하겠다”는 함수 객체를 Body에 넘긴 거예요.
        alert(poptext)                           // 그래서 Body가 받을 때는 이미 “매개변수가 없는 함수”가 되어 있습니다.

    }

    const clickHandler3 = (poptext:string) => {
        alert(poptext)
    }

    return(
        <>
            <Body userObj={userObj} 
                clickHandler={clickHandler} 
                clickHandler2={()=>{clickHandler2("My custom pop up")}}
                clickHandler3={clickHandler3}>Hello World!</Body>  {/*컴포넌트 태그 사이 children 추가*/}
        </>
    )
}