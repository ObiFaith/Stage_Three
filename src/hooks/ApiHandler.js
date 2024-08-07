import axios from "axios";
import { CartState } from "../data/Context";
import { useState } from "react";

const ApiHandler = () => {
  const { dispatch } = CartState();

  const app_id = import.meta.env.VITE_APP_ID;
  const org_id = import.meta.env.VITE_ORG_ID;
  const api_key = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/products?organization_id=${org_id}&Appid=${app_id}&Apikey=${api_key}`);
      const products = data.items.sort((a, b) => new Date(a.date_created) - new Date(b.date_created));

      dispatch({ type: 'SET_PRODUCTS', payload: products });
    } catch (error) {
      console.log('error getting products', error);
      return [];
    }
  };

  const getProdExtraInfo = async (id) => {
    try {
      const { data } = await axios.get(`${apiUrl}/extrainfo/products/${id}`);
      const prodExtraInfo = data.reduce((acc, item) => {
        acc[item.key] = item.value;
        return acc;
      }, {});
      return prodExtraInfo;
    } catch (error) {
      console.log(`error getting a product extra info with ${id}`, error);
      return {};
    }
  };
  const [isProdInCart, setProdInCart] = useState(false)

  const addToCart = (product) => {
    if (!isProdInCart) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      setProdInCart(prev => !prev)
    }
  };

  return { getProducts, getProdExtraInfo, addToCart };
};

export default ApiHandler;
