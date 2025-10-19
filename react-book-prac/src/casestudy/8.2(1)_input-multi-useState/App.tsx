import { useState } from 'react'; 

export default function App() {
    const [pw, setPw] = useState('');
    const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
    };
    const [bday, setBday] = useState('');
    const handleChangeBday = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBday(e.target.value);
    };
    return (
    <>
        <form>
            <h1>PW is {pw} | Date is {bday}</h1>
            <input type='password' value={pw} onChange={handleChangePw} />
            <input type='date' value={bday} onChange={handleChangeBday} />
        </form>
    </>
    ) 
}
