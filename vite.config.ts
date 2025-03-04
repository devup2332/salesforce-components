import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		dts({
			insertTypesEntry: true,
			outDir: "dist",
			tsconfigPath: "./tsconfig.app.json",
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "salesforce-components",
			formats: ["es", "umd"],
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"], // Excluir dependencias de la build
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
