"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Intro } from "../utils/interface";

interface Props {
	intro: Intro;
}

const TextFlash = ({ intro }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [bgColor, setBgColor] = useState("bg-blue");

	useEffect(() => {
		const colorInterval = setInterval(() => {
			setBgColor((prevColor) =>
				prevColor === "bg-blue" ? "bg-dark" : "bg-blue"
			);
		}, 50); // Change color every 250 milliseconds (1/4 of a second)

		const textInterval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % intro.fragments.length);
		}, 1000); // Change fragment every 2 seconds

		return () => {
			clearInterval(colorInterval); // Clean up color interval
			clearInterval(textInterval);
		};
	}, [intro.fragments.length]);
	return (
		<div
			className={`w-full h-screen overflow-hidden ${bgColor} flex justify-center items-center text-xl text-center font-customBlack text-yellow`}
			key={intro._id}>
			<div className="w-3/4">
				<p className="uppercase drop-shadow-1xl">
					{intro.fragments[currentIndex]?.fragment}
				</p>
			</div>
		</div>
	);
};

export default TextFlash;
