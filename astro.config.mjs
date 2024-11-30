// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import purgecss from "astro-purgecss";
import "dotenv/config";

// https://astro.build/config
export default defineConfig({
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
	experimental: {
		serverIslands: true,
	},
	output: "hybrid",
	integrations: [
		svelte(),
		tailwind(),
		sitemap(),
		purgecss({
			content: ["./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
			keyframes: false,
			variables: true,
			fontFace: true,
			safelist: {
				deep: [/(^\[\&|^.+:\[\&)/, /dropdown/, /dropdown-content/],
				greedy: [/astro/, /dropdown/],
			},
			extractors: [
				{
					extractor: (content) => {
						const match = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
						// @ts-ignore
						if (match?.includes("dropdown"))
							console.log(match.filter((el) => el.includes("dropdown")));
						return match;
					},
					extensions: ["astro", "html", "svelte"],
				},
			],
		}),
	],
	adapter: node({
		mode: "standalone",
	}),
});
