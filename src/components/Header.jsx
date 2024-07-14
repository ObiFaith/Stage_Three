import { headerIcons, icon_menu, icon_close } from '../assets';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '..';
import { useState } from 'react';
import { navLinks } from '../data/constant';
import { CartState } from '../data/Context';

const Header = () => {
	const [isOpen, setOpen] = useState(false);
	const {state: { cart }} = CartState()

	return (
		<header className="py-10 shadow-sm">
			<div className="container flex items-center justify-between">
				<Logo />
				<nav className="flex max-md:hidden gap-3 lg:gap-6 text-green-400 font-semibold">
					{navLinks.map(navItem => (
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'underline underline-offset-2 hover:text-green-500'
									: 'hover:underline hover:text-green-500 hover:underline-offset-2'
							}
							key={navItem.name}
							to={navItem.to}
						>
							{navItem.name}
						</NavLink>
					))}
				</nav>
				<div className="flex cursor-pointer gap-1.5 lg:gap-3 items-center">
					{headerIcons.map((icon, index) => (
						<Link className='relative' to={index === 2 ? '/cart' : ''} key={index}>
							<img
								src={icon}
								alt={icon.split('/').pop().replace('.svg', '')}
							/>
							{(cart.length > 0 && index === 2) &&
								<span className='absolute -top-1.5 -right-1.5 text-sm font-semibold text-white-400 bg-green-400 px-1.5 rounded-full'>
									{cart.length}
								</span>
							}
						</Link>
					))}
					<div
						onClick={() => setOpen(!isOpen)}
						className="md:hidden ms-2 transition-all"
					>
						<img
							src={isOpen ? icon_close : icon_menu}
							alt="menu icon"
						/>
					</div>
				</div>
			</div>
			{isOpen && (
				<nav className="flex cursor-pointer transition-all flex-col items-center pt-6 gap-3 text-green-400 font-semibold">
					{navLinks.map(navItem => (
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'underline underline-offset-2 hover:text-green-500'
									: 'hover:underline hover:text-green-500 hover:underline-offset-2'
							}
							key={navItem.name}
							to={navItem.to}
						>
							{navItem.name}
						</NavLink>
					))}
				</nav>
			)}
		</header>
	);
};

export default Header;
