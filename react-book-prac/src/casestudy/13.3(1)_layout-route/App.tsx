import {Route, Routes} from 'react-router';
import Home from './pages/Home';
import Service from './pages/Service';
import UpperMenu from './pages/UpperMenu';
import LowerMenu from './pages/LowerMenu';
import RootLayout from './layouts/RootLayout';

export default function App () {
    return (
        <>
            <Routes>  
                <Route element={<RootLayout />}>                   {/* ← path 없는 layout route 추가 */}
                    <Route path='/' element={<Home />} />          {/* ←↙ layout route 하위 모든 경로에 RootLayout 렌더링*/}
                    <Route path='Service' element={<Service />}>            
                        <Route index element={<UpperMenu />} />             
                        <Route path='LowerMenu' element={<LowerMenu />} /> 
                    </ Route>
                </Route>                                                
            </Routes>
        </>
    )
}

// 현재 경로
// 1. /
// 2. /service
// 3. /service/lowermenu