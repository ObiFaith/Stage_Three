import { footerIcons } from '../assets';
import { footerLinks } from '../data/constant';
import { Button, Logo } from '..';

const Footer = () => {
	return (
		<footer className="bg-[#FEFFFF]">
			<div className="container flex gap-6 gap-y-9 flex-wrap justify-between py-10">
				<div>
					<Logo />
					<div className="pt-6">
						<p className="text-green-500 pb-3 text-xl">
							Join our mailing list
						</p>
						<div className="flex flex-col gap-5">
							<input
								className="border-b border-red-400"
								type="email"
								placeholder="example@gmail.com"
							/>
							<Button name="Submit" />
						</div>
					</div>
				</div>
				<div className="flex gap-14">
					{footerLinks.map(item => (
						<div key={item.name}>
							<h3 className="text-lg text-green-800 pb-4">
								{item.name}
							</h3>
							<div className="flex flex-col gap-2">
								{item.links.map(link => (
									<p
										className="hover:underline text-green-800 hover:text-green-500 hover:underline-offset-2 cursor-pointer"
										key={link}
									>
										{link}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
				<div>
					<div className="flex gap-4 items-center">
						{footerIcons.map((icon, index) => (
							<div key={index}>
								<img
									src={icon}
									alt={icon
										.split('/')
										.pop()
										.replace('.png', '')}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="text-center text-lg bg-green-400 py-6 text-green-200">
				{new Date().getFullYear()} MivaMart All right reserved.
			</div>
		</footer>
	);
};

export default Footer;
