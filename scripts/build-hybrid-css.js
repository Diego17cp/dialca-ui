const fs = require("fs");
const { execSync } = require("child_process");

async function buildHybridCSS() {
	console.log("Building hybrid CSS...");
	try {
		const extractedClasses = await extractClassesFromComponents();
		const tempConfig = generateTempConfig(extractedClasses);
		fs.writeFileSync("./temp-tw.config.js", tempConfig);
		const inputCSS = `@tailwind base;\n@tailwind components;\n@tailwind utilities;`;
		fs.writeFileSync("./temp-input.css", inputCSS);
		execSync(
			"npx tailwindcss -c ./temp-tw.config.js -i ./temp-input.css -o ./dist/dialcaui-tw-classes.css --minify",
			{ stdio: "inherit" }
		);
		execSync(
			"postcss ./src/styles/dialcaui.css -o ./dist/dialcaui-custom-temp.css",
			{ stdio: "inherit" }
		);

		const twClasses = fs.readFileSync(
			"./dist/dialcaui-tw-classes.css",
			"utf-8"
		);
		const customCSS = fs.readFileSync(
			"./dist/dialcaui-custom-temp.css",
			"utf-8"
		);

		const hybridCSS = `/* DialcaUI v${
			require("../package.json").version
		} - Hybrid CSS */
        /* Custom animations and variables */
        ${customCSS}
        /* Extracted Tailwind classes */
        ${twClasses}`;
		fs.writeFileSync("./dist/dialcaui.css", hybridCSS);
		fs.unlinkSync("./temp-tw.config.js");
		fs.unlinkSync("./temp-input.css");
		fs.unlinkSync("./dist/dialcaui-tw-classes.css");
		fs.unlinkSync("./dist/dialcaui-custom-temp.css");

		console.log(
			`Hybrid CSS generated: ${(hybridCSS.length / 1024).toFixed(2)} KB`
		);
		console.log(
			`Extracted ${extractedClasses.length} unique Tailwind classes.`
		);
	} catch (e) {
		console.error("Error building hybrid CSS:", e);
		process.exit(1);
	}
}

async function extractClassesFromComponents() {
	const { glob } = require("glob");
	const componentFiles = await glob("./src/**/*.{js,ts,jsx,tsx,mdx}");
	const extractedClasses = new Set();

	for (const file of componentFiles) {
		const content = fs.readFileSync(file, "utf-8");
		const patterns = [
			/className\s*=\s*["'`]([^"'`]*?)["'`]/g,
			/cn\s*\(\s*["'`]([^"'`]*?)["'`]/g,
			/cn\s*\(\s*`([^`]*?)`/g,
		];
		patterns.forEach((pattern) => {
			let match;
			while ((match = pattern.exec(content)) !== null) {
				const classes = match[1];
				if (classes) {
					classes.split(/\s+/).forEach((cls) => {
						if (cls.trim() && isTailwindClass(cls.trim())) {
							extractedClasses.add(cls.trim());
						}
					});
				}
			}
		});
	}
	return Array.from(extractedClasses);
}

function isTailwindClass(cls) {
	const twPatterns = [
		/^(p|m)(x|y|t|b|l|r)?-/, // padding/margin
		/^(w|h|min-w|min-h|max-w|max-h)-/, // sizing
		/^(text|font|tracking|leading)-/, // typography
		/^(bg|border|outline|ring)-/, // colors/borders
		/^(rounded|shadow)-/, // borders/effects
		/^(flex|grid|items|justify|content|self|place|gap|space)-/, // layout
		/^(opacity|scale|rotate|translate|skew)-/, // transforms
		/^(transition|duration|delay|ease)-/, // transitions
		/^(cursor|pointer-events|overflow|resize|z)-/, // interactions
		/^(hover|focus|active|disabled|checked):/, // states
		/^(bg|text|border)-\[#[0-9A-Fa-f]{6}\]$/, // arbitrary colors
	];
	const exactClasses = [
		"flex",
		"grid",
		"block",
		"inline-block",
		"hidden",
		"relative",
		"absolute",
		"fixed",
		"sticky",
		"cursor-pointer",
		"cursor-not-allowed",
		"transition-all",
		"transform",
	];
	return (
		exactClasses.includes(cls) ||
		twPatterns.some((pattern) => pattern.test(cls))
	);
}

function generateTempConfig(classes) {
	return `
        module.exports = {
            content: [],
            safelist: ${JSON.stringify(classes, null, 2)},
            theme: {
                extend: {
                    keyframes: {
                        'spin-slow': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
                        'spin-fast': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
                        'spin-reverse': { from: { transform: 'rotate(360deg)' }, to: { transform: 'rotate(0deg)' } },
                        'draw': { '0%': { 'stroke-dashoffset': '40' }, '100%': { 'stroke-dashoffset': '0' } }
                    },
                    animation: {
                        'spin-slow': 'spin-slow 2s linear infinite',
                        'spin-fast': 'spin-fast 0.5s linear infinite',
                        'spin-reverse': 'spin-reverse 1s linear infinite',
                        'draw': 'draw 0.3s ease-in-out both'
                    }
                }
            },
            plugins: [],
        };`;
}
buildHybridCSS();