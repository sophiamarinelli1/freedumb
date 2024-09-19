"use client";

import Link from "next/link";
import React from "react";
import { Intro } from "../utils/interface";
import { useState, useEffect } from "react";

interface Props {
	intro: Intro;
}

const Title = ({ intro }: Props) => {
	const [textColor, setTextColor] = useState("text-cream");

	useEffect(() => {
		const textColorInterval = setInterval(() => {
			setTextColor((prevColor) =>
				prevColor === "text-cream" ? "text-white" : "text-cream"
			);
		}, 15);

		return () => {
			clearInterval(textColorInterval);
		};
	}, []);
	return (
		<Link
			className={` flex justify-center items-center border-b-2 sm:text-xl lg:text-6xl sm:h-12 lg:h-auto uppercase text-center font-customBlack ${textColor} mx-2 `}
			href={`/intro/${intro?.slug.current}`}>
			<div>{intro.title}</div>
		</Link>
	);
};

export default Title;
