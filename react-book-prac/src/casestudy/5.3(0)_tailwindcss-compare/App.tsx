import { twMerge } from "tailwind-merge";

// 컴포넌트 외부에 있어야 한번만 생성됨 
const baseButtonStyles = 'rounded-[3px] border-2 border-[#bf4f74]';
const buttonStyles = {
    base: "py-[0.25em] px-[1em]",
    sizes: {
        sm: "py-[0.2em] px-[0.8em] text-sm",
        md: "py-[0.25em] px-[1em]",
        lg: "py-[0.3em] px-[1.2em] text-lg"
    }
}

export default function App() {
    const isRecommended = true;
    
    // 공통 스타일을 변수로 추출
    return(
        <>
            {/* inline CSS 사용 */}
            <button style={{
                background: 'transparent',
                borderRadius: '3px',
                border: '2px solid #bf4f74',
                padding: '0.25em 1em'
            }}>CLICK ME(by inline css)</button>

            {/* tailwind CSS 사용 */}
            <button className=
            'bg-transparent rounded-[3px] \
            border-2 border-[#bf4f74] \
            py-[0.25em] px-[1em]'
            >CLICK ME(by tailwindcss)</button>

            {/* twMerge 사용 - 조건 연산자 및 (뒤) 우선순위 활용 */}
            <button className={twMerge(  
            'bg-transparent', isRecommended && 'bg-green-200', 'rounded-[3px] \
            border-2 border-[#bf4f74] \
            py-[0.25em] px-[1em]'
            )}>CLICK ME(with twMerge)</button>   {/* ↖ 사실 조건부는 신뢰성 있게 하려면 clsx 써야 */}

            {/* 변수 사용 */}
            <button className={twMerge(
            'bg-transparent', isRecommended && 'bg-green-200',
            `${baseButtonStyles}  
            py-[0.25em] px-[1em]`   // ↖ {*/ 템플릿 리터럴``을 쓰던가 아니면 없이 ${}까지 떼고 하기*/}
            )}>CLICK ME(with variables)</button>

            {/* 변수 사용2 */}
            <button className={twMerge(
            'bg-transparent', isRecommended && 'bg-green-200',
            baseButtonStyles,  // 템플릿 리터럴 없이 콤마로
            buttonStyles.sizes['lg']  // 이번엔 변수 통한 추가 스타일까지 지정
            )}>CLICK ME(with variables2)</button>
        </>
    )
}