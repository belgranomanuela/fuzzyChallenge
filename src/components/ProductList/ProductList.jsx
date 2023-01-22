import React from 'react';
import './ProductList.scss';


const ProductList = ({ products }) => {
    const [cart, setCart] = React.useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
    }
    const productDetails = products.map((product) => {
        return (
            <div key={product.id} className='productContainer'>
                <div className='content'>
                    <img src="https://i.picsum.photos/id/331/200/200.jpg?hmac=otNh1Xx2hk_Tng_SFa60ayddRGORvWnDKJ2wG1l0KIE" alt={product.name} />
                    <p>{product.name}</p>
                    <div className='bottomProduct'>
                        <p>{product.stock}</p>
                        <button onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    });

    return productDetails
    };

export default ProductList;