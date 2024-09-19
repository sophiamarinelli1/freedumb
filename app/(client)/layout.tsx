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
			<body className={`bg-blue font-customBlack overflow-hidden antialiased`}>
				<main className=""> {children}</main>
			</body>
		</html>
	);
}
