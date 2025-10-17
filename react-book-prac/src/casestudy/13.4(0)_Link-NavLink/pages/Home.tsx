export default function Home () {
    return (
        <>
            <h1>Hello, this is home.</h1>
            {/* ↓ 메타데이터 태그를 바로 JSX 안에 넣을 수 있음 */}
            <title>React 19 | HOME </title>  {/* 탭 제목 */}
            <link rel='author' href='https://www.sucoding.kr' />  {/* head 태그 삽입할 외부 리소스 용이하게 불러오기 */}
            <meta name='keywords' content='코딩 자율학습' />
            <script async src='(스크립트 주소)'></script>  {/* 비동기 방식 외부 스크립트 호출  */}
        </>
    )
}

// 개발자 도구 들어가서 반영 확인