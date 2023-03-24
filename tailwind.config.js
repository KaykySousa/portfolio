/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"var(--font-sans-roboto)",
					"Roboto",
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},
	plugins: [],
}
