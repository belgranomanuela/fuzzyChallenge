import React from 'react';
import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart';
import './MainView.scss';
import ProductItemsList from '../../products.json';

const MainView = () => {
    const [products, setProducts] = React.useState(ProductItemsList.products);
    const [cartProducts, setCartProducts] = React.useState([]);
  
    const addProductToCart = (product) => {
      const newCartProducts = product.stock > 0 ? cartProducts.concat(product) : cartProducts;
      setCartProducts(newCartProducts);
    };
    return (
        <div className='mainViewContainer'>
          <div className='productListContainer'>
            <ProductList products={products} onAddToCart={addProductToCart}/>
          </div>
          <div className='cartContainer'>
            <Cart products={cartProducts}/>
          </div>
        </div>
    )
}
export default MainView;