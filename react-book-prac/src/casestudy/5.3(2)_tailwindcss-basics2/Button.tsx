import { cn } from "../../lib/utils"  // @: alias for /src

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {  // onClick, type="submit", disabled, 등 나머지 HTML 속성들 자유롭게 사용 가능 → 유연한 버튼 사용
  deactivated?: boolean;   // 추가 커스텀 prop  // children은 react에서 자동으로 관리해서 생략
};

export default function Button( {
    className, 
    deactivated = false, 
    children, 
    ...props  // onClick, type="submit", disabled, 등 나머지 HTML 속성들 자유롭게 사용 가능
    }:ButtonProps) {

    return(
        <>
            <button 
            {...props}  // onClick 넘겼음
            className={cn(
                "bg-blue-500 py-2 px-4 rounded", 
                className, 
                {"bg-gray-500": deactivated}  // 객체 형식으로도 작성 가능, && 보다는 객체 형식 또는 삼항 연산자(condition에 true/false 제외 입력 대비) 쓰는 것을 추천
            )}>{children}</button>
        </>
    )
}

