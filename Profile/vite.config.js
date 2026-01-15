import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "profile",
      filename: "remoteEntry.js",
      exposes: {
        "./Profile": "./src/Profile.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5175,
    cors: true,
  },
  build: {
    target: "esnext",
  },
});
