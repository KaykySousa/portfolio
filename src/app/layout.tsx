import { Roboto } from "next/font/google"
import "./globals.css"

export const metadata = {
	title: "Portfólio | Kayky de Sousa",
	description: "Portfólio | Kayky de Sousa",
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
