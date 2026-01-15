import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./Auth": "./src/Auth.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5176,
    cors: true,
  },
  build: {
    target: "esnext",
  },
});
