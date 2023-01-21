import React from 'react';

//generate a jsx file to display a list of products
const ProductList = ({ products }) => {
    return (
        <ul>
        {products.map(product => (
            <li key={product.id}>{product.name}</li>
        ))}
        </ul>
    );
    };

export default ProductList;