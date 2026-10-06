import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "force-exit-after-build",
      closeBundle() {
        // Vercel waits for the Node process to end before finishing.
        // This hook forces an exit after the bundle is generated,
        // preventing a hang on the build server.
        setTimeout(() => process.exit(0), 0);
      },
    },
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
        },
      },
    },
  },
  esbuild: {
    pure: ["console.log", "console.info", "console.debug"],
    drop: ["debugger"],
  },
});