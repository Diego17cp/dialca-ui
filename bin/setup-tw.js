#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const contentPath = `./node_modules/dialca-ui/dist/**/*.{js,mjs,ts,jsx,tsx,mjs}`;

function detectTailwindVersion() {
	try {
		const packageJson = JSON.parse(
			fs.readFileSync("./package.json", "utf-8")
		);
		const deps = {
			...packageJson.dependencies,
			...packageJson.devDependencies,
		};

		if (deps.tailwindcss && (deps.tailwindcss.startsWith("^4") || deps.tailwindcss.startsWith("4"))) {
			return "v4";
		}
		return "v3";
	} catch {
		return "v3"; // default
	}
}

function setupTailwindV3() {
	const configPath = "./tailwind.config.js";

	if (!fs.existsSync(configPath)) {
		fs.writeFileSync(
			configPath,
			`module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "${contentPath}"
  ],
  theme: { extend: {} },
  plugins: [],
}`
		);
		console.log("✅ Created tailwind.config.js for Tailwind v3");
	} else {
		let config = fs.readFileSync(configPath, "utf-8");
		if (!config.includes(contentPath)) {
			config = config.replace(
				/content:\s*\[(.*?)\]/s,
				`content: [$1,
    "${contentPath}"]`
			);
			fs.writeFileSync(configPath, config);
			console.log("✅ Updated tailwind.config.js for Tailwind v3");
		} else {
			console.log(
				"✅ Dialca UI path already exists in tailwind.config.js"
			);
		}
	}
}

function setupTailwindV4() {
	const viteConfigPaths = ["./vite.config.js", "./vite.config.ts", "./vite.config.mjs"];
	let viteConfigPath = viteConfigPaths.find((p) => fs.existsSync(p));

	// Rutas más amplias para capturar clases
	const contentPaths = [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/dialca-ui/dist/**/*.{js,mjs}',
		'./node_modules/dialca-ui/src/**/*.{js,ts,jsx,tsx}', // 🔥 ESTA ES LA CLAVE
	];

	if (viteConfigPath) {
		let config = fs.readFileSync(viteConfigPath, "utf-8");

		if (!config.includes("@tailwindcss/vite")) {
			// Añadir import
			if (!config.includes("import tailwindcss from '@tailwindcss/vite'")) {
				config = config.replace(
					/(import .* from ['"]@vitejs\/plugin-react['"])/,
					`$1\nimport tailwindcss from '@tailwindcss/vite'`
				);
			}

			// Añadir plugin con múltiples paths
			config = config.replace(
				/plugins:\s*\[(.*?)\]/s,
				`plugins: [$1,
    tailwindcss({
      content: ${JSON.stringify(contentPaths, null, 6)}
    })]`
			);

			fs.writeFileSync(viteConfigPath, config);
			console.log("✅ Updated vite.config for Tailwind v4");
		} else {
			console.log("✅ Tailwind v4 already configured in vite.config");
		}
	} else {
		// Crear vite.config.js
		const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: ${JSON.stringify(contentPaths, null, 6)}
    })
  ],
})`;

		fs.writeFileSync("./vite.config.js", viteConfig);
		console.log("✅ Created vite.config.js for Tailwind v4");
	}
}

// Ejecutar setup basado en la versión
const version = detectTailwindVersion();
console.log(`🔍 Detected Tailwind ${version}`);

if (version === "v4") {
	setupTailwindV4();
} else {
	setupTailwindV3();
}

console.log(`
📖 Next steps:
${
	version === "v4"
		? `1. Add to your root CSS: @import "tailwindcss";
2. Import components: import { Button } from 'dialca-ui'
3. Import styles (optional): import 'dialca-ui/styles/custom'`
		: `1. Import components: import { Button } from 'dialca-ui'
2. Import styles (optional): import 'dialca-ui/styles/custom'`
}
`);
