import React from 'react';
import { useProducts } from '../../contexts/ProductsContext';

const Cart = () => {
  const { cart, getCart } = useProducts();
  return (
    <div>
      {cart && cart.product ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Count</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://svetofor.info/images/detailed/156/smartfon-apple-iphone-xs-max-64-gb-ram-4-gb-dual-sim-space-gray-1.jpg"
                    alt=""
                    style={{ width: '50px' }}
                  />
                </td>
                <td>Iphone</td>
                <td>2000</td>
                <td>
                  <input type="number" value="1" />
                </td>
                <td>2000</td>
              </tr>
            </tbody>
          </table>
          <h4>Total: $$$</h4>
          <button>Оплатить</button>
        </div>
      ) : (
        <h1> Cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
