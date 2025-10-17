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
                <Route element={<RootLayout />}>                   
                    <Route path='/' element={<Home />} />          {/* Home에 메타데이터 반영 */}
                    <Route path='Service' element={<Service />}>            
                        <Route index element={<UpperMenu />} />             
                        <Route path='LowerMenu' element={<LowerMenu />} /> 
                    </ Route>
                </Route>                                                
            </Routes>
        </>
    )
}

