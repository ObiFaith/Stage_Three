import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="container">
			<div className="py-32 text-center">
				<div>
					<h1 className="lg:text-8xl md:text-7xl text-6xl">
						404 Not Found
					</h1>
					<p>Your visited page not found. You may go
						<Link to='/product' className="underline underline-offset-2"> product page</Link>.
					</p>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
