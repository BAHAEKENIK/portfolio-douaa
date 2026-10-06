import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Explicit — Vite defaults to this, but we're being intentional.
    sourcemap: false,
    // Split vendor code into its own chunk so content changes don't
    // invalidate the React cache in repeat visitors' browsers.
    //
    // Note: framer-motion is intentionally NOT listed here. It's only
    // imported by lazy-loaded sections, so Rollup extracts it into a
    // shared lazy chunk automatically — which is the right place for it.
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
        },
      },
    },
  },
  // Strip console noise from production builds. Keep warn and error —
  // those are legitimately useful for production debugging.
  esbuild: {
    pure: ["console.log", "console.info", "console.debug"],
    drop: ["debugger"],
  },
});