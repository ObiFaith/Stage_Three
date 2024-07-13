import { BreadCrumb, Card, Category, Hero } from '..';
import { products } from '../data/constant';

const Products = () => {
	return (
		<>
			<BreadCrumb name="Products" search={true} />
			<Hero />
			<div className="container pb-32">
				<Category />
				<div className="grid grid-cols-1 max-sm:justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 lg:grid-cols-4">
					{products.map(product => (
						<Card key={product.name} {...product} />
					))}
				</div>
			</div>
		</>
	);
};

export default Products;
