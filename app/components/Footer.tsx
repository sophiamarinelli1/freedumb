import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="w-full p-8 fixed flex flex-row justify-center gap-2 bottom-0 text-center text-cream">
			<p>© 2024</p> <Link href={`https://sophiamarinelli.com`}>ScM</Link>
		</footer>
	);
};

export default Footer;
