"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Intro } from "../utils/interface";

interface Props {
	intro: Intro;
}

const TextFlash = ({ intro }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [bgColor, setBgColor] = useState("bg-blue-600");
	const [textColor, setTextColor] = useState("text-cream");

	useEffect(() => {
		const colorInterval = setInterval(() => {
			setBgColor((prevColor) =>
				prevColor === "bg-blue" ? "bg-dark" : "bg-blue"
			);
		}, 25); // Change color every 250 milliseconds (1/4 of a second)

		const textColorInterval = setInterval(() => {
			setTextColor((prevColor) =>
				prevColor === "text-cream" ? "text-white" : "text-cream"
			);
		}, 15);

		const textInterval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % intro.fragments.length);
		}, 1000); // Change fragment every 2 seconds

		return () => {
			clearInterval(colorInterval); // Clean up color interval
			clearInterval(textInterval);
			clearInterval(textColorInterval);
		};
	}, [intro.fragments.length]);
	return (
		<div
			className={`w-full h-screen ${bgColor} flex justify-center items-center text-xl text-center font-customBlack ${textColor}`}
			key={intro._id}>
			<div className="w-3/4">
				<p className="uppercase drop-shadow-3xl">
					{intro.fragments[currentIndex]?.fragment}
				</p>
			</div>
		</div>
	);
};

export default TextFlash;
