<<<<<<< HEAD
import React from 'react';
import { useProducts } from '../../contexts/ProductsContext';

const Cart = () => {
  const { cart, getCart } = useProducts();
  return (
    <div>
      {cart && cart.product ? (
        <div>
=======
import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { calcTotalPrice } from "../../utils/calc";

const Cart = () => {
  const { cart, getCart } = useProducts();
  useEffect(() => {
    getCart();
  }, []);
  console.log(cart, "here");
  return (
    <div>
      {cart && cart.products ? (
        <>
>>>>>>> c3fd94efd0b93d2e59985de06a42c2af4368a2c3
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
<<<<<<< HEAD
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
=======
              {cart.products.map((item) => (
                <tr>
                  <td>
                    <img
                      src={item.product.image}
                      alt=""
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td>{item.product.title}</td>
                  <td>{item.product.price}</td>
                  <td>
                    <input type="number" value={item.count} />
                  </td>
                  <td>{item.subPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total: {calcTotalPrice(cart.products)}</h4>
          <button>Оплатить</button>
        </>
      ) : (
        <h1>Cart is empty</h1>
>>>>>>> c3fd94efd0b93d2e59985de06a42c2af4368a2c3
      )}
    </div>
  );
};

export default Cart;
