import { BreadCrumb, Btn, CartSummary, CheckoutForm, CheckoutList } from '..';
import { CartState } from '../data/Context';

const Checkout = () => {
	const {state: {cart}} = CartState()
	return (
		<>
			<BreadCrumb name="Checkout page" backTo="/product" />
			<div className="container pb-36">
				<div className="lg:grid grid-cols-2">
					<div className="rounded-[2rem] shadow-md p-8 max-lg:px-2.5 max-lg:pt-2.5">
						<div className="grid gap-6 bg-green-200 p-5 rounded-2xl">
							<h2 className="lg:text-2xl text-center text-xl text-green-400">
								Order summary
							</h2>
							{cart.map(prod => (
								<CheckoutList key={prod.name} {...prod} />
							))}
						</div>
						<CartSummary
							shippingFee="$50.00"
							className="justify-center py-9"
						/>
						<p className="text-red-400 text-center">
							You enjoyed the free shipping bonus for this order
						</p>
					</div>
					<div className="px-8 max-lg:pt-20">
						<div className="text-center">
							<div>
								{' '}
								<Btn name="Pay with GPay" />{' '}
							</div>
							<div className="pt-4 pb-8">
								{' '}
								<Btn name="Pay with Apple" />{' '}
							</div>
							<div className="flex gap-3 *:w-full *:text-[#707373] items-center justify-center">
								<hr />
								<p className="min-w-32">or pay with card</p>
								<hr />
							</div>
						</div>
						<CheckoutForm />
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
