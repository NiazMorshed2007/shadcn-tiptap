import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Shadcn Tiptap Search & Replace",
	description:
		"An custom extension for tiptap editor to search and replace text. Made with shadcn/ui components",
};

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<ThemeProvider attribute="class">
					<TooltipProvider>
						<Header />
						{children}
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
