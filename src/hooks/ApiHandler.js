import axios from "axios";
import { CartState } from "../data/Context";

const ApiHandler = () => {
  const { dispatch } = CartState();

  const app_id = import.meta.env.VITE_APP_ID;
  const org_id = import.meta.env.VITE_ORG_ID;
  const api_key = import.meta.env.VITE_API_KEY;

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`/api/products?organization_id=${org_id}&reverse_sort=true&Appid=${app_id}&Apikey=${api_key}`);
      dispatch({ type: 'SET_PRODUCTS', payload: data.items });
    } catch (error) {
      console.log('error getting products', error);
    }
  };

  const getProdExtraInfo = async (id) => {
    try {
      const { data } = await axios.get(`/api/extrainfo/products/${id}`)
      const prodExtraInfo = data.reduce((acc, item) => {
        acc[item.key] = item.value
        return acc
      }, {})
      return prodExtraInfo
    } catch (error) {
      console.log('error getting a product', error);
    }
  }

  return { getProducts, getProdExtraInfo };
};

export default ApiHandler;
