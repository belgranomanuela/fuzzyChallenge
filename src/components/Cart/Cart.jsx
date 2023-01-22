import React from 'react';

const Cart = ({ products }) => {
    return (
        <div>
            <h1>Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>{product.unit_price}</td>
                            <td>{product.unit_price * product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <p>Total: $ </p>
                <button>Create Order</button>
            </div>
        </div>
    );
};
export default Cart;