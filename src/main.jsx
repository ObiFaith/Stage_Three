import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './index.css'
import 'react-toastify/ReactToastify.css'
import { Cart, NotFound, Checkout, Layout, Products, ThankYou, Product } from '.'
import Context from './data/Context';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Products />} />
			<Route path='products' element={<Products />} />
			<Route path='products/:product' element={<Product />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/checkout' element={<Checkout />} />
			<Route path='/thank-you' element={<ThankYou />} />
			<Route path='*' element={<NotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<Context>
    <RouterProvider router={router} />
	</Context>
  </React.StrictMode>,
)
