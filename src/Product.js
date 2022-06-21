import React from 'react';
import {useParams} from 'react-router-dom';

function Product(props) {
    const {productId} = useParams();
    return (
        <>
            <h1> Product </h1>
            <span>{productId} 번 Product</span>
        </>
    )
}

export default Product;