import { useMemo } from 'react';
import { Card } from '..';
import { CartState } from '../data/Context';

const Recommended = ({title}) => {
	const { state: { products } } = CartState()
	const randomProd = useMemo(() => products.sort(() => 0.5 - Math.random()), [products]);
	return (
		<div className="py-36">
			<p className="text-green-600 font-semibold text-lg pb-5 lg:text-xl">{title}</p>
			<div className="grid grid-cols-1 max-sm:justify-items-center sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4">
				{randomProd.map(
					(prod, index) => index < 4 && <Card key={prod.name} img={prod.photos[0].url} price={prod.current_price[0].NGN[0]} {...prod} />
				)}
			</div>
		</div>
	);
};

export default Recommended;
