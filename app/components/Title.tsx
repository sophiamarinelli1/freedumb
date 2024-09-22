import Link from "next/link";
import React from "react";
import { Intro } from "../utils/interface";

interface Props {
	intro: Intro;
}

const Title = ({ intro }: Props) => {
	return (
		<Link
			className={` flex justify-center items-center sm:text-xl lg:text-6xl sm:h-8 lg:h-auto uppercase text-center font-customBlack text-yellow mx-2 `}
			href={`/intro/${intro?.slug.current}`}>
			<div>{intro.title}</div>
		</Link>
	);
};

export default Title;
