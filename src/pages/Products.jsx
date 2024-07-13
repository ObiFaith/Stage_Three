import { useEffect } from 'react';
import { BreadCrumb, Card, Category, Hero, Loader } from '..';
import { CartState } from '../data/Context';
import ApiHandler from '../hooks/ApiHandler';

const Products = () => {
	const { getProducts } = ApiHandler()
	useEffect(() => { getProducts() }, [])
	const { state: { products } } = CartState()

	return (
		<>
			<BreadCrumb name="Products" search={true} />
			<Hero />
			<div className="container pb-32">
				<Category />
				{products.length ? <div className="grid grid-cols-1 max-sm:justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 lg:grid-cols-4">
					{products.map(product => (
						<Card key={product.name} img={product.photos[0].url} price={product.current_price[0].NGN[0]} {...product} />
					))}
				</div> : <div className="grid place-items-center"> <Loader /> </div>}
			</div>
		</>
	);
};

export default Products;
