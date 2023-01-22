import React from 'react';
import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart';
import './MainView.scss';
const MainView = () => {
    const products = [
        {
          "name": "iPhone 14 Pro Max",
          "unit_price": 5000,
          "stock": 5,
          "type": "technology"
        },
        {
          "name": "Joystick",
          "unit_price": 1000,
          "stock": 1,
          "type": "technology"
        },
        {
          "name": "Roadmaster Bycicle",
          "unit_price": 1800,
          "stock": 1,
          "type": "sport"
        },
        {
          "name": "Bycicle",
          "unit_price": 200,
          "stock": 0,
          "type": "sport"
        },
        {
          "name": "Futball",
          "unit_price": 120,
          "stock": 6,
          "type": "sport"
        },
        {
          "name": "Shower Head",
          "unit_price": 120,
          "stock": 8,
          "type": "building"
        },
        {
          "name": "Kitchen Sink",
          "unit_price": 650,
          "stock": 10,
          "type": "building"
        },
        {
          "name": "Kitchen Cabinet",
          "unit_price": 900,
          "stock": 2,
          "type": "building"
        } 
      ]
    
    return (
        <div className='mainViewContainer'>
          <div className='productListContainer'>
            <ProductList products={products}/>
          </div>
          <div className='cartContainer'>
            <Cart products={products}/>
          </div>
        </div>
    )
}
export default MainView;