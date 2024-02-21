import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage(props) {// rsf
    const[ studentList, setStudentList] = useState([]) ;   //상태 배열 상태 인풋상태.

    const[ inputValue, setInputValue] = useState({ //상태가 바뀌면 렌더링이 다시 일어난다
        id: "",
        name: "",
        age: "",
        address: ""
    });//5

    const [ updateId, setupdateId ] = useState(0);

    const staticId = useRef(0);
    // staticId.current 값이 변해도 렌더링x
    // 재렌더링이 발생해도 초기화되지 않음


    useEffect(() => {
        console.log(studentList);
    }, [studentList]);

    const handleInputChange = (e) => {//4
        const{name ,value} = e.target;
        setInputValue({//5
            ...inputValue,// inputValue상태가 계속 바뀜 value넣어주면
            [name]: value
        });

    }

    const handleAddClick = () => {
        // console.log(staticId.current += 1);

        const student ={
            ...inputValue,
            id: staticId.current += 1
        };

        setStudentList([...studentList, student]);
    }

    const handleDeleteClick = (id) => {
        setStudentList([...studentList.filter(student => student.id != id)]);// 아닌녀석들만 배열에 넣음 => 삭제
    }

    const handleUpdateClick = (id) => {
        setupdateId(id);
        setInputValue(studentList.filter(student => student.id === id)[0]);//배열이라 인덱스 
    }

    const handleUpdateSubmitClick = () => {
        
        const findIndex = studentList.indexOf(studentList.filter(student => student.id === updateId)[0]);// ===은 하나니까 무조건 0번
        const updateStudentList = [...studentList];

        updateStudentList[findIndex] = inputValue;

        setStudentList(updateStudentList);//바뀐 자기 자신을 set해준다
        handleCancelClick();
    }

    const handleCancelClick = () => {
        setupdateId(0);
        setInputValue({ 
            id: "",
            name: "",
            age: "",
            address: ""
        });
    }

    return (
        <div>
            <div>
                <input type="text" name='id'disabled={true} value={inputValue.id} placeholder='ID' />
                <input type="text" name='name' onChange={handleInputChange} value ={inputValue.name} placeholder='이름' />
                <input type="text" name='age' onChange={handleInputChange} value ={inputValue.age} placeholder='나이' />
                <input type="text" name='address' onChange={handleInputChange} value ={inputValue.address} placeholder='주소' />
                <button onClick={handleAddClick}>추가</button>
                {/* 1 추가하면 배열에 쌓이고 리스트로 보인다 거기서 추가하고 삭제하고 순서. */}
            </div>
            
            <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>이름</th>
                    <th>나이</th>
                    <th>주소</th>
                </tr>
            </thead>
            <tbody>
                {studentList.map(student =>{
                        return<tr key= {student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                            <td>
                                {//표현식 안이라서 삼항연산자 가능
                                    updateId !== student.id 
                                    ? <button onClick={() => {handleUpdateClick(student.id);}}>수정</button>
                                    : <button onClick={handleUpdateSubmitClick}>확인</button>
                                }
                            </td>

                            <td>0.
                                {//표현식 안이라서 삼항연산자 가능
                                    updateId !== student.id 
                                    ? <button onClick={() => {handleDeleteClick(student.id);}}>삭제</button>
                                    : <button onClick={handleCancelClick}>취소</button>
                                }
                            </td>
                        </tr>//중괄호 열면 리턴 꼭 있어야함
                        //() =>{} 함수정의
                    })}
            </tbody>
            </table>
            
        </div>
    );
}

export default StudentArrayPage;