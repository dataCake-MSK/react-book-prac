import { useState } from 'react'; 

export default function App() {
    const [inValue, setInValue] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInValue(e.target.value);
    };
    return (
    <>
        <form>
            <h1>Input is {inValue}</h1>
            <input type='text' value="FIXED" onChange={handleChange} />
        </form>
    </>
    ) 
}
