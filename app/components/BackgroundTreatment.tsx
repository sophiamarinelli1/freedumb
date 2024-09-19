// components/BackgroundSwitcher.tsx (Client Component)
"use client";

import { useState, useEffect } from "react";
export default function BackgroundSwitcher() {
	const [bgColor, setBgColor] = useState("bg-blue");

	useEffect(() => {
		const colorInterval = setInterval(() => {
			setBgColor((prevColor) =>
				prevColor === "bg-blue" ? "bg-dark" : "bg-blue"
			);
		}, 25);

		return () => {
			clearInterval(colorInterval);
		};
	}, []);

	return (
		<div className={`${bgColor} w-full h-screen fixed top-0 z-[-50]`}></div>
	);
}
