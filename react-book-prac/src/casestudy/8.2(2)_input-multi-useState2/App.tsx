import { useState } from 'react'; 

export default function App() {
    const [userInfo, setUserInfo] = useState({pw: "", bday: "", cmt: ""})
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;  // ← 구조 분해 | 앞서서는 e.target.value만 사용
        setUserInfo((prev)=>({...prev, [name]:value}));  // ←↖ 책에서는: setUserInfo((prev)=>({...prev, [e.target.name]:e.target.value}));
    }               // ↑ prev 자리 뭘 넣든 기존 상태, 하지만 관례적 표현
                              // ↑ pw: "", bday: "", pw: "1234"가 되서 뒤 pw로 overwrite

    return (
        <>
            <form>
                <h1>PW is {userInfo.pw} | Birthday is {userInfo.bday} | Comment is {userInfo.cmt}</h1>  
                <input type='password' name='pw' value={userInfo.pw} onChange={handleChange} />  {/* name 속성을 넣어야 e.target 안에 name이 들어감 */}
                <input type='date' name='bday' value={userInfo.bday} onChange={handleChange} />
                <textarea name='cmt' value={userInfo.cmt} onChange={handleChange} style={{height:"120px", border: "2px solid black"}} />  {/*  <textarea>는 HTML에서 원래 type 속성을 지원하지 않음 */}
            </form>
            <small> 8.2(2)_input-multi-useState2 </small>
        </>
    ) 
}

// () => { return { a: 1 }; }
// 는 다음과 동일
// () => ({ a: 1 }) 


  // const [pw, setPw] = useState('');
  // const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
  // setPw(e.target.value);
  // };
  // const [bday, setBday] = useState('');
  // const handleChangeBday = (e: React.ChangeEvent<HTMLInputElement>) => {
  // setBday(e.target.value);
  // };
  // return (
  // <>
  //     <form>
  //         <h1>PW is {pw} | Date is {bday}</h1>
  //         <input type='password' value={pw} onChange={handleChangePw} />
  //         <input type='date' value={bday} onChange={handleChangeBday} />
  //     </form>
  // </>
  // ) 