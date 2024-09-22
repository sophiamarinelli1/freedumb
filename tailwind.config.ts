import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			customBlack: ["ABCArizonaMix-Bold-Trial"],
			customBold: ["HelveticaNeueLTStd-Bd"],
		},
		colors: {
			white: "#ffffff",
			cream: "#e1e1e1",
			blue: "#0C24AD",
			dark: "#08176A",
			yellow: "#EFFF92",
		},
		extend: {
			fontSize: {
				actionS: ["12px", { lineHeight: "14px", letterSpacing: "0.05em" }],
				actionM: ["14px", { lineHeight: "16px", letterSpacing: "0.05em" }],
				actionL: ["24px", { lineHeight: "24px", letterSpacing: "0.02em" }],
				note: ["12px", { lineHeight: "14px", letterSpacing: "0.04em" }],
				body: ["18px", { lineHeight: "18px", letterSpacing: "0.00em" }],
				xl: ["32px", { lineHeight: "28px", letterSpacing: "0.0em" }],
				"2xl": ["32px", { lineHeight: "32px", letterSpacing: "-0.01em" }],
				"3xl": ["48px", { lineHeight: "48px", letterSpacing: "-0.01em" }],
				"4xl": ["64px", { lineHeight: "64px", letterSpacing: "-0.02em" }],
				"6xl": ["96px", { lineHeight: "92px", letterSpacing: "-0.0em" }],
				"7xl": ["212px", { lineHeight: "212px", letterSpacing: "-0.02em" }],
			},
			screens: {
				sm: "400px",
				md: "900px",
				lg: "1200px",
				xl: "1440px",
			},
			dropShadow: {
				"3xl": "0 2px 2px rgba(0, 0, 0, 1)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
