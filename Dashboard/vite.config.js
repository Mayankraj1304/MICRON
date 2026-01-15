import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboard",
      filename: "remoteEntry.js", // IMPORTANT
      exposes: {
        "./Dashboard": "./src/Dashboard.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5174,
    cors: true, // ✅ ADD THIS
  },
  build: {
    target: "esnext",
  },
});
