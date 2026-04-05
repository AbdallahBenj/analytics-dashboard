import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/analytics-dashboard/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          recharts: ["recharts"],
          "ui-lib": ["@headlessui/react", "@heroicons/react"],
          router: ["react-router-dom"],
        },
      },
    },
  },
});
