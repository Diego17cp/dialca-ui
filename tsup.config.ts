import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    external: ["react", "react-dom"],
    sourcemap: true,
    clean: true,
    injectStyle: false,
    outDir: "dist",
    treeshake: true,
})