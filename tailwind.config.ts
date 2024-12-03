import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px"
	},
	screens: {
		sm: "640px",
		md: "768",
		lg: "960",
		xl: "1200"
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
		colors: {
			primary: "#1c1c22",
			accent: {
				DEFAULT: "#00ff99",
				hover: "#00e187"
			}
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
