import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage(props) {
    //http://localhost:3000/product/3 주소창에 product 뒤에 상품 Id값 넣어줘야함 
    // 이유는 app.js에서  
    //<Route path='/product/:productId' element={ <ProductPage />}/>  productId= 1,2,3

    const params = useParams();// useParams
    const productId = parseInt(params.productId);
    //형변환해야한다 주소창에 들어있어서 문자열로 잡히기때문에 params해서
    //밑에 필터에 넣어줘야함

    console.log(params.productId);

    const products = useMemo( () => [
        {
            productId: 1,
            productName: "상품1",
        },
        {
            productId: 2,
            productName: "상품2",
        },
        {
            productId: 3,
            productName: "상품3",
        }
    ], []);

    const product = useMemo(() => products.filter(product => product.productId === productId)[0],[params.productId]); 

    return (
        <div>
            <h3>상품번호: { product?.productId }</h3>
            {/* ? 이객체가 존재하면 참조해라 */}
            <h3>상품명: { product?.productName }</h3>
        </div>
    );
}

export default ProductPage;