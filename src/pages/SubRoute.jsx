import React from 'react';// 중첩Route
import { Route, Routes } from 'react-router-dom';

function SubRoute(props) {

    return (
        <>
            <h1>서브 라우트</h1> 
            {/* 라우트 안에 라우트, */}
            <Routes>
                <Route path='/test1/:num' element={<h1>Test1</h1>}/>
                {/* http://localhost:3000/sub/test1 sub test1 안에 */}
                <Route path='/test2/:num' element={<h1>Test2</h1>}/>
                <Route path='/test3/:num' element={<h1>Test3</h1>}/>
            </Routes>
        </>
    );
}

export default SubRoute;