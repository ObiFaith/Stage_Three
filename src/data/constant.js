import { cart_img_1, cart_img_2, cart_img_3, cart_img_4 } from '../assets';

export const navLinks = [
	{ name: 'Home', to: '/home' },
	{ name: 'Products', to: '/' },
	{ name: 'Best Sellers', to: '/sellers' },
	{ name: 'Catalog', to: '/catalog' },
	{ name: 'Contact Us', to: '/contact' },
];

export const footerLinks = [
	{
		name: 'Company',
		links: [
			'Our Story',
			'Products',
			'Terms and Conditions',
			'Privacy Policy',
		],
	},
	{ name: 'Social media', links: ['Facebook', 'Instagram', 'X (Twitter)'] },
	{ name: 'Support', links: ['Live chat', 'Contact us'] },
];

export const categories = [
	'Dinnerware',
	'Mugs & Teapots',
	'Home Decor',
	'Vases',
	'Jewelry',
	'Platters',
	'Lanterns',
];

export const cartProds = [
	{
		img: cart_img_1,
		price: 60.0,
		name: 'Sensei ceramic',
		available: 35,
		colors: ['#0E605B'],
		isNew: false,
		qty: 2,
	},
	{
		img: cart_img_2,
		price: 15.0,
		name: 'Koncafe earrings',
		available: 55,
		colors: ['#F5F5F5', '#FFE27B'],
		isNew: false,
		qty: 2,
	},
	{
		img: cart_img_3,
		price: 450.0,
		name: 'Vase de la vase',
		available: 15,
		colors: ['#F5F5F5'],
		isNew: false,
		qty: 1,
	},
	{
		img: cart_img_4,
		price: 250.0,
		name: 'Tender petals',
		available: 32,
		colors: ['#F5F5F5', '#0E605B', '#A91688'],
		isNew: false,
		qty: 1,
	},
];
