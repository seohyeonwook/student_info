import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage2(props) {
    const[ scoreList, setScoreList ] =useState([]) ;

    const[ inputValue, setInputValue] =useState({
        id: "",
        name: "",
        score: ""

    });

    const [ updateId, setupdateId ] = useState(0);


    const staticId = useRef(0);

    useEffect(() => {
        console.log(scoreList);
    }, [scoreList]);

    const handleInputChange = (e) =>{
        const{name,value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    }

    const handleAddClick = () => {
        const score = {
            ...inputValue,
            id: staticId.current += 1
        };

        setScoreList([...scoreList,score]);
        setInputValue({
            id: "",
            name: "",
            score: ""
        });
    }

    const handleDeleteClick = (id) => {
        setScoreList([...scoreList.filter(score => score.id != id)]);
    }

    const handleUpdateClick = (id) => {
        setupdateId(id);
        setInputValue
    }
   
    // const [ scoreData, setScoreData ] = useState ({
    //     total: 0,
    //     avg:0
    // });

    return (
        <div>
            <div>
                <input type="text" name='id' disabled={true} value={inputValue.id} />
                <input type="text" name='name' onChange={handleInputChange} value={inputValue.name} placeholder='이름'/>
                <input type="text" name='score' onChange={handleInputChange} value={inputValue.score} placeholder='점수'/>
                <button onClick={handleAddClick}>추가</button>
                
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                </thead>
                <tbody>
                    {scoreList.map(score =>{
                        return<tr key= {score.id}>
                            <td>{score.id}</td>
                            <td>{score.name}</td>
                            <td>{score.score}</td>
                            <td>
                                <button>수정</button>
                            </td>

                            <td>
                                <button onClick={() => handleDeleteClick(score.id)}>삭제</button>
                            </td>
                        </tr>
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>총점</th>
                        <th colSpan={2}>100</th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th colSpan={2}>100</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StudentArrayPage2;