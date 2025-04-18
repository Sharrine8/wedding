import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    base: mode === "production" ? "/wedding/" : "/",
    plugins: [react()],
    server: {
      port: 5000,
    },
  };
});
