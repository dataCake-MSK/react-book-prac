import { cn } from "../../lib/utils"  // @: alias for /src

export default function Button( {className, deactivated = false, children}:{ children: string; className: string; deactivated: boolean }) {
    // const [deactivated, setDeactivated] = useState(false);  // 이제는 props로 받으니까

    return(
        <>
            <button className={cn("bg-blue-500 py-2 px-4 rounded", className, deactivated && "bg-gray-500")}>{children}</button>
        </>
    )
}