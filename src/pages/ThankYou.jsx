import { BreadCrumb, Btn, CartSummary, CheckoutList } from '..';
import { Link } from 'react-router-dom';
import { gift } from '../assets';
import { CartState } from '../data/Context';

const ThankYou = () => {
	const {state: {cart}} = CartState()
	return (
		<>
			<BreadCrumb name="Checkout page" backTo="/checkout" />
			<div className="container pb-36">
				<div className="lg:grid grid-cols-2">
					<div className="rounded-[2rem] shadow-md p-8 max-lg:px-2.5 max-lg:pt-2.5">
						<h2 className="lg:text-2xl text-center text-xl text-green-400">
							Thank you Branny Gravlin!
						</h2>
						<p className="lg:text-lg text-center text-base py-9 text-green-800">
							Order code: #243662H
						</p>
						<div className="grid gap-6 bg-green-200 p-5 rounded-2xl">
							<h2 className="lg:text-xl text-center text-lg text-green-400">
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
						<div className="grid gap-6">
							<div className="">
								<img src={gift} alt="thank you" />
							</div>
							<p>
								Your order has been confirmed. We accepted your
								order and we are getting it ready. A
								confirmation email has been sent to
								brannyG@gmail.com.{' '}
							</p>
							<div className="flex max-sm:flex-col sm:items-center gap-8 justify-between">
								<div className="text-[#0B3937 grid gap-3">
									<div className="">
										<h3 className="text-lg">
											Customer information
										</h3>
										<p>Name: Branny Gravlin</p>
									</div>
									<div className="">
										<h3 className="text-lg">
											Shipping address
										</h3>
										<p>
											Addision Best 8, Awesome Str. Ottawa
											OT BDG 1DF Canada.
										</p>
									</div>
									<div className="">
										<h3 className="text-lg">
											Payment method
										</h3>
										<p>Apply Pay</p>
									</div>
								</div>
								<p className="text-green-800">
									Your order is scheduled for delivery on{' '}
									<span className="font-bold">
										10th July, 2024
									</span>
									.{' '}
									<Link className="text-red-400">
										Click here
									</Link>{' '}
									to track order
								</p>
							</div>
						</div>
						<div className="pt-24 text-center">
							<Btn name="Continue shopping" to="/" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ThankYou;
