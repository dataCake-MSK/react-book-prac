import Body from "./Body";

export default function App() {
    const userObj = {  // props를 객체로 넘기기
        name: "Minsung",
        age: 31,
        admin: true
    }
    // 나중에는 버튼 또는 컴포넌트에 동작을 넣어서 추상화
    const clickHandler = () => {
        alert("POP!")
    }
    const clickHandler2 = (poptext:string) => {  // “실행할 때 그 문자열을 넣어서 alert 하겠다”는 함수 객체를 Body에 넘긴 거예요.
        alert(poptext)                           // 그래서 Body가 받을 때는 이미 “매개변수가 없는 함수”가 되어 있습니다.

    }
    const clickHandler3 = (poptext:string) => {
        alert(poptext)
    }
    const clickHandler4 = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.button == 2){
            alert("Mouse right click detected")
        }
    }
    const clickHandler5 = (e: React.MouseEvent<HTMLButtonElement>, poptext:string) => {
        if (e.button == 2){
            e.preventDefault()
            alert(poptext)
        }
    }

    return(
        <>
            <Body userObj={userObj} 
                clickHandler={clickHandler} 
                clickHandler2={()=>{clickHandler2("My custom pop up")}}
                clickHandler3={clickHandler3}
                clickHandler4={clickHandler4}  // 함수 참조할 때 자동으로 이벤트 객체 파라미터 주입
                clickHandler5={(e)=>clickHandler5(e, "My custom right pop up")}>Hello World!</Body>  {/* 아래 방식도 가능 */}
                {/* clickHandler5={clickHandler5}>Hello World!</Body>  컴포넌트 태그 사이 children 추가 */}
        </>
    )
}