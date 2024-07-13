import { categories } from '../data/constant';

const Category = () => {
	return (
		<div className="flex py-5 max-md:flex-col my-14 items-start rounded-[20px] gap-6 justify-between bg-green-200 shadow">
			<h2 className="lg:text-2xl text-xl text-red-400 max-md:self-center">
				Featured categories
			</h2>
			<div className="flex flex-wrap gap-x-6 gap-y-2">
				{categories.map((category, index) => (
					<p
						key={index}
						className={`lg:text-lg font-mono text-green-400 hover:text-green-800 font-semibold ${
							!index ? 'border-b border-red-400' : ''
						}`}
					>
						{category}
					</p>
				))}
			</div>
		</div>
	);
};

export default Category;
