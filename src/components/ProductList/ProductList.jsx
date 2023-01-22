import React from 'react';
import './ProductList.scss';


const ProductList = ({ products }) => {
    const productDetails = products.map((product) => {
        return (
            <div key={product.id} className='productContainer'>
                 <img src="https://i.picsum.photos/id/331/200/200.jpg?hmac=otNh1Xx2hk_Tng_SFa60ayddRGORvWnDKJ2wG1l0KIE" alt='' />
                <div>
                    <p>{product.name}</p>
                    <p>{product.unit_price}</p>
                    <p>{product.stock}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        );
    });

    return productDetails
    };

export default ProductList;