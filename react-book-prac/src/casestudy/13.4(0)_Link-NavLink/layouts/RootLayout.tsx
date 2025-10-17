import { Link, NavLink, Outlet } from 'react-router'
export default function RootLayout () {
    return(
        <>
            <header> Top Text </header>

            <nav>
                <Link to='/'> ☞Home☜ </Link>  {/* ← URL 일치 여부 (isActive) 확인 안 함*/}

                <NavLink to='/Service' 
                    className={ ({isActive}) => (isActive ? 'active' : '') }> ☞Service☜ </NavLink>  {/* ← 동적 클래스/스타일 변경*/}
                <NavLink to='/Service/LowerMenu'
                    className={ ({isActive}) => (isActive ? 'text-red-500' : 'text-gray-500') }> ☞Service+LowerMenu☜ </NavLink>
            </nav>    

            <Outlet />
            <footer> Bottom Text </footer>
        </>
    )
}