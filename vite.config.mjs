import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  base: "./",

  server: {
    open: "/html/index.html"
  },

  preview: {
    open: "/html/index.html"
  },

  build: {
    outDir: "dist",
    rolldownOptions: {
      input: fileURLToPath(
        new URL("./html/index.html", import.meta.url)
      )
    }
  }
});