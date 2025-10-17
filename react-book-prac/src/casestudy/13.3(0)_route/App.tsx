import {Route, Routes} from 'react-router';
import Home from './pages/Home';
import Service from './pages/Service';
import UpperMenu from './pages/UpperMenu';
import LowerMenu from './pages/LowerMenu';

export default function App () {
    return (
        <>
            <Routes>  {/* route들을 감싸줌 */}
                <Route path='/' element={<Home />} />
                <Route path='Service' element={<Service />}>            {/* ← 부모, 항상 렌더링 | 자식 컴포넌트 렌더링될 곳을 위해 Outlet 추가 필요 */}
                    <Route index element={<UpperMenu />} />             {/* ← 기본 자식 컴포넌트, index로 지정, 하나만 지정 가능 */}
                    <Route path='LowerMenu' element={<LowerMenu />} />  {/* ← /LowerMenu까지 붙이면 렌더링되는 자식 컴포넌트 */}
                </ Route>                                               
            </Routes>
        </>
    )
}

// localhost:5173/Service하면 아래 렌더링 ↓
// My Service
// UpperMenu: Engineering | Consulting | Teaching

// localhost:5173/Service/LowerMenu하면 아래 렌더링 ↓
// My Service
// LowerMenu: Contact | Home
