import React from "react";
import Link from "next/link";

const Back = () => {
	return (
		<div className="w-full p-8 fixed flex flex-row justify-center gap-2 top-0 text-center text-cream uppercase">
			<Link href={`/`}>Back</Link>
		</div>
	);
};

export default Back;
