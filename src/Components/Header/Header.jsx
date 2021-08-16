import React from 'react';
import './Header.scss'
import { useLocation } from 'react-router';

function Header(props){
    const {userName} = props;
    const useQuery = () => new URLSearchParams(useLocation().search);
    let query = useQuery();
    const year = query.get('year');
    const month = query.get('month');
    const day = query.get('day');
    const location = useLocation();
    const isMemo = location.pathname.includes('memoPage');
    const isSignUp = location.pathname.includes('signup');
    location.day = day;
    location.isToday = `${year}-${month}-${day}`;
    location.isUSerName = userName;
    // console.log(location);
    return(
        <>
            <header className="header">
                {isMemo ? <h1>{year}년{month}월{day}일</h1> : userName ? <h1>{userName}의 온라인 메모장</h1> : isSignUp ? <h1>회원가입</h1> : <h1>온라인 메모장</h1>}
            </header>
        </>
    );
}
export default Header;