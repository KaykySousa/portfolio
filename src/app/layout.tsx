import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
	title: "Portfólio | Kayky de Sousa",
	description: "Portfólio | Kayky de Sousa",
	icons: {
		icon: {
			url: "/favicon.svg",
			type: "image/svg",
		},
		shortcut: {
			url: "/favicon.svg",
			type: "image/svg",
		},
	},
}

const roboto = Roboto({
	weight: ["400", "500", "700", "900"],
	subsets: ["latin"],
	variable: "--font-sans-roboto",
	display: "swap",
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR" className={`${roboto.variable}`}>
			<body>{children}</body>
		</html>
	)
}
