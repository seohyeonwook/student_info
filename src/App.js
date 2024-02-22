
import { Link, Route, Routes } from 'react-router-dom';
import Memoization from './pages/Memoization';
import StudentArrayPage from './pages/StudentArrayPage';
import StudentArrayPage2 from './pages/StudentArrayPage2';
import StudentArrayPage3 from './pages/StudentArrayPage3';
import StudentPage from './pages/StudentPage';
import Params from './pages/Params';
import { useState } from 'react';
import SearchPage from './pages/SearchPage';
import ProductPage from './pages/ProductPage';
import SubRoute from './pages/SubRoute';

function App() {// appjs의 역할
  const [ value, setValue ] = useState("");

  return(
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <ul>
        <Link to="/memoization"><li>메모이제이션</li></Link> 
        {/* 페이지 이동 */}
        <Link to="/st"><li>학생정보</li></Link>
        <Link to="/sta1"><li>학생들정보1</li></Link>
        <Link to="/sta3"><li>학생들정보3</li></Link>
        <Link to={`/p?data=${ value }`}><li>파람스</li></Link>
        <Link to={`/books?bookName=${ value }`}><li>도서검색</li></Link>
        {/* jsx는 그냥 {}안에 넣어도 되지만 app은 문자열로 넣는거라 ` 사용 */}
        {/* 주소를 통해서 파라미터를 넘길 수 있다 */}
        
      </ul>
      <Routes>
        <Route path='/memoization' element={ <Memoization />}/>
        <Route path='/st' element={ <StudentPage />}/>
        <Route path='/sta1' element={ <StudentArrayPage />}/>
        <Route path='/sta3' element={ <StudentArrayPage3 />}/>
        <Route path='/p' element={ <Params />}/>
        <Route path='/books' element={ <SearchPage />}/>
        <Route path='/product/:productId' element={ <ProductPage />}/>
        <Route path='/sub/*' element={ <SubRoute/>}/>
        {/* productId key값 */}
      </Routes>
    </>
    // 경로 등록하는 작업
    // 주소창에 3000뒤에 /memoization
  )
}

export default App;
