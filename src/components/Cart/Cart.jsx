import React from 'react';

const Cart = ({ cart }) => {
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
                    {cart.map((x) => cart[x] ? (
                        <tr>
                            <td>{cart[x]}</td>
                            <td>$</td>
                            <td>$</td>
                        </tr>
                    ) : null)
                    }
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