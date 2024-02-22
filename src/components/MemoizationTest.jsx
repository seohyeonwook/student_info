import React, { useMemo, useState } from 'react';

function MemoizationTest({num1, num2}) {// 1,2 받는다 // 프롭스가 변경되면 렌더링이일어남

    const[ num3, setNum3 ] = useState(0);

    console.log("MeomoizationTest 렌더링");

    const tempNum1 = useMemo(() => {
        // 함수안에 함수 정의 안되기 때문에 function 안쓰고 const쓴다
        console.log("memo: num1");
        return num1 * 10;
    }, [num1]);
    // num1 만 클릭하는데 num2가 같이 렌더링 (재 계산)된다 그걸 방지하기 위해 Memoization
    // 매번 렌더링 할때마다 쓸모없는 애들까지 같이 렌더링 하지 않기 위해
    // 메모리 공간을 따로 할당 받는다 -> 메모리공간을 계속 차지함 - 한번쓰고 버릴거면 안 써도 된다
    // 계속 
    // 1. 값을 Memoization
    // 2. 함수를 Memoization
    const tempNum2 = useMemo(() => {
        console.log("memo: num2");
        return num2 + 10000;
    }, [num2]);
    // num2가 변했을때만 렌더링이 된다.

    const tempNum3 = useMemo(() => {
        console.log("memo: num3");
        return num3 + 20000;
    }, [num3]);

    const tempNum4 = useMemo(() => {
        console.log("memo: num4");
        return num1 + num2;
    }, [num1, num2]);
       // useMemo(()=>{},[])
    return (
        <>
            <button onClick={() => setNum3( num3 + 1 )}>num3증가</button>
            <h3>{tempNum1}</h3>
            <h3>{tempNum2}</h3>
            <h3>{tempNum3}</h3>
            <h3>{tempNum4}</h3>
        </>
    );
}

export default MemoizationTest;