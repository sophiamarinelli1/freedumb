import React from "react";
import Link from "next/link";

const Back = () => {
	return (
		<Link
			href={`/`}
			className="w-full p-8 fixed flex flex-row justify-center gap-2 top-0 text-center text-cream uppercase">
			<div>Back</div>
		</Link>
	);
};

export default Back;
