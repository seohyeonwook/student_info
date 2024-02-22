import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchPage(props) {
    const [ params ] = useSearchParams();
    const bookName = params.get("bookName");// 정의를 해준다 밑에 매개변수 코드가 길어져서 
    const categoryName = params.get("categoryName");


        const categories = useMemo(()=>[ //[]면 배열
            {
            categoryId: 1,
            categoryName: "역사"
            },
            {
            categoryId: 2,
            categoryName: "문학"
            },
            {
            categoryId: 3,
            categoryName: "컴퓨터"
            },    
        ], []);


    const books = useMemo(()=>[
        {
            bookId: 1,
            bookName: "java 역사",
            categoryId: 1
        },
        {
            bookId: 2,
            bookName: "컴퓨터 역사",
            categoryId: 1
        },
        {
            bookId: 3,
            bookName: "소설 역사",
            categoryId: 1
        },
        {
            bookId: 4,
            bookName: "문학이란",
            categoryId: 2
        },
        {
            bookId: 5,
            bookName: "역사를 말하다",
            categoryId: 2
        },
        {
            bookId: 6,
            bookName: "컴퓨터 기초",
            categoryId: 3
        },
        {
            bookId: 7,
            bookName: "java 기초 프로그래밍",
            categoryId: 3
        }

    ].filter(book => book.bookName.includes(bookName) //책들을 가지고올건데 책들의 이름에 매개변수 북네임이 있으면 (참) 새로운 배열에 담아라
    // books에 매개변수로book을 정해준거다
        || book.categoryId === categories.filter(category => category.categoryName === categoryName)[0]?.categoryId), 
        // 또는 책에 카테고리 아이디가 매개변수로 보내준 카테고리네임과 카테고리에 들어있는 카테고리 이름과 같으면...
        // ?
    [bookName, categoryName]);// 둘중에 한나라도 값이 바뀌면 다시 랜더링 해라

    


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>책번호</th>
                        <th>책제목</th>
                        <th>카테고리번호</th>
                        <th>카테고리명</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.bookId}>
                            {/* 맵이 key 랑 value값 필요하니까 아래는 value만 있으니까 */}
                            <td>{book.bookId}</td>
                            <td>{book.bookName}</td>
                            <td>{book.categoryId}</td>
                            <td>{categories.filter(category => category.categoryId === book.categoryId)[0].categoryName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchPage;