import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	root: "./playground",
	server: {
		port: 3000,
	},
	css: {
		postcss: "./postcss.config.mjs"
	}
});
