/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Poppins, sans-serif"],
			display: ["Bropella", "Georgia", "ui-serif"],
		},
		extend: {
			screens: {
				"h-short": { raw: "(max-height: 780px)" },
				"w-short": { raw: "(max-width: 385px)" },
			},
			backgroundImage: {
				"cloud-01": "url(/images/cloud01.png)",
				"cloud-02": "url(/images/cloud02.png)",
				"cloud-03": "url(/images/cloud03.png)",
				"cloud-04": "url(/images/cloud04.png)",
			},
			colors: {
				"accent-darker": "#ea580c",
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#2CADA7",
					secondary: "#FFC76F",
					accent: "#FF781B",
					neutral: "#3d4451",
					"base-100": "#ffffff",

					"--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
					"--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
					"--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
					"--animation-btn": "0.25s", // duration of animation when you click on button
					"--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
					"--btn-focus-scale": "0.95", // scale transform of button when you focus on it
					"--border-btn": "1px", // border width of buttons
					"--tab-border": "1px", // border width of tabs
					"--tab-radius": "0.5rem", // border radius of tabs
				},
			},
		], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		lightTheme: "mytheme",
		darkTheme: "mytheme", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	},
};
