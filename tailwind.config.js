/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			poppins: ["\"Poppins\", sans-serif"],
		},
		fontSize: {
			xxs: "0.65rem",
			xs: "0.75rem",
			sm: "0.875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
		},
		extend: {
			gridTemplateRows: {
				layout: "auto 50px auto 50px auto",
			},
			colors: {
				"amali-green": "#42B0A8",
				"amali-steel-blue": "#1B2850",
				"amali-blue": "#00CFE8",
				"amali-grey": "#637381",
				"amali-bg": "#FAFBFE",
			},
			screens: {
				xxl: "1280px",
				xxxl: "1440px",
				"2xl": "1440px",
			},
		},
	},
	plugins: [],
};
