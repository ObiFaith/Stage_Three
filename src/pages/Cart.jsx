import { BreadCrumb, CartList, CartSummary, Recommended } from '..';
import { cartProds } from '../data/constant';

const Cart = () => {
	return (
		<>
			<BreadCrumb name="Your Cart" search={true} />
			<div>
				<div className="grid justify-items-center pt-5 pb-16">
					<div className="bg-[#DEF1F0] inline-block rounded-2xl text-green-800 py-2.5 px-10 text-lg lg:text-xl text-center">
						<h3>Enjoy Free Shipping on Orders Over $50</h3>
						<h3>
							You have a 10% discount. Checkout now to redeem it.
						</h3>
					</div>
				</div>
				<div className="container">
					<div className="hidden pb-10 lg:flex justify-between lg:ml-12">
						{['', 'Description', 'Quantity', 'Price', 'Total'].map(
							item => (
								<p
									className="text-xl text-green-600 mx-auto"
									key={item}
								>
									{item}
								</p>
							)
						)}
					</div>
					<div className="grid gap-10">
						{cartProds.map(prod => (
							<CartList key={prod.name} {...prod} />
						))}
					</div>
					<div className="flex py-5 gap-3">
						<input type="checkbox" name="" id="" />
						<p className="text-sm text-red-400">Apply discount</p>
					</div>
					<CartSummary btn={true} />
					<Recommended />
				</div>
			</div>
		</>
	);
};

export default Cart;
