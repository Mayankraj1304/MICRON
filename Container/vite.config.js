import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "container",
      remotes: {
        dashboard: "http://localhost:5174/assets/remoteEntry.js",
        profile: "http://localhost:5175/assets/remoteEntry.js",
        auth: "http://localhost:5176/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5173,
  },
  build: {
    target: "esnext",
  },
});
