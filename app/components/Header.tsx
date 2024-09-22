import React from "react";

const Header = () => {
	return (
		<div className="flex h-screen w-full text-cream flex flex-row justify-center items-center uppercase">
			<div className="flex flex-row gap-2 border-t-2">
				<h1 className="sm:text-xl lg:text-6xl">Images</h1>
				<h1 className="sm:text-body lg:text-3xl">for</h1>
				<h1 className="sm:text-xl lg:text-6xl">Crises</h1>
			</div>
		</div>
	);
};

export default Header;
