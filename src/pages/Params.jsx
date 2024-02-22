import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function Params(props) {//라우터 기능중에 중요하다.
    const [ params, setParams ] = useSearchParams();
    
    const data = params.get("data");// data 가 app 에있는 ?data = 이값을 가져온거임
    // ?가 나오면 get요청일떄의 파라메터 

    const data2 = params.get("data2"); 
    // 주소창에 http://localhost:3000/p?data=ddddddd&data2=rrr  **&data2=rrr**
    // key value &(파라메터) 이순서
    

    return (
        <div>
            <h3>{data}</h3>
            <h3>{data2}</h3>
        </div>
    );
}

export default Params;