import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Images 4 Crises",
	description: "Sophia Marinelli",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`bg-dark font-customBlack  antialiased`}>
				<main className=""> {children}</main>
			</body>
		</html>
	);
}
