import React from "react";
import Link from "next/link";

const Back = () => {
	return (
		<Link
			href={`/`}
			className="w-full font-customBold mt-32 fixed flex flex-row justify-center gap-2 top-0 text-center text-cream uppercase z-[50]">
			<div>Back</div>
		</Link>
	);
};

export default Back;
