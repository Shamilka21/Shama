<<<<<<< HEAD
import React, { createContext, useContext, useReducer } from 'react';
import { $api } from '../service/axios-config';
import { calcSubPrice, calcTotalPrice } from '../utils/calc';
=======
import React, { createContext, useContext, useReducer } from "react";
import { $api } from "../service/axios-config";
import { calcSubPrice, calcTotalPrice } from "../utils/calc";
>>>>>>> c3fd94efd0b93d2e59985de06a42c2af4368a2c3
import {
  ADD_AND_DELETE_PRODUCT_IN_CART,
  GET_CART,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from "../utils/constants";
import {
  productError,
  productLoading,
  productSuccess,
} from "./actions/productDetailsActions";
import {
  productsError,
  productsLoading,
  productsSuccess,
} from "./actions/productsActions";

const productsContext = createContext();

export const useProducts = () => useContext(productsContext);

const initialState = {
  loading: false,
  error: null,
  products: [],
  productDetails: {
    loading: false,
    error: null,
    product: null,
  },
<<<<<<< HEAD
  cartData: JSON.parse(localStorage.getItem('cart'))
    ? JSON.parse(localStorage.getItem('cart')).products.length
=======
  cartData: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).products.length
>>>>>>> c3fd94efd0b93d2e59985de06a42c2af4368a2c3
    : 0,
  cart: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LOADING:
      return { ...state, loading: true };

    case GET_PRODUCTS_ERROR:
      return { ...state, loading: false, products: [], error: action.payload };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };

    case GET_PRODUCT_LOADING:
      return {
        ...state,
        productDetails: { ...state.productDetails, loading: true },
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productDetails: {
          ...state.productDetails,
          loading: false,
          error: null,
          product: action.payload,
        },
      };

    case GET_PRODUCT_ERROR:
      return {
        ...state,
        productDetails: {
          ...state.productDetails,
          loading: false,
          error: action.payload,
          product: null,
        },
      };

    case ADD_AND_DELETE_PRODUCT_IN_CART:
      return {
        ...state,
        cartData: action.payload,
      };

    case GET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};

const ProductsContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch(productsLoading());
    try {
      const { data } = await $api();
      setTimeout(() => {
        dispatch(productsSuccess(data));
      }, 2000);
    } catch (error) {
      console.log(error.message);
      dispatch(productsError(error.message));
    }
  };

  const fetchOneProduct = async (id) => {
    dispatch(productLoading());
    try {
      const { data } = await $api(`/${id}`);
      dispatch(productSuccess(data));
      //   console.log(data);
      //   console.log(state);
    } catch (error) {
      console.log(error.message);
      dispatch(productError(error.message));
    }
  };

  const addAndDeleteProductInCart = (product) => {
<<<<<<< HEAD
    let cart = JSON.parse(localStorage.getItem('cart'));
=======
    let cart = JSON.parse(localStorage.getItem("cart"));
>>>>>>> c3fd94efd0b93d2e59985de06a42c2af4368a2c3
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      count: 1,
      subPrice: 0,
      product: product,
    };
    newProduct.subPrice = calcSubPrice(newProduct);

<<<<<<< HEAD
    // DELETE FROM CART
    let newCart = cart.products.filter(
      (item) => item.product.id === product.id
    );

=======
    //DELETE FROM CART
    let newCart = cart.products.filter(
      (item) => item.product.id === product.id
    );
>>>>>>> c3fd94efd0b93d2e59985de06a42c2af4368a2c3
    if (newCart.length > 0) {
      cart.products = cart.products.filter(
        (item) => item.product.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }

    cart.totalPrice = calcTotalPrice(cart.products);
<<<<<<< HEAD
    localStorage.setItem('cart', JSON.stringify(cart));
=======
    localStorage.setItem("cart", JSON.stringify(cart));
>>>>>>> c3fd94efd0b93d2e59985de06a42c2af4368a2c3

    dispatch({
      type: ADD_AND_DELETE_PRODUCT_IN_CART,
      payload: cart.products.length,
    });
  };

  const getCart = () => {
<<<<<<< HEAD
    let cartFromLS = JSON.parse(localStorage.getItem('cart'));
=======
    let cartFromLS = JSON.parse(localStorage.getItem("cart"));
>>>>>>> c3fd94efd0b93d2e59985de06a42c2af4368a2c3
    dispatch({
      type: GET_CART,
      payload: cartFromLS,
    });
  };

  const values = {
    products: state.products,
    loading: state.loading,
    error: state.error,
    productDetailsLoading: state.productDetails.loading,
    productDetails: state.productDetails.product,
    productDetailsError: state.productDetails.error,
    cartData: state.cartData,
    cart: state.cart,
    fetchProducts,
    fetchOneProduct,
    addAndDeleteProductInCart,
    getCart,
  };

  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContext;
