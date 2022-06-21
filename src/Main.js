import React from 'react';
import {Link} from 'react-router-dom';

function Main(props) {
    return (
        <>
            <h1> 메인 페이지 </h1>
            <ul>
                <Link to="/product/1"><li>1번</li></Link>
                <Link to="/product/2"><li>2번</li></Link>
            </ul>
        </>
    )
}

export default Main;