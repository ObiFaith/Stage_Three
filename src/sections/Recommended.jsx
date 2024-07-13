import { products } from '../data/constant';
import { Card } from '..';

const Recommended = () => {
	const randomProd = products.sort(() => 0.5 - Math.random());
	return (
		<div className="py-36">
			<p className="text-green-600 font-semibold text-lg pb-5 lg:text-xl">
				People also buy
			</p>
			<div className="grid grid-cols-1 max-sm:justify-items-center sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4">
				{randomProd.map(
					(prod, index) => index < 4 && <Card key={index} {...prod} />
				)}
			</div>
		</div>
	);
};

export default Recommended;
