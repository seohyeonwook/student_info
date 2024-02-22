import React, { useCallback } from 'react';

function MemoizationTest2({ num1, num2 }) {
    // 함수 주소는 서로 다르니까 값을 넣지말고 함수 주소 자체를 넣어야한다 = useCallback
    // 앞에 use가 붙으면 훅 함수
    // useMemo와 useCallback구분할줄 알아야한다
    const fx1 = useCallback(() => { 
        return num1 + 10000;
    }, [num1]);// []dependancy 가 바뀌면 return만 다시 재정의 해라
    // const fx1 = useCallback(() => { 
    //    return num1 + 10000; // 뜻 num1+10000 값을 리턴해서 fx1에 저장하고 그걸 밑에 fx1()에 보내서 화면에 출력한다

    const fx2 = useCallback(() => {
        return num2 + 20000;
    }, [num2]);

    

    return (
        <div>
            <h3>{fx1()}</h3>
            <h3>{fx2()}</h3>
        </div>
    );
}

export default MemoizationTest2;

// 터미널 열고 +  버튼 눌러서 새 터미널 연다 npm i(install) react-router-dom
// 설치 됐는지 확인하는 방법 package.json 에서 확인한다
//indexjs가서 app  부모요소로 BrowserRouter 
// 그다음에 import { BrowserRouter } from 'react-router-dom';  import해줘야함
// 그다음에 appjs 가서 해둔거 봐