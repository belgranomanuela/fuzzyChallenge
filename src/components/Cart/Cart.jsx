import React from 'react';

const Cart = ({ products }) => {
    const calcTotalOrderPrice = (products) => {
        let totalPrice = 0;

        products.forEach((p) => {
            totalPrice = totalPrice + p.unit_price * p.stock;
        });

        return totalPrice;
    };
    console.log(products)
    //map the cart a create a new json with a structure like this: {
    // "cartProducts": [
    //     {
    //       "product_name": "product_name",
    //       "quantity": quantity,
    //       "price": price,
    //       "type": "type"
    //     }
  
    //   ],
    //   "orderPrice": orderPrice
    // }
    const createOrder = () => {
        let newJson = {
            "cartProducts": [],
            "orderPrice": 0
        }
        products.forEach((p) => {
            newJson.cartProducts.push({
                "product_name": p.name,
                "quantity": p.stock,
                "price": p.unit_price,
                "type": p.type
            })
        })
        newJson.orderPrice = calcTotalOrderPrice(products)
        return newJson
    }
    console.log(createOrder())

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
                {
                        products.map((p) =>
                            (
                                <tr key={p.id}>
                                    <td>{p.name}</td>
                                    <td>1   </td>
                                    <td>${p.unit_price}</td>
                                    <td>${p.unit_price * p.stock}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
            <div>
                <p>Total: ${calcTotalOrderPrice(products)}</p>
                <button onClick={createOrder}>Create Order</button>
            </div>
        </div>
    );
};
export default Cart;