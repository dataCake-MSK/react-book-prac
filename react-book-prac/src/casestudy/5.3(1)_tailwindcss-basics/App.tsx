import Button from "./Button";

export default function App() {
    // 공통 스타일을 변수로 추출
    console.log("App Loaded")
    return(
        <>
            <small>chk</small>
            <main className="flex justify-center p-24">
                <Button className="p-5" deactivated={true}> MYBUTTON </Button>
            </main>
        </>
    )
}