import { Outlet } from 'react-router'
export default function RootLayout () {
    return(
        <>
            <header> Top Text </header>            
            <Outlet />
            <footer> Bottom Text </footer>
        </>
    )
}