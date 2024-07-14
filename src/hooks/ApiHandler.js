import axios from "axios";
import { CartState } from "../data/Context";

const ApiHandler = () => {
  const { state: { cart }, dispatch } = CartState();

  const app_id = import.meta.env.VITE_APP_ID;
  const org_id = import.meta.env.VITE_ORG_ID;
  const api_key = import.meta.env.VITE_API_KEY;

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`/api/products?organization_id=${org_id}&Appid=${app_id}&Apikey=${api_key}`);
      const products = data.items.sort((a, b) => new Date(a.date_created) - new Date(b.date_created));
      const productsWithQty = products.map(product => { return {...product, qty: 1}})

      dispatch({ type: 'SET_PRODUCTS', payload: productsWithQty });
      localStorage.setItem('products', JSON.stringify(productsWithQty));
    } catch (error) {
      console.log('error getting products', error);
    }
  };

  const getProdExtraInfo = async (id) => {
    try {
      const { data } = await axios.get(`/api/extrainfo/products/${id}`);
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

  const addToCart = (product) => {
    if (!cart.find(product.id)) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      console.log(cart)
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  return { getProducts, getProdExtraInfo, addToCart };
};

export default ApiHandler;